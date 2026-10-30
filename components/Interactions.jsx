'use client';
import { Children, cloneElement, useEffect, useRef, useState } from 'react';

export function FilterGrid({kind,className,children}){
 const all=kind==='services'?'All':'All salons';
 const items=Children.toArray(children).filter(child=>typeof child==='object');
 const categories=items.map(child=>child.props['data-category']);
 const [active,setActive]=useState(all);
 useEffect(()=>{const category=new URLSearchParams(window.location.search).get('category');if(category)setActive(category);},[]);
 const selected=categories.includes(active)?active:all;
 return <><div className="filters" aria-label={kind==='services'?'Filter services':'Filter salons'}>{[all,...categories].map(category=><button key={category} className={`filter ${selected===category?'active':''}`} aria-pressed={selected===category} onClick={()=>setActive(category)}>{category}</button>)}</div><div className={className}>{items.map(child=>cloneElement(child,{hidden:selected!==all&&child.props['data-category']!==selected}))}</div></>;
}

export function EnquiryForm({kind}){
 const [result,setResult]=useState('');
 const [pending,setPending]=useState(false);
 const requestRef=useRef(null);
 const busy=useRef(false);
 const careers=kind==='careers';
 async function submit(event){
  event.preventDefault();
  if(busy.current)return;

  const form=event.currentTarget;
  const fields=Object.fromEntries(new FormData(form));
  const fingerprint=JSON.stringify(fields);
  if(requestRef.current?.fingerprint!==fingerprint)requestRef.current={fingerprint,id:crypto.randomUUID()};
  busy.current=true;setPending(true);setResult('');
  try{
   const response=await fetch(careers?'/api/careers':'/api/franchise',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...fields,submissionId:requestRef.current.id})});
   const data=await response.json();
   if(!response.ok||!data.ok)throw new Error(data.error||'Unable to send your application. Please try again.');
   setResult(careers?'Thank you. Your application has been sent to the Solastaa team.':'Thank you. Your franchise enquiry has been sent to the Solastaa team.');form.reset();requestRef.current=null;
  }catch(error){setResult(error.message==='Failed to fetch'?'Connection interrupted. Please try again.':error.message);}
  finally{busy.current=false;setPending(false);}
 }
 return <form className="form-panel" onSubmit={submit} aria-busy={pending}>
 <h3>{careers?'Introduce yourself':'Let’s start a conversation'}</h3>
 <p>{careers?'Tell us about the work you do. All fields are required except the message.':'Tell us where you would like to open a Solastaa salon. All fields are required except the message.'}</p>
 <div className="form-grid"><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Full name"/></label><label>Email address<input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@example.com"/></label>
 {careers?<label className="full">Your area of expertise<select name="expertise" required defaultValue=""><option value="">Select an area</option>{['Hair artistry','Skin & beauty','Salon operations','Other'].map(value=><option key={value}>{value}</option>)}</select></label>:<label className="full">City of interest<input name="city" maxLength={100} required placeholder="Where would you like to partner?"/></label>}
 <label className="full">Tell us a little about yourself<textarea name="message" maxLength={4000} placeholder="Share a few details (optional)"/></label></div>
 {<div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>}
 <button className="btn" type="submit" disabled={pending}>{pending?'Sending…':careers?'Send application':'Send enquiry'} <span aria-hidden="true">↗</span></button><div className="result" role="status" aria-live="polite">{result}</div></form>;
}