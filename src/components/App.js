import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  const test = true;
  // const { test, setTest } = useState(true);
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
