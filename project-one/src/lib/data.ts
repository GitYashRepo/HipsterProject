import vaani from "/vaani.png";
import srgs from "/srgs.png";
import menstuff from "/menstuff.png";
import gapshap from "/GapShap.png";

export const projectsData = [
    {
    title: "Men-Stuff (Under Development)",
    description:
      "This is an Ecommerce Website which is in development phase and i am working on it there are no team involved in this project, It is a website for a company i.e MenStuff, they basically deals in Men's Clothing and Accessories and want to sell their products online to customers.",
    tags: ["React", "Tailwind", "Framer-Motion", "Shadcn" , "Exress", "Node.js", "MongoDB", "JWT", "GoogleOAuth", "Passport.js", "Razorpay"],
    imageUrl: menstuff,
    hosturl:"https://menstuff.vercel.app"
  },
  {
    title: "Vaani Tech (Hosted)",
    description:
      "I have created this Website for a new Startup Company i.e Vaani Tech deals in Home Assistant and Automation Services, I have used ReactJs, GSAP, Framer Motion, Three.js etc. I have also added a payment gateway feature using Razorpay. This project showcase my Frontend Development Skills.",
    tags: ["React", "Three.js", "Framer-Motion", "GSAP", "Tailwind"],
    imageUrl: vaani,
    hosturl:"https://vaanitech.in"
  },
  {
    title: "SR Graphics & Signages (Hosted)",
    description:
      "This application is purely based on React Js , It is a website for a company i.e SR Graphics And Signages, they basically deals in Signages works like Interior Signages, Exterior Signages, Custom Printing, Brand Solutions, Digital and Offset.",
    tags: ["React", "TypeScript", "Tailwind", "Framer-Motion", "GSAP"],
    imageUrl: srgs,
    hosturl:"https://srgraphicsandsignages.in"
  },
  {
    title: "Gap Shap (Demo)",
    description:
      "This is a Chat Application purely developed by using MERN Stack with Socket.io, It is a casual project developed to master the skills and new tech stuffs like WebSokets (Socket.io) watching Youtube Tutorials, This project is displayed here as a demo project only.",
    tags: ["React", "Tailwind", "Framer","Socket.io","Express", "Node", "MongoDB"],
    imageUrl: gapshap,
    hosturl:"https://gap-shap-fe.vercel.app"
  },
] as const;
