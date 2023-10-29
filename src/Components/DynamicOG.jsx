import React from "react";

const DynamicOG = ({
  url = "https://whispme.vercel.app",
  name = "WHISPER",
}) => {
  return (
    <>
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={url} />
    </>
  );
};

export default DynamicOG;
