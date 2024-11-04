import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Meta = () => {
  const [metaData, setMetaData] = useState({
    meta_title: "Plus Distribution Pvt Ltd",
    meta_desc:
      "PDPL ensures efficient, reliable pharmaceutical logistics, driving innovation and excellence in global healthcare supply chains.",
    meta_key:
      "pharmaceutical distributor in India healthcare products distribution pharmaceutical supply chain medical supply distribution Plus Distribution Pvt Ltd healthcare logistics",
    meta_image: "https://i.postimg.cc/8CNQC9hk/pdplss.png",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.sakshi.xyz/meta/get-meta"
        );

        const siteMeta = response.data.response.metaInf.find(
          (site) => site.site_name === "pdpl.sakshi.xyz"
        );

        if (siteMeta) {
          setMetaData({
            meta_title: siteMeta.meta_title,
            meta_desc: siteMeta.meta_desc,
            meta_key: siteMeta.meta_key,
            meta_image:
              siteMeta.meta_image || "https://i.postimg.cc/8CNQC9hk/pdplss.png",
          });
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <div>
        <Helmet>
          <title>{metaData.meta_title}</title>
          <meta name="title" content={metaData.meta_title} />
          <meta name="description" content={metaData.meta_desc} />
          <meta name="keywords" content={metaData.meta_key} />
          <meta property="og:title" content={metaData.meta_title} />
          <meta property="og:description" content={metaData.meta_desc} />
          <meta property="og:image" content={metaData.meta_image} />
          <meta property="og:url" content="https://pdpl.sakshi.xyz/" />
          <meta property="twitter:url" content="https://pdpl.sakshi.xyz/" />
          <meta property="twitter:title" content={metaData.meta_title} />
          <meta property="twitter:description" content={metaData.meta_desc} />
          <meta property="twitter:image" content={metaData.meta_image} />
        </Helmet>

        <div id="root"></div>
      </div>
    </>
  );
};

export default Meta;
