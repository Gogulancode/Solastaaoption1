import Link from 'next/link';

// Placeholder figures: replace after client confirmation.
const stats = [
  ['5,000+', 'Happy clients', 'M24 41S5 29 5 16a10 10 0 0 1 19-4 10 10 0 0 1 19 4c0 13-19 25-19 25Z'],
  ['10+', 'Years of experience', 'm24 4 6 13 14 2-10 10 2 15-12-7-12 7 2-15L4 19l14-2Z'],
  ['20+', 'Salon professionals', 'M24 5a13 13 0 1 0 0 26 13 13 0 0 0 0-26Zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM15 28l-5 16 9-4 5 5 4-14m5-3 5 16-9-4'],
  ['98%', 'Client satisfaction', 'M12 7h24l9 12-21 25L3 19ZM3 19h42M12 7l5 12 7 25 7-25 5-12M17 19l7-12 7 12'],
];

export default function HomeStats() {
  return <section className="home-stats section" aria-labelledby="home-stats-title">
    <div className="wrap home-stats-layout">
      <div className="home-stats-intro">
        <div className="eyebrow">Why choose Solastaa</div>
        <h2 id="home-stats-title">Personal care.<br />Experienced hands.</h2>
        <Link className="home-stats-link" href="/experience">About Solastaa <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="home-stats-figures">
        <dl className="home-stats-grid">{stats.map(([value, label, path]) => <div className="home-stat" key={label}>
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg>
          <dt>{label}</dt><dd>{value}</dd>
        </div>)}</dl>
      </div>
    </div>
  </section>;
}
