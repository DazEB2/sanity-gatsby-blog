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
                    "615ef1d73629c212a51458d0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-61qgeqig",
                  apiId: "4d4c1dce-35fd-441d-bd22-b0e6f550091d",
                },
                {
                  buildHookId: "615ef1d7f7bbc01d07986fdf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-y4fdeyup",
                  apiId: "06ec9427-95d7-4379-8ab0-481fedae8684",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DazEB2/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-y4fdeyup.netlify.app",
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
