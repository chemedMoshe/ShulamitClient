import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { useEffect } from 'react';
import { getAllPostsFetch } from '../../redux/ExtraRedusers/Post/GetAllExtraReduser';
import './Post.css';

export default function PostsDashboard() {
  const appDispatch = useAppDispatch();
  const posts = useSelector((state: RootState) => state.post.postList);

  useEffect(() => {
    appDispatch(getAllPostsFetch());
  }, []);

  return (
    <div className="posts-container">
      {posts?.map((post, index) => (
        <div className="post" key={index}>
          <h2>{post.header}</h2>
          <p>{post.content?.split(' ').length > 4 ? post.content.split(' ').slice(0,4).join(' ') + '...' : post.content}</p>
        </div>
      ))}
    </div>
  );
}
