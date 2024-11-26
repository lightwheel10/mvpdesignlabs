export const JsonLd = ({ type = "website", data = {} }) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MVPDesignLabs",
    url: "https://www.mvpdesignlabs.com",
    logo: "https://www.mvpdesignlabs.com/logo.png",
    sameAs: [
      "https://twitter.com/parastiwaari",
      "https://www.producthunt.com/posts/mvp-design-labs",
      "https://linkedin.com/company/mvpdesignlabs",
    ]
  };

  const blogPostData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    ...data
  };

  const jsonLd = type === "blogPost" ? blogPostData : baseData;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}; 