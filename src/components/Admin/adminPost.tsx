import { useState } from "react";
import { PostType } from "../../redux/Types/PostType";
import { RootState, useAppDispatch } from "../../redux/store";
import { addPostReducer } from "../../redux/ExtraRedusers/Post/addNewPostReducer";
import "./admin.css"
import { useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";

const AdminPost = () => {
    const appDispatch = useAppDispatch();
    const loadingMode = useSelector((state: RootState) => state.post.loading);
    const successMode = useSelector((state: RootState) => state.post.success);
    const [newPost, setNewPost] = useState<PostType>();
    const handlePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setNewPost(prev => ({...prev,[name]:value}as PostType))
    }
const isValidPost = (): boolean => 
    !!(newPost?.subject && newPost?.header && newPost?.content);

    const onSubmitNewPost = (post: PostType) =>  isValidPost() && appDispatch(addPostReducer(post));
  return (
    <div className="admin-container">
        <div className="new-post-container">
            <h2>הוספת מאמר חדש</h2>
      <input name="subject"onChange={handlePostChange} value={newPost?.subject} placeholder="נושא"/>      
      <input name="header"onChange={handlePostChange} value={newPost?.header} placeholder="כותרת"/>
      <textarea name="content" onChange={handlePostChange} value={newPost?.content} placeholder="תוכן"/>
      <button className="create-post-button" onClick={() => onSubmitNewPost(newPost as PostType)} disabled={!isValidPost()}>הוסף</button>
      {loadingMode && <div className="loading"><LinearProgress color="secondary"/></div>}
      {successMode && <div className="success">!המאמר נוסף בהצלחה</div>}
        </div>
    </div>
  )
}

export default AdminPost
