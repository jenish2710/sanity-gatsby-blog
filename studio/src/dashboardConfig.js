export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63a1bd552d0b5d0057e5f51b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-68oi43ic",
                  apiId: "c392bd61-5343-4fc0-bce5-2730fe056f35",
                },
                {
                  buildHookId: "63a1bd55d05057008f17c1cd",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-5fbemjb4",
                  apiId: "40504e0d-6c08-4811-9f73-c6bfad05494d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jenish2710/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-5fbemjb4.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
