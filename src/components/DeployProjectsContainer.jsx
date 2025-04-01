import { FaFilm, FaBlog, FaBookOpen } from "react-icons/fa";
import "../styles/components/deployprojectscontainer.sass";

const deployedProjects = [
  {
    name: "Movies Lib",
    url: "https://michael-petterson-06.github.io/movies-lib/",
    icon: <FaFilm id="icon-movies" />,
  },
  {
    name: "Mini Blog",
    url: "https://michael-petterson-06.github.io/mini-blog/",
    icon: <FaBlog id="icon-blog" />,
  },
  {
    name: "Dicionário",
    url: "https://dictionary-anju.vercel.app/",
    icon: <FaBookOpen id="icon-dictionary" />,
  },
];

const DeployProjectsContainer = () => {
  return (
    <section className="deploy-projects-container">
      <h2>Projetos em Deploy</h2>
      <ul>
        {deployedProjects.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
              <span className="icon">{project.icon}</span>
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DeployProjectsContainer;
