export const config = {
  siteMeta: {
    title: "Cardano Community SPO Blog β",
    teamName: "SPO JAPAN GUILD",
    description: "SPOが発信する有益な情報をまとめました",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://sjg-blog.vercel.app/"
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
