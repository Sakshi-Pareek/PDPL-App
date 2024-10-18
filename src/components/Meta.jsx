import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Meta = () => {
  const [metaData, setMetaData] = useState({
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    meta_image: "",
  }); // State to hold the fetched meta data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aditya.monurana.xyz/einv/meta/get-meta"
        ); // Replace with your API endpoint

        const siteMeta = response.data.response.metaInf.find(
          (site) => site.site_name === "sakshi.xyz"
        );

        if (siteMeta) {
          setMetaData({
            meta_title: siteMeta.meta_title,
            meta_description: siteMeta.meta_description,
            meta_keywords: siteMeta.meta_keywords,
            meta_image:
              siteMeta.meta_image || "https://i.postimg.cc/8CNQC9hk/pdplss.png",
          });
        }
      } catch (err) {
        setError(err); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>; // Handle error
  }

  return (
    <>
      <div>
        <Helmet>
          <title>{metaData.meta_title}</title>
          <meta name="title" content={metaData.meta_title} />
          <meta name="description" content={metaData.meta_description} />
          <meta name="keywords" content={metaData.meta_keywords} />
          <meta property="og:title" content={metaData.meta_title} />
          <meta property="og:description" content={metaData.meta_description} />
          <meta property="og:image" content={metaData.meta_image} />
          <meta property="og:url" content="https://pdpl.sakshi.xyz/" />
          <meta property="twitter:url" content="https://pdpl.sakshi.xyz/" />
          <meta property="twitter:title" content={metaData.meta_title} />
          <meta
            property="twitter:description"
            content={metaData.meta_description}
          />
          <meta property="twitter:image" content={metaData.meta_image} />
        </Helmet>

        <div id="root"></div>
      </div>
    </>
  );
};

export default Meta;
