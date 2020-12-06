module.exports = {

  //-- SITE SETTINGS -----
  author: "@sidhantmathur",
  siteTitle: "Sidhant Mathur's personal portfolio",
  siteShortTitle: "Sidhant M.", // Used as logo text in header, footer, and splash screen
  siteDescription: "Projects and info about web developer Sidhant Mathur",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#ACECA1", // granny smith apple
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#629460", // russian green
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#111317",
      // background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    // blueTheme: {
    //   primary: "#DEDEDE",
    //   secondary: "#1B272C",
    //   tertiary: "#E75E76",
    //   text: "rgba(255, 255, 255, 0.87)",
    //   subtext: "#AAAAAA",
    //   background: "#1B272C",
    //   card: "#1C1C1C",
    //   scrollBar: "rgba(255, 255, 255, 0.5)",
    //   boxShadow: "rgba(0, 0, 0, 0.16)",
    //   boxShadowHover: "rgba(0, 0, 0, 0.32)",
    // },
  },
  fonts: {
    primary: "Karla, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/sidhantmathur/",
    },
    // {
    //   name: "Medium",
    //   url: "https://konstantinmuenster.medium.com/",
    // },
    {
      name: "Github",
      url:
        "https://github.com/sidhantmathur",
    },
    // {
    //   name: "Behance",
    //   url: "https://www.behance.net/konstanmnster",
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Articles",
        url: "/#articles",
      },
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Back to the Top",
      url: "/#top",
    },
    // {
    //   name: "Imprint",
    //   url: "/imprint",
    // },
  ],
}
