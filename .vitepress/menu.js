const chapters = [
  { text: "📕 Theory", link: "/test2" },
  { text: "🔥 Organizing", link: "/test" },
  { text: "🎯 Strategy", link: "/test1" },
  { text: "📢 Tactics", link: "/test1" },
  { text: "❤️ Wellbeing", link: "/test1" },
  { text: "💬 Communication", link: "/test1" },
  { text: "💻 Tools", link: "/test1" },
];

export const nav = [
  {
    text: "📖 Guides",
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: chapters,
  },
  {
    text: "🌍 Our community",
    items: [
      { text: "👋 About us", link: "/test2" },
      { text: "💪 Get training", link: "/test2" },
      { text: "📚 Resources", link: "/test" },
      { text: "📢 Campaigns", link: "/test1" },
      { text: "📖 Volunteer guides", link: "/test1" },
    ],
  },
  // {
  //   text: "💪 Get training",
  //   link: "/test1/",
  // },
  {
    text: "❤️ Join us",
    link: "https://mailchi.mp/activisthandbook/join",
  },
];

export const sidebar = [
  {
    text: "Getting started",
    items: [
      { text: "About", link: "/test1" },
    ],
  },
  {
    text: "Chapters",
    items: [
      { text: "📕 Theory", link: "/test2" },
      { text: "🔥 Organizing", link: "/test" },
      { text: "🎯 Strategy", link: "/test1" },
      { text: "📢 Tactics", link: "/test1" },
      { text: "❤️ Wellbeing", link: "/test1" },
      { text: "💬 Communication", link: "/test1" },
      { text: "💻 Tools", link: "/test1" },
    ],
  },
  {
    text: "Our community",
    items: [
      { text: "Get training", link: "/test1" },
      { text: "Resources", link: "/test1" },
      { text: "Campaigns", link: "/test1" },
      { text: "Volunteer guides", link: "/test1" },
    ],
  },
];
