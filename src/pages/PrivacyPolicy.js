import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/Privacypolicy.htm")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));

    document.title = "myTone | Policy"; // Set browser tab title
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href = "/favicon.ico"; // Update to your app's icon path if different
    }
  }, []);

  return (
    <div
      style={{ padding: "2rem" }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default PrivacyPolicy;
