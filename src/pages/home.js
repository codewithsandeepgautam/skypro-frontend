import React from "react";
import Banner from "../components/home/banner";
import SEO from "../components/shared/seo";
import PackagePlans from "../components/home/packagePlans";
import IptvApp from "../components/shared/iptvapp";
import AboutUs from "../components/home/about";
import Service from "../components/home/service";
import KeyFeatures from "../components/home/keyfeature";
import Facts from "../components/home/facts";
import Testimonials from "../components/about/testimonials";
import HomeFaq from "../components/home/homefaq";
import Partners from "../components/home/partners";
// import Content from "../components/home/content";
import Cta from "../components/shared/cta";

const Home = () => {
  return (
    <>
      <SEO
        title="Skypro IPTV Services in India - Free IPTV & IPTV Providers"
        description="Get Skypro IPTV services with flexible plans, including free IPTV options. Watch IPTV online with full support from leading IPTV providers in India."
        keywords="Iptv traditional cable, iptv vs cable tv, IPTV, IPTV in India, free IPTV, Skypro IPTV, Skypro IPTV services, iptv services, IPTV Service Providers, IPTV providers, bronze iptv, iptv plans, iptv service supports, watch iptv online free"
        schema={`
          [
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Skypro",
    "url": "https://www.skypro.co.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.skypro.co.in/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    "@id": "#LocalBusiness",
    "url": "https://www.skypro.co.in/",
    "legalName": "SKYPRO COMMUNICATIONS",
    "name": "Skypro",
    "description": "Get the best of television with SkyPro! Enjoy IPTV subscription, diverse channels, and non-stop entertainment on your terms.",
    "image": "https://www.skypro.co.in/static/media/logo.69ca716691b0d29cf815.webp",
    "logo": "https://www.skypro.co.in/static/media/logo.69ca716691b0d29cf815.webp",
    "telephone": "+91 9803596035",
    "email": "info@skypro.co.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "IT Wing, Hall 2, B-70, Phase 7, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar",
      "addressLocality": "Mohali",
      "addressRegion": "PB",
      "addressCountry": "IN",
      "postalCode": "160055"
    }
  },
  {
    "@context": "https://schema.org/",
    "@type": "Organization",
    "name": "Skypro",
    "description": "Get the best of television with SkyPro! Enjoy IPTV subscription, diverse channels, and non-stop entertainment on your terms.",
    "url": "https://www.skypro.co.in/",
    "logo": "https://www.skypro.co.in/static/media/logo.69ca716691b0d29cf815.webp",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-70, Phase 7, Sector 74",
      "addressLocality": "SAS Nagar",
      "addressRegion": "PB",
      "postalCode": "160055",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.351115,
      "longitude": 78.667743
    },
    "telephone": "+91 9803596035",
    "email": "info@skypro.co.in",
    "sameAs": [
      "https://www.facebook.com/skypro.iptvv",
      "https://x.com/sky_proiptv",
      "https://www.instagram.com/skypro_iptv/",
      "https://www.linkedin.com/company/skyprotv/"
    ],
    "openingHours": "Mo-Sa 09:30-18:00"
  }
]         
        `}
      />
      <Banner />
      <PackagePlans />
      <IptvApp bgColor="#fed2ba" />
      <AboutUs />
      <Service />
      <KeyFeatures />
      <Facts />
      <Testimonials />
      <Cta />
      <HomeFaq />
      <Partners />
      {/* <Content /> */}
    </>
  );
};

export default Home;
