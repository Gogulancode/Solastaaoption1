import test from 'node:test';
import assert from 'node:assert/strict';
import { POST } from '../app/api/careers/route.js';
const valid={name:'Test Applicant',email:'applicant@example.com',expertise:'Salon operations',message:'Test message',submissionId:'12345678-1234-1234-1234-123456789012'};
function request(data,origin='http://localhost:3001'){return new Request('http://localhost:3001/api/careers',{method:'POST',headers:{'content-type':'application/json',origin},body:JSON.stringify(data)});}
test('rejects bad input and foreign origins before contacting provider',async()=>{
 assert.equal((await POST(request({...valid,email:'invalid'}))).status,400);
 assert.equal((await POST(request(valid,'https://other.example'))).status,403);
 assert.equal((await POST(request({...valid,expertise:'invalid'}))).status,400);
 assert.equal((await POST(request({...valid,message:'x'.repeat(4001)}))).status,400);
});
test('honeypot is ignored without sending',async()=>{assert.equal((await POST(request({...valid,website:'spam'}))).status,200);});
test('requires configuration and sends only to configured recipient',async()=>{
 const saved={...process.env};const originalFetch=globalThis.fetch;
 try{
 delete process.env.RESEND_API_KEY;
 assert.equal((await POST(request(valid))).status,503);
 process.env.RESEND_API_KEY='test-key';process.env.EMAIL_FROM='Website <website@forms.example.com>';process.env.CAREERS_EMAIL_TO='careers@example.com';
 globalThis.fetch=async(url,options)=>{const payload=JSON.parse(options.body);assert.equal(url,'https://api.resend.com/emails');assert.deepEqual(payload.to,['careers@example.com']);assert.equal(payload.reply_to,valid.email);assert.equal(options.headers['Idempotency-Key'],'careers/'+valid.submissionId);assert.ok(payload.text.includes(valid.message));return Response.json({id:'test-id'});};
 assert.equal((await POST(request({...valid,to:'attacker@example.com'}))).status,200);
 globalThis.fetch=async()=>Response.json({message:'provider error'},{status:403});
 const failed=await POST(request(valid));assert.equal(failed.status,502);assert.ok(!(await failed.text()).includes('provider error'));
 globalThis.fetch=async()=>{throw new Error('network failure');};assert.equal((await POST(request(valid))).status,502);
 }finally{globalThis.fetch=originalFetch;for(const key of ['RESEND_API_KEY','EMAIL_FROM','CAREERS_EMAIL_TO']){if(saved[key]===undefined)delete process.env[key];else process.env[key]=saved[key];}}
});
