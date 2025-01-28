export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Committed to seamless client partnerships and transparent dialogue",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Passionate about technology and innovative development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Developing a cutting-edge peer-to-peer lending platform",
    description: "peerRamp",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to embark on a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "peerRamp - a cutting-edge peer-to-peer lending platform",
    des: "Explore the wonders of lending system with ease and ....",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/https://peer-ramp.vercel.app/",
  },
  {
    id: 2,
    title: "trucast - Future Of Fair Elections",
    des: 'Remember that feeling after casting your vote? That moment of "I hope it makes it"? Yeah, we were not fans either. That is why we are building something better.',
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/https://truecast.mowblox.com/",
  },
  {
    id: 3,
    title: "HebronEdge - Corporate portfolio website",
    des: "Dedicated to empowering our clients' success by providing exceptional PR & media consultancy, event management, digital marketing, and IT services. We strive to be the catalyst that transforms our clients' aspirations into tangible, measurable results.",
    img: "/hebronedge.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/https://hebronedgeinc.vercel.app/",
  },
  {
    id: 4,
    title: "VaultNotesAi",
    des: "VaultNotesAi - ICP based project that helps users take memo, transcribe audio to text, and many more",
    img: "/ailogo.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Richard was a game-changer. His expertise, reliability, and innovative approach brought our project to life. His ability to translate complex requirements into elegant solutions is unmatched.",
    name: "Sarah Thompson",
    title: "CEO of Tanic Technologies",
  },
  {
    quote:
      "He is an exceptional developer who always delivers top-notch results. His commitment to quality and user-centric design has greatly enhanced our digital presence. I highly recommend him for any development project.",
    name: "John Kamu",
    title: "CTO of Belp Inc.",
  },
  {
    quote:
      "Partnering with Richard on our AI initiative was a transformative experience. His deep understanding of AI technologies and meticulous attention to detail ensured the success of our project. Richard is truly a master of his craft.",
    name: "Alikamtu DevRel",
    title: "Head of AI Research at Vault Labs",
  },
  {
    quote:
      "This guy's talent for smart contract development is unparalleled. His strategic insights and technical prowess have been instrumental in launching our blockchain platform. He is a visionary developer with a bright future.",
    name: "John Nartey",
    title: "Co-founder of peerRamp",
  },
  {
    quote:
      "His ability to blend creativity with technical skills has been a tremendous asset to our team. His work consistently exceeds expectations and elevates our projects. I look forward to collaborating with Richard again.",
    name: "Jessica Dickson",
    title: "UI/UX Lead at CodeGirls",
  },
];

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer",
    desc: "Supervied the development of a web-based platform using React.js/Next.js enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - EduDesk Inc.",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead IT Specialist",
    desc: "Oversaw and maintained IT systems and security operations using modern and up-to-date technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    alt: "GitHub",
    link: "https://github.com/dr-winner",
  },
  {
    id: 2,
    img: "/twit.svg",
    alt: "X",
    link: "https://x.com/dr_winner6",
  },
  {
    id: 3,
    img: "/farcaster.svg",
    alt: "Warpcast",
    link: "https://warpcast.com/drwinner",
  },
  {
    id: 4,
    img: "/link.svg",
    alt: "LinkedIn",
    link: "https://www.linkedin.com/in/richard-winner-duvor/",
  },
  {
    id: 4,
    img: "/insta.svg",
    alt: "Instagram",
    link: "https://www.instagram.com/winner.richard",
  },
  {
    id: 5,
    img: "/discord.svg",
    alt: "Discord",
    link: "https://discord.com/users/dr_winner",
  },

  {
    id: 6,
    img: "/behance.svg",
    alt: "Behance",
    link: "https://www.behance.net/duvorrichard",
  },
];
