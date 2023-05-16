import { BrowserRouter as Router } from 'react-router-dom' 
import MainContent from "./components/MainContent";

import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";

function App() {
  return (
    <Router>
      <div id="portfolio">
        <h1>Michael Petterson</h1>
        <Sidebar />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
