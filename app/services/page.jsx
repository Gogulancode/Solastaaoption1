import Link from 'next/link';
import { FilterGrid } from '../../components/Interactions';
export const metadata={title:"Services"};
export default function Page(){return <div data-page="services">
<div className="wrap page-intro">
<div className="crumb">
<Link href="/">Home</Link> / Our expertise</div>
<div className="eyebrow">Our expertise</div>
<h1>What brings you<br />to Solastaa?</h1>
<p>Explore hair, skin, makeup and nail services. Choose a category, then plan a visit to your nearest salon.</p>
</div>
<section className="section wrap">
<FilterGrid kind="services" className="grid three">
<article className="card service-card" data-category="Hair">
<a href="https://solastaa.zenoti.com/webstoreNew/services" className="photo">
<img className="" src="/assets/service-hair-DL3OZ_3y.jpg" alt="Hair & styling" />
</a>
<div className="meta">Hair</div>
<h3>Hair & styling</h3>
<p>Cuts, colour, styling and treatments for your hair and routine.</p>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services">View services & book <span aria-hidden="true">↗</span>
</a>
</article>
<article className="card service-card" data-category="Skin">
<a href="https://solastaa.zenoti.com/webstoreNew/services" className="photo">
<img className="" src="/assets/service-skin-CnWiL5sD.jpg" alt="Skin & facials" />
</a>
<div className="meta">Skin</div>
<h3>Skin & facials</h3>
<p>Facials and skin care chosen around your needs.</p>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services">View services & book <span aria-hidden="true">↗</span>
</a>
</article>
<article className="card service-card" data-category="Beauty">
<a href="https://solastaa.zenoti.com/webstoreNew/services" className="photo">
<img className="" src="/assets/service-beauty-BnJrA1er.jpg" alt="Makeup & Beauty" />
</a>
<div className="meta">Beauty</div>
<h3>Makeup & Beauty</h3>
<p>Makeup for celebrations, special occasions and the look you have in mind.</p>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services">View services & book <span aria-hidden="true">↗</span>
</a>
</article>
<article className="card service-card" data-category="Nails">
<a href="https://solastaa.zenoti.com/webstoreNew/services" className="photo">
<img className="" src="/assets/service-nails-BnMtwXs3.jpg" alt="Nails & hand care" />
</a>
<div className="meta">Nails</div>
<h3>Nails & hand care</h3>
<p>Manicures, pedicures and the finishing touches for hands and feet.</p>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services">View services & book <span aria-hidden="true">↗</span>
</a>
</article>
<article className="card service-card" data-category="Bridal">
<a href="https://solastaa.zenoti.com/webstoreNew/services" className="photo">
<img className="" src="/assets/service-beauty-BnJrA1er.jpg" alt="Bridal hair & makeup" />
</a>
<div className="meta">Bridal</div>
<h3>Bridal hair & makeup</h3>
<p>A personal consultation for a look that feels unmistakably you.</p>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services">View services & book <span aria-hidden="true">↗</span>
</a>
</article>
<article className="card service-card" data-category="Grooming">
<a href="https://solastaa.zenoti.com/webstoreNew/services" className="photo">
<img className="" src="/assets/service-hair-DL3OZ_3y.jpg" alt="Personal grooming" />
</a>
<div className="meta">Grooming</div>
<h3>Personal grooming</h3>
<p>Everyday grooming and styling to help you feel ready for your day.</p>
<a className="text-link" href="https://solastaa.zenoti.com/webstoreNew/services">View services & book <span aria-hidden="true">↗</span>
</a>
</article>
</FilterGrid>
</section>
<section className="cta">
<div className="eyebrow">Your time to evolve</div>
<h2>See you at the salon.
</h2>
<p>Choose your salon and tell us what you have in mind.</p>
<a className="btn" href="https://solastaa.zenoti.com/webstoreNew/services">Book an appointment <span aria-hidden="true">↗</span>
</a>
</section>
</div>;}
