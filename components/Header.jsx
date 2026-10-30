'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
const navigation=[['/','Home'],['/experience','Our experience'],['/services','Services'],['/membership','Membership'],['/franchise','Franchise'],['/careers','Careers'],['/locations','Find us']];
export default function Header(){
 const path=usePathname();const [open,setOpen]=useState(false);const toggle=useRef(null);const header=useRef(null);
 useEffect(()=>{const key=event=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}};const outside=event=>{if(!header.current?.contains(event.target))setOpen(false);};const media=matchMedia('(min-width:1281px)');const close=()=>setOpen(false);document.addEventListener('keydown',key);document.addEventListener('click',outside);media.addEventListener('change',close);return()=>{document.removeEventListener('keydown',key);document.removeEventListener('click',outside);media.removeEventListener('change',close);};},[]);
 return <><a className="skip-link" href="#main-content">Skip to content</a><header ref={header}><div className="wrap header-inner"><Link className="logo" href="/" aria-label="Solastaa Salon home"><img src="/assets/solastaa-mark-gold-lZpvOrOV.png" alt=""/><span className="brand">Solastaa Salon<small>EVOLVE YOURSELF</small></span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>Menu <span aria-hidden="true">☰</span></button><nav className={`nav ${open?'open':''}`} id="navigation" aria-label="Main navigation">{navigation.map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services">Book appointment <span aria-hidden="true">↗</span></a></nav></div></header></>;
}
