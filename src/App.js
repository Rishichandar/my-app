
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routes';

const route=routes.map((route, index) => (
  <Routes>
  <Route
        key={index}
        path={route.path}
        element={route.element}
        
      />
  </Routes>

    ))

function App() {
  return (
    <Router>
      
        
 {route}
    </Router>

  );
}

export default App;
