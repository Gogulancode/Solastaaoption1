import Link from 'next/link';
export const metadata={title:"Franchise"};
export default function Page(){return <div data-page="franchise">
<div className="wrap page-intro">
<div className="crumb">
<Link href="/">Home</Link> / Franchise & partnerships</div>
<div className="eyebrow">Franchise & partnerships</div>
<h1>Bring Solastaa<br />to your neighbourhood.</h1>
<p>A luxury salon format with an established operating model, brand support and training.</p>
</div>
<div className="wrap editorial-hero">
<img className="" src="/assets/franchise-preview-BJbWqYUi.jpg" alt="The Solastaa team welcoming a salon guest" />
<div className="image-caption">A shared vision. A considered experience.</div>
</div>
<section className="section wrap">
<div className="grid three">
<div>

<h3>The brand</h3>
<p>A distinct salon identity, centred on personal attention and premium care.</p>
</div>
<div>

<h3>The experience</h3>
<p>An operating model built around a consistent, considered guest journey.</p>
</div>
<div>

<h3>The craft</h3>
<p>Training and brand support to help your team bring the experience to life.</p>
</div>
</div>
</section>
<section className="section cream">
<div className="wrap form-layout">
<div>
<div className="eyebrow">Partner with us</div>
<h2>A new chapter.<br />
Built together.
</h2>
<p style={{"marginTop":"25px"}}>Tell us where you would like to bring the Solastaa experience. Partnership details can be discussed with the team.</p>
</div>
<EnquiryForm kind="franchise" />
</div>
</section>
</div>;}
import { EnquiryForm } from '../../components/Interactions';
