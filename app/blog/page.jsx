import Link from 'next/link';
import { ArticleCards } from '../../components/Journal';
export const metadata={title:'The Solastaa journal',description:'Practical notes on haircut consultations, bridal preparation and everyday hair routines.'};
export default function Blog(){return <div data-page="blog"><div className="wrap page-intro"><div className="crumb"><Link href="/">Home</Link> / Journal</div><h1>Before your<br/>next visit.</h1><p>A few useful things to know, whether you are planning a change or keeping a style you love.</p></div><section className="wrap section journal-list" aria-label="Journal articles"><ArticleCards/></section></div>;}
