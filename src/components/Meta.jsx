import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

const Meta = () => {
  const [data, setData] = useState(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aditya.monurana.xyz/einv/meta/get-meta"
        ); // Replace with your API endpoint
        // setData(response.data); // Update state with the fetched data

        // alert("LLLL")

        response.data.response.metaInf.map((user) => {
          console.log(user.name); // Log the name of each user

          // alert(JSON.stringify(user));

          if (user.site_name == "sakshi.xyz") {
            setData(user.meta_tags);
          }
        });
      } catch (err) {
        setError(err); // Handle error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();

    // alert("kkkkk");
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      <div>
        <Helmet>
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
          <meta name="keywords" content={data} />
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
