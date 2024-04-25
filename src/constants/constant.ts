import { userObject } from "@/modals/User"
import { navItems } from "@/modals/Header"
import { Project } from "@/modals/Project"

export const userInfo:userObject = {
    name: "Abdul Qadir Khan",
    picture: "/assets/FB_IMG_1711376579607.jpg",
    pic: "/assets/4884785.jpg",
    heading: 'I&#39;m a Web Developer based in Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
        <p>I am a passionate Web Developer with a strong background in Web Development, I have been crafting digital experiences for 1 years.</p>
        <p>My journey in IT began in 2023 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
        <p> I thrive on turning complex ideas into elegant solutions that not only meet user but also create lasting impacts. </p>
        `,
    skills: ['React', 'Next', 'HTML', 'CSS', 'Typescript'],    
}

export const headerItems: navItems= {
    home: { label: "Home", page: "home"},
    about: { label: "About", page: "about"},
    skill: { label: "Skill", page: "skill"},
    project: { label: "Project", page: "project"}
}

export const project: Project[] = [
  {
    name: 'Calculator',
    image: '/assets/calculator.png',
    githubLink: 'https://github.com/Abdulqadir000/Typescript-Projects/tree/18fa3e0df10cee37e3049ed62268c26b0cd74ae7/calculator%20assigment',
    description: 'basic mathematical operations.',
  
  },
  {
    name: 'Number guessing game',
    image: '/assets/noguess.png',
    githubLink: 'https://github.com/Abdulqadir000/Typescript-Projects/tree/18fa3e0df10cee37e3049ed62268c26b0cd74ae7/guess%20no%20assigment',
    description: "Random number guess game.",
  },
  {
    name: 'Atm',
    image: '/assets/Atm1.png',
    githubLink: 'https://github.com/Abdulqadir000/Typescript-Projects/tree/e86cde5e2696544d7823fc5609875d9df1e151dd/Atm',
    description: "Atm Machine",
  },
  {
    name: 'ToDo List',
    image: '/assets/todo.png',
    githubLink: 'https://github.com/Abdulqadir000/Typescript-Projects/tree/c317b6751ecf19b54a7029b22f4a22d6c519845f/todo%20list',
    description: "Todo tasks",
  },
  {
    name: 'Currency Converter',
    image: '/assets/currency1.png',
    githubLink: 'https://github.com/Abdulqadir000/Typescript-Projects/tree/c317b6751ecf19b54a7029b22f4a22d6c519845f/currency%20converter',
    description: "PKR,USD,GBP currency",
  },
  {
    name: 'Word Counter',
    image: '/assets/wordcount.png',
    githubLink: 'https://github.com/Abdulqadir000/Typescript-Projects/tree/c317b6751ecf19b54a7029b22f4a22d6c519845f/wordcounter',
    description: "Word Counter",
  },
  {
    name: 'Student Managment System',
    image: '/assets/studentmanagment.png',
    githubLink: 'https://github.com/Abdulqadir000/Typescript-Projects/tree/c317b6751ecf19b54a7029b22f4a22d6c519845f/student%20managment%20system',
    description: "Student Managment",
  },
 ];
  