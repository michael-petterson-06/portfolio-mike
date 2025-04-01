import { BrowserRouter as Router } from 'react-router-dom';
import MainContent from "./components/MainContent";
import DeployProjectsContainer from "./components/DeployProjectsContainer";
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";

function App() {
  return (
    <Router>
      <div id="portfolio">

        <h1>Michael Petterson</h1>

        <div className="main-layout">
          <Sidebar />
          <MainContent />
        </div>

        <DeployProjectsContainer />

      </div>
    </Router>
  );
}

export default App;
