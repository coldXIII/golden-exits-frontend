import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios';

const initialState = {
  comments: [],
  loading: false,
};

export const createComment = createAsyncThunk(
  'comment/createComment',
  async ({ postId, comment, userId }) => {
    try {
      const { data } = await axios.post(`/comments/${postId}`, {
        userId,
        comment,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostComments = createAsyncThunk(
  'comment/getPostComments',
  async (postId) => {
    try {
      const { data } = await axios.get(`/posts/comments/${postId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload);
      })
      .addCase(createComment.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getPostComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      })
      .addCase(getPostComments.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const commentReducer = commentSlice.reducer;
