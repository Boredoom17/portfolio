import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import LanguageSkills from "./components/LanguageSkills";
import ThingsILike from "./components/ThingsILike";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
const GithubIcon = FaGithub as unknown as React.FC;
const LinkedinIcon = FaLinkedin as unknown as React.FC;
const EnvelopeIcon = FaEnvelope as unknown as React.FC;

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold">Boredoom</div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-purple-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-purple-400">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-purple-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-purple-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex flex-col justify-center items-center text-center px-4 py-24 text-white">
      {/* Avatar */}
      <div className="w-32 h-32 mb-6 rounded-full bg-purple-500 flex items-center justify-center text-4xl font-bold shadow-lg">
        BD
      </div>

      <h1 className="text-5xl font-extrabold mb-2">Hi, I go by Boredoom</h1>

      <p className="text-purple-300 italic mb-4">
        "Jack of all trades, master of none, but oftentimes better than master
        of one."
      </p>

      <button
        onClick={() => navigate("/projects")}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition mb-4"
      >
        View My Projects
      </button>
    </section>
  );
}

function Projects() {
  const projectList = [
    {
      title: "Smart Cooking AI App",
      description:
        "AI-powered app that scans ingredients and suggests recipes.",
      tech: ["React Native", "Firebase", "YOLO"],
      url: "#",
    },
    {
      title: "Crypto Coin Tracker",
      description: "Tracks live crypto prices with charts and alerts.",
      tech: ["React", "CoinGecko API", "Tailwind"],
      url: "#",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing my skills and projects.",
      tech: ["React", "Tailwind CSS"],
      url: "#",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6 min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map(({ title, description, tech, url }) => (
          <a
            href={url}
            key={title}
            className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500 transition-shadow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-4 text-gray-300">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className="bg-purple-700 text-purple-200 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  const tools = [
    "VS Code",
    "React",
    "Tailwind CSS",
    "Firebase",
    "Expo",
    "GitHub",
  ];
  const experiences = [
    "Joint Secretary @ IT Club, Oxford College (2024–2025)",
    "Built Smart Cooking AI App (BIM 6th Sem Project)",
    "Started learning web dev in 2023",
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-24">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <p className="max-w-3xl text-center text-gray-300 mb-6">
        I’m the kind of person who dives into everything. From sketching on
        paper to playing guitar, dribbling on the basketball court to writing
        code late at night — I love trying new things. Whether it’s sports, art,
        music, or tech, I enjoy the thrill of learning and figuring things out.
        I don’t always stick to one path, but that’s what keeps life exciting.
      </p>

      <div className="w-full max-w-xl mb-8">
        <h3 className="text-2xl font-semibold text-purple-400 mb-2">
          Experience
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {experiences.map((exp, i) => (
            <li key={i}>{exp}</li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-xl">
        <h3 className="text-2xl font-semibold text-purple-400 mb-2">
          Tools & Tech
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm shadow"
            >
              {tool}
            </span>
          ))}
        </div>
        <LanguageSkills />
        <ThingsILike />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-24">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <p className="max-w-3xl text-center text-gray-300 mb-8">
        Feel free to reach out through any of the platforms below.
      </p>

      <div className="flex space-x-10 text-3xl">
        <a
          href="https://github.com/Boredoom17"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/aadarsha-chhetri-112580271/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
          aria-label="LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="hover:text-purple-500 transition"
          aria-label="Email"
        >
          <EnvelopeIcon />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
