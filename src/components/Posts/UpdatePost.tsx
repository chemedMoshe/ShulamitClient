import { MdCake, MdUpdate } from "react-icons/md";
import "./Post.css";

interface IProp {
  handleUpdateMode: () => void;
  isUpdateMode: boolean;
  handleSaveChanges: () => void;
}
const UpdatePost = ({
  handleUpdateMode,
  isUpdateMode,
  handleSaveChanges,
}: IProp) => {
  return (
      <div>
        {!isUpdateMode ? (
          <MdUpdate onClick={handleUpdateMode} />
        ) : (
          <MdCake onClick={handleSaveChanges} />
        )}
      </div>
  );
};

export default UpdatePost;
