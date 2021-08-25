import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostState {
  postListViewPage: number;
}

const initialState: PostState = { postListViewPage: 1 };

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostListViewPage: (state, action: PayloadAction<number>) => {
      state.postListViewPage = action.payload < 1 ? 1 : action.payload;
    },
    resetPostListViewPage: (state) => {
      state.postListViewPage = 1;
    },
  },
});

export const { setPostListViewPage, resetPostListViewPage } = postSlice.actions;
