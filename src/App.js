import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider, RequireAuth } from './components/AuthProvider';
import { CreatePost } from './pages/CreatePost';
import { Home } from './pages/Home';
import { ManageUsers } from './pages/ManageUsers';
import { Post } from './pages/Post';
import { Register } from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:postId" element={<Post />} />
        <Route path="/register" element={<Register />} />
        <Route path="createPost" element={
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        } />
        <Route path="manageUsers" element={
          <RequireAuth>
            <ManageUsers />
          </RequireAuth>
        } />
      </Routes>
    </AuthProvider>
  );
}

export default App;
