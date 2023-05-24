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
      <a href="https://drive.google.com/file/d/1zOqWrsiY9hmGb8C1FLaQCUIeZ2kJcjEl/view?usp=drive_link" className="btn">
      Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;

