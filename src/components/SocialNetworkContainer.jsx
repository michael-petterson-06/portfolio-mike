import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url:"https://www.linkedin.com/in/michael-petterson/"},
  { name: "github", icon: <FaGithub />, url:"https://github.com/michael-petterson-06"},
  { name: "instagram", icon: <FaInstagram />, url:"https://www.instagram.com/petterson208/"},
];

const SocialNetworkContainer = () => {
    // link eternos
    // window.location.replace('https://www.google.com') ou 
    // window.open(url, '_blank');

    return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a 
            href={network.url}
            target="_blank"
            className="social-btn"
            id={network.name}
            key={network.name}
        >
            {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
