import { useState } from "react";
import { PostType } from "../../redux/Types/PostType";
import "./admin.css"
import { useAppDispatch } from "../../redux/store";
import { addPostReducer } from "../../redux/ExtraRedusers/Post/addNewPostReducer";
const AdminPost = () => {
    const appDispatch = useAppDispatch();
    const [newPost, setNewPost] = useState<PostType>();
    const handlePostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setNewPost(prev => ({...prev,[name]:value}as PostType))
    }
    const onSubmitNewPost = (post: PostType) => appDispatch(addPostReducer(post));
  return (
    <div className="admin-container">
        <div className="new-post-container">
            <h2>הוספת פוסט חדש</h2>
      <input name="subject"onChange={handlePostChange} value={newPost?.subject} placeholder="נושא"/>      
      <input name="header"onChange={handlePostChange} value={newPost?.header} placeholder="כותרת"/>
      <textarea name="content" onChange={handlePostChange} value={newPost?.content} placeholder="תוכן"/>
      <button onClick={() => onSubmitNewPost(newPost as PostType)}>הוסף</button>
        </div>
    </div>
  )
}

export default AdminPost
