import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/Terms.htm")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Helmet>
        <title>myTone | Terms</title>
        <link rel="icon" href="/icon.png" />
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Terms;
