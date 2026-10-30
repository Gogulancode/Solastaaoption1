import Link from 'next/link';
export const metadata = { title: 'Our experience' };
const moments = [
 ['A conversation first', 'Tell us what you like, what you want to change and how much time you spend on your routine. Bring a reference if you have one.'],
 ['A plan you understand', 'Talk through the service, the finish and the time involved with your stylist before getting started.'],
 ['Care beyond your visit', 'Ask how to maintain your look at home, which steps matter most and when to plan your next appointment.'],
];
export default function Page() {
 return <div data-page="experience">
  <nav className="wrap experience-crumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Our experience</span></nav>
  <section className="wrap experience-hero">
   <div className="experience-hero-copy"><p className="eyebrow">The Solastaa experience</p><h1>A little time.<br/>A personal touch.</h1><p>Come in for a change, a refresh or simply a little time for yourself. We start by getting to know what feels right for you.</p><a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services">Book an appointment <span aria-hidden="true">↗</span></a></div>
   <img src="/assets/experience-main-BatBSmkU.jpg" alt="A stylist talking with a guest at Solastaa" fetchPriority="high"/>
  </section>
  <section className="experience-principles section">
   <div className="wrap experience-principles-grid"><div><p className="eyebrow">Our approach</p><h2>Care that fits<br/>your everyday.</h2></div><article><h3>Your preferences</h3><p>A favourite style, a new idea or something you would rather avoid. There is room to talk it through.</p></article><article><h3>Your routine</h3><p>The best look is one you feel comfortable with. Tell us how you care for yourself between visits.</p></article><article><h3>Your occasion</h3><p>An ordinary week or a date you have been looking forward to. We help you prepare for both.</p></article></div>
  </section>
  <section className="section wrap experience-visit">
   <div className="section-head"><div><p className="eyebrow">During your visit</p><h2>From hello to the final detail.</h2></div><p>Knowing what to expect makes it easier to settle in. Here is how we approach your appointment.</p></div>
   <div className="experience-visit-grid">{moments.map(([title,copy],index)=><article key={title}><span className="experience-step">0{index+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
  </section>
  <section className="experience-space">
   <img src="/assets/gallery-interior-D9uy9eqI.jpg" alt="Salon seating and illuminated mirrors inside Solastaa" loading="lazy"/>
   <div className="experience-space-copy"><p className="eyebrow">Make yourself comfortable</p><h2>A moment away<br/>from the everyday.</h2><p>Settle into the chair and let the appointment be your time. Whether you are here for regular grooming or getting ready for an occasion, you are welcome at Solastaa.</p><Link className="text-link" href="/locations">Find your salon <span aria-hidden="true">↗</span></Link></div>
  </section>
  <section className="experience-neighbourhood section"><div className="wrap experience-neighbourhood-inner"><div><p className="eyebrow">Closer to you</p><h2>Find your neighbourhood Solastaa.</h2><p>Hair, skin and beauty care in Thane, Dombivli, Ulhasnagar and Kalyan.<br/>Open every day, 10 AM to 10 PM.</p></div><Link href="/locations" className="btn outline">Find a salon <span aria-hidden="true">↗</span></Link></div></section>
  <section className="cta"><h2>Make a little time for yourself.</h2><p>Choose your salon and book a time that works for you.</p><a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services">Book an appointment <span aria-hidden="true">↗</span></a></section>
 </div>;
}
