
import FrontPage from './views/FrontPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useAuth } from './AuthContext';
import LoginPage from './views/LoginPage';
import RegisterPage from "./views/RegisterPage";
import ContactUs from "./views/ContactUs"
import InfoView from "./views/InfoView"
import CreatePage from './views/CreatePage';
import Blog from './views/Blog';
import ViewOne from './views/ViewOne';
import QuizPage from './views/QuizPage';
import AirView from './views/AirView';
import WaterView from './views/WaterView';
import EarthView from './views/EarthView';
import AnimalsView from './views/AnimalsView';
import AdminView from './views/AdminView';

function App() {
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage user={user} />} />
        <Route path="/all-blogs" element={<Blog user={user} />} />
        <Route path="/blog/:id" element={<ViewOne user={user} />} />
        <Route path="/contact-us" element={<ContactUs user={user} />} />
        <Route path="/info" element={<InfoView user={user} />} />
        <Route path="/quiz" element={<QuizPage user={user} />} />

        {token ? (
          <>
            <Route path="/create" element={<CreatePage user={user} />} />
            <Route path="/admin-panel" element={<AdminView user={user} />} />
            <Route path="/air" element={<AirView />} />
            <Route path="/water" element={<WaterView />} />
            <Route path="/earth" element={<EarthView />} />
            <Route path="/animals" element={<AnimalsView />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </>
        )}

        <Route path="*" element={<FrontPage user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
