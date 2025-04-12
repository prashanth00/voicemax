import React, { useEffect, useState } from "react";

const Terms = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/Terms.htm")
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

export default Terms;
