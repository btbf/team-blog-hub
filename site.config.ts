export const config = {
  siteMeta: {
    title: "Cardano Community SPO Blog",
    teamName: "SPO JAPAN GUILD",
    description: "SPOが発信する有益な情報をまとめました",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GUILD",
      href: "https://spojapanguild.net/",
    },
  ],
};
