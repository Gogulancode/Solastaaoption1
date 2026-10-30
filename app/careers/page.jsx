import Link from 'next/link';
export const metadata={title:"Careers"};
export default function Page(){return <div data-page="careers">
<div className="wrap page-intro">
<div className="crumb">
<Link href="/">Home</Link> / Careers</div>
<div className="eyebrow">Careers</div>
<h1>Your next chair.<br />Your next chapter.</h1>
<p>Create, grow and build your career with us. A professional environment, continuous training and a premium clientele.</p>
</div>
<div className="wrap editorial-hero">
<img className="" src="/assets/careers-preview-CFSUVHXC.jpg" alt="The Solastaa salon team sharing their craft" />
</div>
<section className="section wrap form-layout">
<div>
<div className="eyebrow">Grow with Solastaa</div>
<h2>Make space<br />
for your talent.
</h2>
<p style={{"marginTop":"25px"}}>From hair artistry and beauty to salon operations, introduce your expertise and the work you love.</p>
<div className="steps">
<div className="step">
<span>01</span>
<h3>A culture of craft</h3>
</div>
<div className="step">
<span>02</span>
<h3>Continuous learning</h3>
</div>
<div className="step">
<span>03</span>
<h3>Personal connections</h3>
</div>
</div>
<p className="small-note">Specific openings and hiring details are to be confirmed by the salon team.</p>
</div>
<EnquiryForm kind="careers" />
</section>
</div>;}
import { EnquiryForm } from '../../components/Interactions';
