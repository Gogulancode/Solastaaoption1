import './globals.css';
import './refinements.css';
import './home-services.css';
import './salon-banner.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
export const metadata={title:{default:'Solastaa Salon',template:'%s | Solastaa Salon'},description:'Personal hair, skin and beauty care at Solastaa Salon in Thane, Dombivli, Ulhasnagar and Kalyan.',icons:{icon:'/assets/favicon.ico'}};
export default function RootLayout({children}){return <html lang="en"><body><Header/><main id="main-content" tabIndex={-1}>{children}</main><Footer/></body></html>;}
