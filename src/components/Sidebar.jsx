import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpeg";


import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Michael Petterson" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/12lV3HggdvYm6KaoLMIrCWsDhwGaD0FL2/view?usp=sharing" className="btn">
      Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;

