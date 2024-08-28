import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/netflix.png";
import project4 from "../assets/projects/blogApp.png";
import project5 from "../assets/projects/weather.jpeg";
import project6 from "../assets/projects/portfolio.png";

export const HERO_CONTENT = `I am a passionate full stack web developer with a knack for crafting robust and scalable web applications. With 1 year of experience, I have honed my skills in front-end technologies like React and AngularJs, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.` ;

export const EXPERIENCES = [
  {
    year: "2020 - 2022",
    role: "Frontend Developer",
    description: "A responsive Netflix clone App, Weather App that fetch the weather information of all over the world. A personal portfolio website showcasing projects, skills, and contact information. ",
   technologies: ["HTML5", "CSS3", "JavaScript", "ReactJs", "Tailwind CSS"],
  },
  {
    year: "2022 - present",
    role: "Web Developer",
    description: " Self learn Project on CodeZee (code snippet) storer, Blog App, E-Commerce Website [Superior Stores] ",
    technologies: [ "MERN Stack", "AngularJs", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "CodeZee",
    image: project1,
    description:
      "A platform for creating and publishing code snippets, with features like uploading the Code Snippets that the developer used in their code on the regular basis..",
    technologies: ["HTML", "CSS", "Angularjs", "Firebase"],
    link:"",
  },
  {
    title: "E-Commerce Website [Superior Stores]",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link:"",
  },
  {
    title: "Blog App",
    image: project4,
    description:
      "An application for managing Blogs with features such as blog creation, updation, and deletion and stored into the database.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDb", "ExpressJS", "Node.js"],
    link:"",
  },
  {
    title: "Netflix Clone",
    image: project3,
    description:
      "A responsive Netflix clone App.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"",
  },
  {
    title: "Music Player android App [MusicSe]",
    image: project4,
    description:
      "A Music Player App using Kotlin for Android Mobile based Application.",
    technologies: ["Kotlin", "Firebase"],
    link:"",
  },
  {
    title: "Weather App",
    image: project5,
    description:
      "A responsive Weather App that fetch the weather information of all over the world.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link:"",
  },
  {
    title: "Portfolio Website",
    image: project6,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    link:"",
  },
];

export const CONTACT = {
  address: " Raipur, Ahmedabad, Gujarat, India ",
  phoneNo: "+91 6353803310",
  email: "parthiv20soni@gmail.com",
};
