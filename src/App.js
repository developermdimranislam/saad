import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Home from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
