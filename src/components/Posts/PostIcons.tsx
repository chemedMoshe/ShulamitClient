import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
import {PostType } from "../../redux/Types/PostType";
import "./Post.css";

interface IProps {
  post: PostType;
  handleUpdateMode: (isUpdateMode: boolean) => void;
  isUpdateMode: boolean;
  handleSaveChanges: () => void;
}

const PostIcons = ({
  post,
  isUpdateMode,
  handleSaveChanges,
  handleUpdateMode,
}: IProps) => {
  return (
    <div className="post-icons">
      <DeletePost id={post._id} />
      <UpdatePost
        id={""}
        handleUpdateMode={() => handleUpdateMode(!isUpdateMode)}
        isUpdateMode={isUpdateMode}
        handleSaveChanges={handleSaveChanges}
      />
    </div>
  );
};

export default PostIcons;
