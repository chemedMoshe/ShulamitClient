import { useSelector } from "react-redux";
import { PostKeysType, PostType } from "../../redux/Types/PostType";
import { RootState, useAppDispatch } from "../../redux/store";
import { useState } from "react";
import { updatePostReducer } from "../../redux/ExtraRedusers/Post/UpdatePsoExtraReducer";
import PostIcons from "./PostIcons";
import "./Post.css";

interface Prop {
  post: PostType;
}

const PostItem = ({ post }: Prop) => {
  const isAdmin = useSelector((state: RootState) => state.myUser.isAdmin);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [currentPost, setCurrentPost] = useState<PostType>(post);
  const handleUpdatePost = (key: PostKeysType, value: string) => {
    setCurrentPost((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const dispatch = useAppDispatch();
  const handleSaveChanges = (post: PostType) => {
    dispatch(updatePostReducer(post));
    setIsUpdateMode(false);
  };
  return (
    <div className="post-item">
      {isAdmin && (
         <PostIcons post={post} 
         isUpdateMode={isUpdateMode} 
         handleSaveChanges={()=>handleSaveChanges(currentPost)}
         handleUpdateMode={setIsUpdateMode}
         />
      )}
      <div className="post-item">
        <h2>{post.header}</h2>
        <p className="content-post">{post.content}</p>
        {isUpdateMode && (
          <div className="update-post">
            <input
              name="header"
              className="update-post-header"
              value={currentPost.header}
              onChange={(e)=>handleUpdatePost("header",e.target.value)}
            />
            <textarea name="context" 
            className="update-post-textarea"
            onChange={(e)=>handleUpdatePost("content",e.target.value)}
             value={currentPost.content}
            >
            </textarea>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
