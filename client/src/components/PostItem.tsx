import React from 'react';
import dayjs from 'dayjs';
import { Post } from '../entities/Post';
import ClockIcon from './icons/ClockIcon';
import PostItemStyle from '../styles/post-item.style';

type Props = {
  post: Post;
};

const PostItem: React.FC<Props> = ({ post }) => (
  <article css={PostItemStyle.root}>
    <div css={PostItemStyle.createdAt}>
      <ClockIcon aria-label='Created at' />
      <time css={PostItemStyle.createdAtValue}>{dayjs(post.createdAt).format('YYYY-MM-DD HH:mm:ss')}</time>
    </div>
    <p css={PostItemStyle.body}>{post.body}</p>
  </article>
);

export default PostItem;
