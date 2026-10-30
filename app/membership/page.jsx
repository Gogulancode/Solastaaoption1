import Link from 'next/link';
export const metadata={title:"Membership"};
export default function Page(){return <div data-page="membership">

<div className="wrap membership-breadcrumb crumb">
<Link href="/">Home</Link> / Membership</div>
<section className="wrap membership-hero" aria-labelledby="membership-title">
  <div className="membership-hero-copy">
    <div className="eyebrow">Exclusive members club</div>
    <h1 id="membership-title">A year of<br />
<em>looking after you.</em>
</h1>
    <p>Premium care. Thoughtful benefits.<br />A more beautiful year ahead.</p>
    <div className="membership-price">₹999<span>/ year</span>
</div>
    <p className="membership-validity">12 months of exclusive benefits</p>
    <div className="actions">
<a className="btn" href="#membership-enquiry">Enquire about membership <span aria-hidden="true">↗</span>
</a>
<a className="btn outline" href="#membership-benefits">View benefits <span aria-hidden="true">↗</span>
</a>
</div>
  </div>
  <div className="membership-photo">
<img className="" src="/assets/service-hair-DL3OZ_3y.jpg" alt="A Solastaa stylist caring for a guest’s hair" />
<span>YOUR YEAR. YOUR SOLASTAA.</span>
</div>
</section>
<section className="wrap membership-benefits" id="membership-benefits" aria-labelledby="benefits-title">
  <h2 className="eyebrow" id="benefits-title">Membership benefits</h2>
  <div className="membership-perks">
    <div>
<strong>20<span>%</span>
</strong>
<h3>off all services</h3>
<p>All year, for you.</p>
</div>
    <div>
<strong>5<span>%</span>
</strong>
<h3>off all products</h3>
<p>On your favourites.</p>
</div>
    <div>
<strong>3</strong>
<h3>family members</h3>
<p>Add up to three. Share the benefits.</p>
</div>
  </div>
</section>
<section className="wrap section membership-complimentary" aria-labelledby="complimentary-title">
  <div className="section-head">
<div>
<div className="eyebrow">A little care, every month</div>
<h2 id="complimentary-title">12 sessions.<br />
<em>With our compliments.</em>
</h2>
</div>
<p>One complimentary service per month, from the selection below. For the primary member, Monday–Friday, by appointment.</p>
</div>
  <table className="membership-table">
<caption>Your 12 complimentary sessions</caption>
<thead>
<tr>
<th scope="col">Service</th>
<th scope="col">Sessions</th>
<th scope="col">Value</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">Hairwash Classic L’Oréal (Medium)</th>
<td>4</td>
<td>₹1,800</td>
</tr>
<tr>
<th scope="row">Blowdry Female (Medium)</th>
<td>2</td>
<td>₹1,100</td>
</tr>
<tr>
<th scope="row">Deep Conditioning + Relaxing Head Massage (20 min)</th>
<td>2</td>
<td>₹1,200</td>
</tr>
<tr>
<th scope="row">Cleanup Classic Anita’s Deep Pore</th>
<td>1</td>
<td>₹950</td>
</tr>
<tr>
<th scope="row">Express Pedicure (20 min)</th>
<td>1</td>
<td>₹900</td>
</tr>
<tr>
<th scope="row">Facial Add-On Booster — Energize Soothing Mask</th>
<td>1</td>
<td>₹1,200</td>
</tr>
<tr>
<th scope="row">Men’s Haircut (30 min)</th>
<td>1</td>
<td>₹350</td>
</tr>
</tbody>
</table>
  <div className="membership-value">
<span>A year of complimentary care</span>
<strong>₹7,500 <small>total value</small>
</strong>
</div>
</section>
<section className="membership-birthday">
<div className="wrap">
<div>
<div className="eyebrow">Birthday & anniversary treat</div>
<h2>35<span>% off</span>
</h2>
</div>
<p>A little extra for your special moments.<br />Enjoy 35% off any one service in your birthday month, and any one service in your anniversary month. Once per occasion.</p>
</div>
</section>
<section className="wrap section membership-pricing" aria-label="Member service prices">
  <div>
<div className="membership-pricing-intro">
<div className="eyebrow">Six exclusive services</div>
<h2>₹399 <em>each.</em>
</h2>
<p>Each service once during your membership. For the primary member, Monday–Friday, by appointment.</p>
</div>
  <table className="membership-table">
<caption>Exclusive services — member and regular prices</caption>
<thead>
<tr>
<th scope="col">Service</th>
<th scope="col">Member</th>
<th scope="col">Regular</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">Stylish Haircut & Beard</th>
<td>₹399</td>
<td>₹650</td>
</tr>
<tr>
<th scope="row">Reflexology — Hand/Feet (30 min)</th>
<td>₹399</td>
<td>₹950</td>
</tr>
<tr>
<th scope="row">Bleach / Face D-Tan</th>
<td>₹399</td>
<td>₹750</td>
</tr>
<tr>
<th scope="row">Express Manicure</th>
<td>₹399</td>
<td>₹900</td>
</tr>
<tr>
<th scope="row">Head Massage</th>
<td>₹399</td>
<td>₹850</td>
</tr>
<tr>
<th scope="row">Scalp Care Men Detoxifying</th>
<td>₹399</td>
<td>₹1,250</td>
</tr>
</tbody>
</table>
  <p className="membership-saving">Save ₹2,956 across all six services.</p>
</div>
  <div>
<div className="membership-pricing-intro">
<div className="eyebrow">Something special</div>
<h2>Premium care.<br />
<em>Member prices.</em>
</h2>
<p>One-time premium treatments at exclusive member rates.</p>
</div>
  <table className="membership-table">
<caption>Premium services — member and regular prices</caption>
<thead>
<tr>
<th scope="col">Service</th>
<th scope="col">Member</th>
<th scope="col">Regular</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">L’Oréal Classic Hair Spa</th>
<td>₹1,099</td>
<td>₹1,750</td>
</tr>
<tr>
<th scope="row">Naturica Anti Dandruff Ritual</th>
<td>₹1,999</td>
<td>₹3,250</td>
</tr>
<tr>
<th scope="row">Shea Collagen / Collagen Boost Luxury Female Spa (Medium)</th>
<td>₹2,499</td>
<td>₹3,500</td>
</tr>
<tr>
<th scope="row">Global / Highlights / Balayage</th>
<td>₹3,999</td>
<td>₹6,000</td>
</tr>
<tr>
<th scope="row">Botox Treatment (Medium Hair)</th>
<td>₹4,999</td>
<td>₹8,850</td>
</tr>
<tr>
<th scope="row">Pomegranate Luxury Facial</th>
<td>₹2,799</td>
<td>₹4,750</td>
</tr>
<tr>
<th scope="row">Prestige Facial (Thalgo)</th>
<td>₹3,999</td>
<td>₹6,500</td>
</tr>
<tr>
<th scope="row">Full Body Polishing</th>
<td>₹3,499</td>
<td>₹6,000</td>
</tr>
</tbody>
</table>
  <p className="membership-saving">Save ₹15,708 across these premium treatments.</p>
</div>
</section>
<section className="membership-enquiry cream" id="membership-enquiry">
<div className="wrap">
<div>
<div className="eyebrow">Your membership starts here</div>
<h2>Make this<br />
<em>your year.</em>
</h2>
<p>Speak with your salon to join the Exclusive Members Club. Choose a location below to call the team.</p>
<p className="small-note">Yearly membership ₹999 · 12 months from activation</p>
</div>
<div className="membership-salons">
<a href="tel:+918976579513" aria-label="Call Solastaa Thane about membership">
<span>Thane</span>
<span>+91 8976579513 <span aria-hidden="true">↗</span>
</span>
</a>
<a href="tel:+917777078297" aria-label="Call Solastaa Dombivli about membership">
<span>Dombivli</span>
<span>+91 7777078297 <span aria-hidden="true">↗</span>
</span>
</a>
<a href="tel:+918097039888" aria-label="Call Solastaa Ulhasnagar about membership">
<span>Ulhasnagar</span>
<span>+91 8097039888 <span aria-hidden="true">↗</span>
</span>
</a>
<a href="tel:+919321154359" aria-label="Call Solastaa Kalyan about membership">
<span>Kalyan</span>
<span>+91 9321154359 <span aria-hidden="true">↗</span>
</span>
</a>
<a className="membership-email" href="mailto:accounts@solastaa.com?subject=Exclusive%20Members%20Club%20enquiry">Prefer email? accounts@solastaa.com <span aria-hidden="true">↗</span>
</a>
</div>
</div>
</section>
<section className="wrap section membership-terms" aria-labelledby="membership-terms-title">
<h2 id="membership-terms-title">A few things <em>to know.</em>
</h2>
<p>Membership terms & conditions</p>
<ol>
<li>Membership is valid for 12 months from the activation date.</li>
<li>One complimentary service per month during the membership period.</li>
<li>Complimentary and exclusive services are available Monday–Friday only, with prior appointment.</li>
<li>One-time flat services apply to mid-length hair only. Additional charges apply for long or extra-long hair.</li>
<li>OTP verification is mandatory to use membership benefits.</li>
<li>Complimentary services and exclusive ₹399 services can be used by the primary member only.</li>
<li>Membership benefits cannot be combined with other offers.</li>
</ol>
</section>
</div>;}
