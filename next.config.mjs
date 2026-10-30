export default {
 async redirects(){return [{source:'/index.html',destination:'/',permanent:true},...['experience','services','membership','franchise','careers','locations','booking'].map(page=>({source:`/${page}.html`,destination:`/${page}`,permanent:true}))];}
};
