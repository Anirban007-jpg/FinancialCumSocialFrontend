import { RxHome, RxPerson, RxDashboard, RxClipboard,RxAvatar  } from "react-icons/rx";
import { FaBookJournalWhills, FaRegistered } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
];


export const Projects = [
  {
    title: "SEO Blog Nextjs Website",
    text: "Website created for writing blogs with Role based Authentication",
    src: "/NextWebsite.png",
    link: "https://seoblog-three.vercel.app/"
  }
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/login",
    icon: RxAvatar,
    link: "/login",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/register",
    icon: FaRegistered,
    link: "/register",
  },
  {
    name: "/my-skills",
    icon: GiSkills,
    link: "/my-skills",
  },
];