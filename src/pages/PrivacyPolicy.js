import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/Privacypolicy.htm")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return (
    <div
      style={{ padding: "2rem" }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default PrivacyPolicy;
