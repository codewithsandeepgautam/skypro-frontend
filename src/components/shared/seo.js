import React from "react";
import { Helmet } from 'react-helmet';
import { useLocation } from "react-router-dom";

const SEO = ({ title = "", description = "", keywords = "", schema = "", noIndex = false }) => {
  const location = useLocation();
  const path = location.pathname === '/' ? '' : location.pathname;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title || "Skypro Tv"}</title>
      <meta
        name="description"
        content={description || ""}
      />
      <meta property="og:title" content={title || "Skypro Tv"} />
      <meta property="og:url" content={`https://www.skypro.co.in${path}`} />
      <meta property="og:description" content={description} />
      {noIndex && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      <link rel="canonical" href={`https://www.skypro.co.in${path}`} />
      {keywords && <meta name="keywords" content={keywords} />}
      {schema && (
        <script defer type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
