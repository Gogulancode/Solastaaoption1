import HomeServices from '../components/HomeServices';
import HomeStats from '../components/HomeStats';
import Link from 'next/link';
import Journal from '../components/Journal';
export const metadata={title:"Home"};
export default function Page(){return <div data-page="index">
<section className="salon-banner" aria-labelledby="salon-banner-title">
<img className="salon-banner-image" src="/assets/solastaa-beauty-banner.webp" alt="" fetchPriority="high" />
<div className="wrap salon-banner-inner">
<div className="salon-banner-copy">
<div className="eyebrow">Solastaa Unisex Salon</div>
<h1 id="salon-banner-title">A little time.<br />All for you.</h1>
<p>Hair, skin and beauty for everyone.<br />Personal care at your neighbourhood Solastaa.</p>
<div className="actions">
<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services">Book an appointment <span aria-hidden="true">↗</span>
</a>
<Link className="btn outline" href="/services">Explore services <span aria-hidden="true">↗</span>
</Link>
</div>
<Link className="discover" href="/experience">Get to know Solastaa</Link>
</div>
</div>
</section>

<HomeServices/>

<section className="section cream">
<div className="wrap split">
<img className="" src="/assets/experience-main-BatBSmkU.jpg" alt="A stylist consulting with a salon guest" />
<div>
<div className="eyebrow">The Solastaa experience</div>
<h2>A good appointment<br />
starts with a conversation.
</h2>
<p>Every appointment begins with listening. Our artists understand your style, your routine and the result you want — then create a treatment that feels entirely yours.</p>
<Link className="text-link" href="/experience">Discover our approach <span aria-hidden="true">↗</span>
</Link>
</div>
</div>
</section>
<section className="membership-banner" aria-labelledby="club-title">
<img className="membership-banner-image" src="/assets/gallery-interior-D9uy9eqI.jpg" alt="" loading="lazy" />
<div className="wrap membership-banner-inner">
<div className="membership-banner-panel">
<p className="membership-banner-kicker">The Solastaa Members Club</p>
<h2 id="club-title">More care,<br />all year.</h2>
<p className="membership-banner-description">20% off services, monthly complimentary care and benefits to share with your family.</p>
<div className="membership-banner-actions"><p><strong>₹999</strong><span> / year</span></p><Link href="/membership" className="btn outline">Explore membership</Link></div>
</div>
</div>
</section>

<section className="section home-visit" aria-labelledby="home-visit-title">
<div className="wrap home-visit-layout">
<div className="home-visit-photo"><img src="/assets/gallery-artist-C1kPDt05.jpg" alt="A stylist working on the finishing touches of a guest’s hair" loading="lazy" /></div>
<div className="home-visit-copy">
<p className="eyebrow">Your appointment</p>
<h2 id="home-visit-title">Let’s make it<br />time well spent.</h2>
<ol className="home-visit-stages">
<li><span>Before we begin</span><div><h3>Tell us what you have in mind.</h3><p>A small change or a fresh start? Share your ideas, ask questions and talk through the service with us.</p></div></li>
<li><span>In the chair</span><div><h3>Settle in. We’ll take it from here.</h3><p>We’ll work towards the look you’ve agreed on. If something needs adjusting, just let us know.</p></div></li>
<li><span>Before you leave</span><div><h3>Take a little know-how home.</h3><p>Ask us how to keep up the results, what to use and when to come back. We’ll keep the advice practical.</p></div></li>
</ol>
<Link className="text-link" href="/experience">Get to know Solastaa <span aria-hidden="true">↗</span></Link>
</div>
</div>
</section>

<section className="home-bridal">
<div className="home-bridal-photo">
<img className="" src="/assets/service-beauty-BnJrA1er.jpg" alt="Makeup artistry for a special occasion" />
</div>
<div className="home-bridal-copy">
<div className="eyebrow">The bridal edit</div>
<h2>For your moment.<br />
For your memories.
</h2>
<p>Artistry that feels like you. Begin with a personal consultation and explore a look for your most meaningful day.</p>
<Link className="btn outline" href="/services?category=Bridal">Explore bridal services <span aria-hidden="true">↗</span>
</Link>
</div>
</section>
<section className="section wrap home-opportunities">
<div className="grid two">
<article>
<img className="" src="/assets/franchise-preview-BJbWqYUi.jpg" alt="The Solastaa team welcoming a client" />
<div className="opportunity-copy">
<div className="eyebrow">Franchise & partnerships</div>
<h2>A shared vision.<br />
A beautiful future.
</h2>
<p>Bring the Solastaa experience to your city with a salon format, brand support and training.</p>
<Link className="text-link" href="/franchise">Become a partner <span aria-hidden="true">↗</span>
</Link>
</div>
</article>
<article>
<img className="" src="/assets/careers-preview-CFSUVHXC.jpg" alt="The salon team sharing their craft" />
<div className="opportunity-copy">
<div className="eyebrow">Careers at Solastaa</div>
<h2>Your talent.<br />
Room to flourish.
</h2>
<p>Find space for your craft in a professional environment that values personal care and continuous learning.</p>
<Link className="text-link" href="/careers">Explore careers <span aria-hidden="true">↗</span>
</Link>
</div>
</article>
</div>
</section>
<section className="section cream">
<div className="wrap">
<div className="section-head">
<div>
<div className="eyebrow">Closer to you</div>
<h2>Find your Solastaa.
</h2>
</div>
<Link className="text-link" href="/locations">View all salons <span aria-hidden="true">↗</span>
</Link>
</div>
<div className="grid four home-locations">
<article className="location">
<h3>Thane</h3>
<p className="address">Shop No 29, Ground Floor, Dosti Imperia, Ghodbunder Road, Manpada, Thane, Maharashtra 400607</p>
<p>Next to Bhagat Tarachand Hotel</p>
<p className="small-note">Mon–Sun · 10:00 AM–10:00 PM</p>
<div className="salon-contact">
<a href="tel:+918976579513" aria-label="Call Solastaa Thane at +91 8976579513">+91 8976579513</a>
<a href="mailto:accounts@solastaa.com" aria-label="Email Solastaa Thane">accounts@solastaa.com</a>
</div>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services/bf7895f0-c93f-416f-9803-c3a66220da79">Book your visit <span aria-hidden="true">↗</span>
</a>
</article>
<article className="location">
<h3>Dombivli</h3>
<p className="address">Gala No. 4, Arya Sapphire, New Kalyan Road, Trimurti Nagar, Dombivli East, Kalyan, Maharashtra 421203</p>
<p>Opposite KDMC Ground, near House of Tendulkar</p>
<p className="small-note">Mon–Sun · 10:00 AM–10:00 PM</p>
<div className="salon-contact">
<a href="tel:+917777078297" aria-label="Call Solastaa Dombivli at +91 7777078297">+91 7777078297</a>
<a href="mailto:accounts@solastaa.com" aria-label="Email Solastaa Dombivli">accounts@solastaa.com</a>
</div>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services/0fdfcd2d-22fa-4685-84b1-f082cfe7a4c2">Book your visit <span aria-hidden="true">↗</span>
</a>
</article>
<article className="location">
<h3>Ulhasnagar</h3>
<p className="address">Shop No 18C, Regency Antilia, Mharal, Ulhasnagar, Maharashtra 421103</p>
<p>Next to D-Mart Road</p>
<p className="small-note">Mon–Sun · 10:00 AM–10:00 PM</p>
<div className="salon-contact">
<a href="tel:+918097039888" aria-label="Call Solastaa Ulhasnagar at +91 8097039888">+91 8097039888</a>
<a href="mailto:accounts@solastaa.com" aria-label="Email Solastaa Ulhasnagar">accounts@solastaa.com</a>
</div>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services/65ae969e-bbce-47be-ad0f-8b2eb6af4a87">Book your visit <span aria-hidden="true">↗</span>
</a>
</article>
<article className="location">
<h3>Kalyan</h3>
<p className="address">Shop No 10 & 11, Wing A, Shreeji Solitaire, Gandhare, Khadakpada, Kalyan, Maharashtra 421301</p>
<p>Khadakpada, Gandhare</p>
<p className="small-note">Mon–Sun · 10:00 AM–10:00 PM</p>
<div className="salon-contact">
<a href="tel:+919321154359" aria-label="Call Solastaa Kalyan at +91 9321154359">+91 9321154359</a>
<a href="mailto:accounts@solastaa.com" aria-label="Email Solastaa Kalyan">accounts@solastaa.com</a>
</div>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services/1981946f-579a-4ec7-83b7-0be04d5f2337">Book your visit <span aria-hidden="true">↗</span>
</a>
</article>
</div>
</div>
</section>
<Journal/>
<HomeStats/>
<section className="cta">
<div className="eyebrow">Your time to evolve</div>
<h2>See you at the salon.
</h2>
<p>Choose your salon and tell us what you have in mind.</p>
<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services">Book an appointment <span aria-hidden="true">↗</span>
</a>
</section>
</div>;}
