import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { useEffect } from 'react';
import { getAllPostsReduser } from '../../redux/ExtraRedusers/Post/GetAllExtraReduser';
import './Post.css';
import PostItem from './PostItem';


export default function PostsDashboard() {
  const appDispatch = useAppDispatch();
  const posts = useSelector((state: RootState) => state.post.postList);

  useEffect(() => {
    appDispatch(getAllPostsReduser());
  }, []);

  return (
    <>
    <div className="posts-container">
      {posts?.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
    </>
  );
}
