import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/utils/axios';

const initialState = {
  news: [],
  loading: false,
};

export const getNews = createAsyncThunk('news/getNews', async () => {
  try {
    const { data } = await axios.get(`/news`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(getNews.rejected, (state) => {
        state.loading = false;
      })
  },
});

export const newsReducer = newsSlice.reducer;
