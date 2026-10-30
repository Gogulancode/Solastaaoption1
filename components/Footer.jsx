import Link from 'next/link';
export default function Footer(){return (<footer>
<div className="wrap">
<div className="footer-top">
<div>

<h2>A little care. Just for you.</h2>
<p>Thane · Dombivli · Ulhasnagar · Kalyan</p>
</div>
<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services">Book your visit <span aria-hidden="true">↗</span>
</a>
</div>
<div className="footer-nav">
<Link href="/blog">Journal</Link>
<Link href="/">Home</Link>
<Link href="/experience">Our experience</Link>
<Link href="/services">Services</Link>
<Link href="/membership">Membership</Link>
<Link href="/franchise">Franchise</Link>
<Link href="/careers">Careers</Link>
<Link href="/locations">Find us</Link>
</div>
<nav className="footer-social" aria-label="Social media">
<span>Follow Solastaa</span>
<a href="https://www.facebook.com/evolvewithsolastaa" target="_blank" rel="noopener noreferrer" aria-label="Solastaa on Facebook (opens in a new tab)">Facebook <span aria-hidden="true">&#8599;</span>
</a>
<a href="https://www.instagram.com/solastaa.salon/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Solastaa on Instagram (opens in a new tab)">Instagram <span aria-hidden="true">&#8599;</span>
</a>
</nav>
<div className="footer-bottom">
<span>© Solastaa Salon · Hair · Skin · Beauty</span>
<span>Open every day, 10 AM–10 PM</span>
</div>
</div>
</footer>);}
