import React from 'react';
import { useDispatch } from 'react-redux';
import { setPostListViewPage } from '../stores/post/slice';
import ChevronRightIcon from './icons/ChevronRightIcon';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import PostListPaginationStyle from '../styles/post-list-pagination.style';

type Props = {
  currentPage: number;
  nextPage?: number;
};

const PostListPagination: React.FC<Props> = ({ currentPage, nextPage }) => {
  const dispatch = useDispatch();

  // 1ページ目で次のページがない場合は非表示
  if (currentPage === 1 && !nextPage) return null;

  return (
    <div css={PostListPaginationStyle.root}>
      <button
        css={PostListPaginationStyle.button}
        type='button'
        aria-label='Previous page'
        disabled={currentPage === 1}
        onClick={() => dispatch(setPostListViewPage(currentPage - 1))}
      >
        <ChevronLeftIcon />
      </button>
      <button
        css={PostListPaginationStyle.button}
        type='button'
        aria-label='Next page'
        disabled={!nextPage}
        onClick={() => nextPage && dispatch(setPostListViewPage(nextPage))}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default PostListPagination;
