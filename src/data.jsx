import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/Bounty.jpg";
import Work2 from "./assets/snapSnack.jpg";
import Work3 from "./assets/recipe.jpg";
import Work4 from "./assets/weather.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Smriti",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Banwari",
  },

  {
    id: 3,
    title: "Age : ",
    description: "21 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Bangalore",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8827430698",
  },

  {
    id: 8,
    title: "Email : ",
    description: "smritibanwari06@mail.com",
  },

  {
    id: 9,
    title: "LinkedIn : ",
    description: "https://www.linkedin.com/in/smritibanwari/",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "7 ",
    title: "Months of </br> Experience",
  },

  {
    id: 2,
    no: "5+",
    title: "Completed <br/> Projects",
  },

  {
    id: 3,
    no: "10+",
    title: "Technologies </br>Learned ",
  },

  {
    id: 4,
    no: "5+",
    title: " Adapted to </br> Tech Stacks",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "May, 2023 - Oct,2023",
    title:
      "Software Developer Intern <span> Capgemini IT India Pvt. Ltd. </span>",
    desc: "•Led the design and implementation of file transfer solutions, meeting the specific needs of clients.•Utilized Python to ensure robust and secure file transfer mechanisms.•Collaborated with cross-functional teams, fostering effective communication and knowledge sharing.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "June 2022 - Aug 2022",
    title:
      "Frontend Developer Intern <span> Prabhavti Digital Services Pvt Ltd. </span>",
    desc: "Designed and developed dynamic e-commerce websites using HTML, CSS, JavaScript, and Node.js.•Implemented HTML, CSS, and JavaScript for seamless payment gateway and landing page functionality.•Contributed to the remote team, ensuring effective communication and project delivery.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - 2024",
    title: "Bachelor Degree<span> Bennett  University </span>",
    desc: "CGPA: 8.5/10",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019-2020",
    title: "Senior Secondary <span> Delhi Public School, Durg </span>",
    desc: "85%",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017-2018",
    title: "Higher Secondary <span> Delhi Public School, Durg </span>",
    desc: "87%",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "85",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "60",
  },

  {
    id: 3,
    title: "Css",
    percentage: "85",
  },

  {
    id: 4,
    title: "Python",
    percentage: "75",
  },

  {
    id: 5,
    title: "React",
    percentage: "80",
  },

  {
    id: 6,
    title: "Sql",
    percentage: "60",
  },

  {
    id: 7,
    title: "MongoDB",
    percentage: "30",
  },

  {
    id: 8,
    title: "Node.js",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "BountyByte",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React.js, Node.js, Express.js, MongoDB, APIs",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/SmritiBanwari06/BountyByte",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "SnapSnack",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript, Git",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/SmritiBanwari06/SnapSnack",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "TastyBlend",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, JavaScript,React ,Git",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/SmritiBanwari06/TastyBlend",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "DrizzleDazzle",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },

      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, React, Tailwind",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/SmritiBanwari06/DrizzleDazzle",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
