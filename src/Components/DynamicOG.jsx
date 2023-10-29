import React from "react";
import { Helmet } from "react-helmet-async";
const DynamicOG = ({
  url = "https://whispme.vercel.app",
  name = "WHISPER",
}) => {
  return (
    <Helmet>
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

export default DynamicOG;
