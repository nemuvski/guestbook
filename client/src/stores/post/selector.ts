import { RootState } from '../store';

export const selectPostListViewPage = (state: RootState) => state.postReducer.postListViewPage;
