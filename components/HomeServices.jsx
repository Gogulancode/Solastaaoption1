const services = [
 ['Hair','Cut, colour, styling & treatments','service-hair-DL3OZ_3y.jpg'],
 ['Beauty','Makeup for everyday & occasions','service-beauty-BnJrA1er.jpg'],
 ['Skin','Facials & personalised skin care','service-skin-CnWiL5sD.jpg'],
 ['Nails','Manicures, pedicures & finishing','service-nails-BnMtwXs3.jpg']
];
const benefits = [
 ['Professional products','Quality products chosen for your care.','M12 21C5 21 2 16 2 11c5 0 8 3 10 10Zm0 0c7 0 10-5 10-10-5 0-8 3-10 10Zm0-2C7 14 7 8 12 3c5 5 5 11 0 16Z'],
 ['Skilled professionals','Thoughtful care from a team that listens.','M7 21v-2a5 5 0 0 1 10 0v2 M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z'],
 ['Easy booking','Choose your service and time online.','M5 5h14v16H5Z M8 2v6 M16 2v6 M5 10h14 M8 14h2 M14 14h2 M8 17h2'],
 ['A relaxing experience','A welcoming space to unwind and feel your best.','M6 4h12l5 6-11 12L1 10Z M1 10h22 M6 4l3 6 3 12 3-12 3-6 M9 10l3-6 3 6']
];
export default function HomeServices(){return <section className="home-services wrap" aria-labelledby="home-services-title">
 <ul className="salon-benefits">{benefits.map(([title,description,path])=><li key={title}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path}/></svg><div><h3>{title}</h3><p>{description}</p></div></li>)}</ul>
 <div className="home-services-layout"><div className="home-services-intro"><p className="eyebrow">Our services</p><h2 id="home-services-title">Beauty &amp; care<br/>for you.</h2><p>From everyday care to special occasions, find a little time for yourself at Solastaa.</p><a className="btn outline" href="https://solastaa.zenoti.com/webstoreNew/services">View services &amp; book <span aria-hidden="true">↗</span></a></div>
 <div className="home-services-cards">{services.map(([name,description,image])=><a className="home-service-tile" key={name} href="https://solastaa.zenoti.com/webstoreNew/services" aria-label={`${name}: view services and book on Zenoti`}><img src={`/assets/${image}`} alt="" loading="lazy"/><div><h3>{name}</h3><p>{description}</p><span aria-hidden="true">↗</span></div></a>)}</div></div>
 </section>;}
