import Display from './components/Display';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useAuth } from './AuthContext';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import OnePost from './views/OnePost';
import OneProfile from './views/OneProfile';
import EditPost from './views/EditPost'
import CreatePost from './views/CreatePost'

function App() {

  const { user } = useAuth();
  const token = localStorage.getItem('token');
  return (
    <BrowserRouter>
    <Routes>
    {token ? (
      <>
      <Route path="/" element={<Display user={user} />} />
      <Route path="/dashboard" element={<Display user={user} />} />
      <Route path="/post/:id" element={<OnePost user={user}/>} />
      <Route path="/post/add" element={<CreatePost user={user}/>} />
      <Route path='/user/:id' element={<OneProfile user={user} />} />
      <Route path ="/post/edit/:id" element={<EditPost user={user} />}/> 
    
      </>
    ) : (
      <>
      <Route path="/" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="about" element={<div><h2>Hello</h2></div>} />
      </>
    )}
    </Routes>
    </BrowserRouter>
  )
}

export default App
