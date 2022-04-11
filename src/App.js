import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Post } from './pages/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="post/:postId" element={<Post />} />
    </Routes>
  );
}

export default App;
