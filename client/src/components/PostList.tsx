import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
import { selectPostListViewPage } from '../stores/post/selector';
import { buildGetPostsParams, useGetPostsLazyQuery } from '../stores/post/api';
import { Post } from '../entities/Post';
import PostListPagination from './PostListPagination';
import PostListStyle from '../styles/post-list.style';

const PostList: React.FC = () => {
  const currentPage = useSelector(selectPostListViewPage);
  const [getPosts, { data: fetchedData }] = useGetPostsLazyQuery();
  const [nextPage, setNextPage] = useState<number | undefined>();
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    getPosts(buildGetPostsParams(currentPage));
  }, [getPosts, currentPage]);
  useEffect(() => {
    if (fetchedData) {
      setPosts(fetchedData.items);
      setNextPage(fetchedData.nextPage);
    }
  }, [fetchedData]);

  return (
    <div css={PostListStyle.root}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <PostListPagination currentPage={currentPage} nextPage={nextPage} />
    </div>
  );
};

export default PostList;
