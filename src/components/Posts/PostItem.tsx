import { PostType } from "../../redux/Types/PostType"
import "./Post.css"

interface Prop {
    post:PostType
}


const PostItem = ({post}:Prop) => {
  return (
    <div className="post-item">
    <h2>{post.header}</h2>
    <p className='content-post'>{post.content}</p>
  </div>
  )
}

export default PostItem
