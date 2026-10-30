import Link from 'next/link';
import { FilterGrid } from '../../components/Interactions';
export const metadata={title:"Find us"};
export default function Page(){return <div data-page="locations">
<div className="wrap page-intro">
<div className="crumb">
<Link href="/">Home</Link> / Locate us</div>
<div className="eyebrow">Locate us</div>
<h1>Find your Solastaa.</h1>
<p>Find addresses, opening hours and contact details for all four salons. Book your visit or get directions below.</p>
</div>
<section className="section wrap">
<FilterGrid kind="locations" className="grid two">
<article className="location" data-category="Thane">
<h3>Solastaa Salon — Thane</h3>
<p className="address">Shop No 29, Ground Floor, Dosti Imperia, Ghodbunder Road, Manpada, Thane, Maharashtra 400607</p>
<p>⌖ Next to Bhagat Tarachand Hotel</p>
<p>◷ Mon–Sun · 10:00 AM–10:00 PM</p>
<div className="salon-contact">
<a href="tel:+918976579513" aria-label="Call Solastaa Thane at +91 8976579513">+91 8976579513</a>
<a href="mailto:accounts@solastaa.com" aria-label="Email Solastaa Thane">accounts@solastaa.com</a>
</div>
<div className="actions">
<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services/bf7895f0-c93f-416f-9803-c3a66220da79">Book here <span aria-hidden="true">↗</span>
</a>
<a className="btn outline" href="https://www.google.com/maps/search/?api=1&query=Solastaa%20Salon%20Shop%20No%2029%2C%20Ground%20Floor%2C%20Dosti%20Imperia%2C%20Ghodbunder%20Road%2C%20Manpada%2C%20Thane%2C%20Maharashtra%20400607">Directions <span aria-hidden="true">↗</span>
</a>
</div>
</article>
<article className="location" data-category="Dombivli">
<h3>Solastaa Salon — Dombivli</h3>
<p className="address">Gala No. 4, Arya Sapphire, New Kalyan Road, Trimurti Nagar, Dombivli East, Kalyan, Maharashtra 421203</p>
<p>⌖ Opposite KDMC Ground, near House of Tendulkar</p>
<p>◷ Mon–Sun · 10:00 AM–10:00 PM</p>
<div className="salon-contact">
<a href="tel:+917777078297" aria-label="Call Solastaa Dombivli at +91 7777078297">+91 7777078297</a>
<a href="mailto:accounts@solastaa.com" aria-label="Email Solastaa Dombivli">accounts@solastaa.com</a>
</div>
<div className="actions">
<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services/0fdfcd2d-22fa-4685-84b1-f082cfe7a4c2">Book here <span aria-hidden="true">↗</span>
</a>
<a className="btn outline" href="https://www.google.com/maps/search/?api=1&query=Solastaa%20Salon%20Gala%20No.%204%2C%20Arya%20Sapphire%2C%20New%20Kalyan%20Road%2C%20Trimurti%20Nagar%2C%20Dombivli%20East%2C%20Kalyan%2C%20Maharashtra%20421203">Directions <span aria-hidden="true">↗</span>
</a>
</div>
</article>
<article className="location" data-category="Ulhasnagar">
<h3>Solastaa Salon — Ulhasnagar</h3>
<p className="address">Shop No 18C, Regency Antilia, Mharal, Ulhasnagar, Maharashtra 421103</p>
<p>⌖ Next to D-Mart Road</p>
<p>◷ Mon–Sun · 10:00 AM–10:00 PM</p>
<div className="salon-contact">
<a href="tel:+918097039888" aria-label="Call Solastaa Ulhasnagar at +91 8097039888">+91 8097039888</a>
<a href="mailto:accounts@solastaa.com" aria-label="Email Solastaa Ulhasnagar">accounts@solastaa.com</a>
</div>
<div className="actions">
<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services/65ae969e-bbce-47be-ad0f-8b2eb6af4a87">Book here <span aria-hidden="true">↗</span>
</a>
<a className="btn outline" href="https://www.google.com/maps/search/?api=1&query=Solastaa%20Salon%20Shop%20No%2018C%2C%20Regency%20Antilia%2C%20Mharal%2C%20Ulhasnagar%2C%20Maharashtra%20421103">Directions <span aria-hidden="true">↗</span>
</a>
</div>
</article>
<article className="location" data-category="Kalyan">
<h3>Solastaa Salon — Kalyan</h3>
<p className="address">Shop No 10 & 11, Wing A, Shreeji Solitaire, Gandhare, Khadakpada, Kalyan, Maharashtra 421301</p>
<p>⌖ Khadakpada, Gandhare</p>
<p>◷ Mon–Sun · 10:00 AM–10:00 PM</p>
<div className="salon-contact">
<a href="tel:+919321154359" aria-label="Call Solastaa Kalyan at +91 9321154359">+91 9321154359</a>
<a href="mailto:accounts@solastaa.com" aria-label="Email Solastaa Kalyan">accounts@solastaa.com</a>
</div>
<div className="actions">
<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services/1981946f-579a-4ec7-83b7-0be04d5f2337">Book here <span aria-hidden="true">↗</span>
</a>
<a className="btn outline" href="https://www.google.com/maps/search/?api=1&query=Solastaa%20Salon%20Shop%20No%2010%20%26%2011%2C%20Wing%20A%2C%20Shreeji%20Solitaire%2C%20Gandhare%2C%20Khadakpada%2C%20Kalyan%2C%20Maharashtra%20421301">Directions <span aria-hidden="true">↗</span>
</a>
</div>
</article>
</FilterGrid>
</section>
</div>;}
