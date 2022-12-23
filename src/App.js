import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Blog, SinglePost, AddPost } from './pages/blog';
import { Shop, Product, Cart } from './pages/shop';
import { Login } from './pages/login/Login';
import { Registration } from './pages/registration/Registration';
import { VideoPage } from './pages/video/VideoPage';
import { UploadVideo } from './pages/video/UploadVideo';
import { fetchAuthUser } from './redux/slices/auth';
import { HomePage } from './pages/HomePage';

import Footer from './components/shared/Footer/Footer';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthUser());
  }, [dispatch]);

  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/posts/:id/add-or-edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/video/upload" element={<UploadVideo />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
