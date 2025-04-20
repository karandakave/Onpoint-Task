import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Users from './Pages/Users';
import Posts from './Pages/Posts';
import Layout from './Components/layout';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Router>
      <div className="">

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} /> 
          </Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;
