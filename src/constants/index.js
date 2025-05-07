import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";

export const HERO_CONTENT = `Hello! I'm Shatakshi Goel, a web developer and designer currently pursuing my B.Tech at the Indian Institute of Technology, Jodhpur.
I specialize in creating clean, responsive, and user-centric web applications using modern technologies like HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, and Express.js. With a strong eye for design and a passion for building smooth user experiences, I enjoy turning ideas into functional digital solutions.

Beyond code, I love collaborating with creative minds, learning from others, and contributing to projects that make a real difference.
Thanks for stopping by — I’m always open to new connections, exciting collaborations, and innovative opportunities!

`;

export const ABOUT_TEXT = `I’m a dedicated MERN stack developer with a love for crafting web applications that are both functional and visually appealing. Over time, I’ve worked on a variety of projects — from a dynamic news aggregator to a weather dashboard and even a population stats tracker using Puppeteer — each one strengthening my problem-solving skills and sharpening my eye for detail.

I believe that great user experiences come from clean code, thoughtful design, and continuous learning. I enjoy experimenting with new technologies and frameworks, and I’m especially curious about how emerging fields like AI and machine learning can be integrated into web apps to enhance interactivity.

Whether it's building from scratch or collaborating with a team, I approach every project with creativity, adaptability, and a user-first mindset.`;

export const EDUCATION = [
  {
    year: "2022 - Current",
    role: "Bachelor of Technology",
    company: "Indian Institute of Technology, Jodhpur",
    description: `As a student at the prestigious Indian Institute of Technology, Jodhpur, I am pursuing a Bachelor of Technology degree. Through rigorous coursework in Data Structures and Algorithms, Introduction to Machine Learning, and Internet of Things, I am honing my skills in web development and design.`,
    technologies: [],
  },
  {
    year: "2021 - 2022",
    role: "12th Grade",
    company: "Delhi Public School",
    description: `I completed my Class XII from Delhi Public School with a score of 98.6%, building a strong academic foundation that has supported my growth in engineering and fueled my passion for web development.`,
    technologies: [],
  },
  {
    year: "2019 - 2020",
    role: "10th Grade",
    company: "Delhi Public School",
    description: `I completed my Class X from Delhi Podar Public School with a score of 97.4%, reflecting my academic dedication and the discipline that continues to drive my journey in web development.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "NEWSISTHAN",
    image: project1,
    description:
      "It is a website which will extract the top headlines from various newspapers and display them on a single page.It also includes a notes feature for users to add and manage sticky notes.",
    technologies: ["JavaScript", "HTML", "Puppeter", "CSS"],
    link: "https://github.com/Shatakshig19/Newisthan.git",
  },
  {
    title: "E-commerce Website",
    image: project2,
    description:
      "Buy-It -Built a scalable e-commerce platform with Node.js, React, and MongoDB, featuring JWT auth, Redis caching, RESTful APIs, role-based access, and Cloudinary for media storage..",
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express",
      "Redis",
      "Cloudinary",
    ],
    link: "https://github.com/Shatakshig19/E-commerce.git",
  },
  {
    title: "HUMAN ACTIVITY RECOGNITION",
    image: project3,
    description:
      "The preprocessed and normalised data was used to build machine learning models that predicted the user's activity at a given time point. Exploratory data analysis was performed utilising several models such as PCA, LDA, t-SNE, and the data was trained on certain time series models such as ARMA, ARIMA, alongwith traditional ML models like KNN, SVM, Decision Trees etc.",
    technologies: ["Python", "Pandas", "NumPy", "PCA/LDA", "t-SNE"],
    link: "https://github.com/Shatakshig19/Human_Activity_recognition.git",
  },
  {
    title: "ANTHROMORPHIC FINGER OF A ROBOTIC ARM",
    image: project4,
    description:
      "Designed and developed a biomimetic robotic finger that replicates human-like motion using a tendon-driven actuation system. The project involved 3D modeling, rapid prototyping, and integrating real-time motion control. Iterative improvements in hardware and firmware enhanced both responsiveness and reliability.",
    technologies: ["Machine Learning","Embeedded Systems","3D Printing"],
  },
  {
    title: "DAYMASTER",
    image: project5,
    description:
      "Developed a multifunctional web platform integrating essential daily tools such as real-time news, weather updates, a digital clock, and a calculator into a single interface.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/Shatakshig19/All-In-One.git",
  },
];
