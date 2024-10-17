import React from "react";

const Meta = () => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <link
            rel="alternate"
            type="application/xml"
            title="Site Map"
            href="https://pdpl.sakshi.xyz/sitemap.xml"
          />
          <link rel="canonical" href="https://pdpl.sakshi.xyz/" />
          <title>
            Plus Distribution Pvt Ltd | Premier Pharmaceutical Distributor in
            India
          </title>
          <meta
            name="title"
            content="Excellence in Healthcare Supply Chain Management - PDPL"
          />
          <meta
            name="description"
            content="Plus Distribution Pvt Ltd (PDPL) is a leading pharmaceutical distributor in India, dedicated to providing high-quality healthcare products and efficient distribution services."
          />
          <meta
            name="keywords"
            content="PDPL, Plus Distribution Pvt Ltd, best pharmaceutical company, trusted pharmaceutical company in India"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            property="og:title"
            content="Excellence in Healthcare Supply Chain Management - PDPL"
          />
          <meta
            property="og:description"
            content="Plus Distribution Pvt Ltd (PDPL) is a leading pharmaceutical distributor in India, dedicated to providing high-quality healthcare products and efficient distribution services."
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/8CNQC9hk/pdplss.png"
          />
          <meta property="og:url" content="https://pdpl.sakshi.xyz/" />
          <meta property="twitter:url" content="https://pdpl.sakshi.xyz/" />
          <meta
            property="twitter:title"
            content="Excellence in Healthcare Supply Chain Management - PDPL"
          />
          <meta
            property="twitter:description"
            content="Plus Distribution Pvt Ltd (PDPL) is a leading pharmaceutical distributor in India, dedicated to providing high-quality healthcare products and efficient distribution services."
          />
          <meta
            property="twitter:image"
            content="https://i.postimg.cc/8CNQC9hk/pdplss.png"
          />
        </Helmet>

        <div id="root"></div>
      </div>
    </>
  );
};

export default Meta;
