import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from 'redux/slices/posts';
import { selectIsAuth } from 'redux/slices/auth';
import { Container, Grid } from '@mui/material';
import { Post, BlogAside } from 'components/blog';
import { PostSkeleton } from 'components/blog/Post/PostSkeleton';
import Header from 'components/shared/Header/Header';
import Intro from 'components/shared/Intro/Intro';

export const Blog = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state?.auth?.data);
  const { posts } = useSelector((state) => state.posts);

  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <Intro />
      <Container maxWidth="xl">
        <Header title={'Blog'} buttonTitle={'write a post'} to={'/add-post'} />
        {!isAuth && (
          <p style={{ textAlign: 'center', color: '#d0af51' }}>
            Login to write the post ☺️
          </p>
        )}
        <Grid container spacing={2}>
          <Grid xs={12} md={7} item>
            {(isPostsLoading ? [...Array(5)] : posts.items).map((post, index) =>
              isPostsLoading ? (
                <PostSkeleton key={index} />
              ) : (
                <Post
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  text={post.text}
                  likes={post.likes}
                  comments={post.comments}
                  imageUrl={
                    post.imageUrl
                      ? `${process.env.REACT_APP_API_URL}${post.imageUrl}`
                      : ''
                  }
                  user={post.user}
                  createdAt={post.createdAt}
                  isEditable={userData?._id === post.user._id}
                />
              )
            )}
          </Grid>
          <Grid xs={12} md={5} item>
            <BlogAside />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
