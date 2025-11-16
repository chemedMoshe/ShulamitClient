import { MdCake, MdUpdate } from "react-icons/md";
import "./Post.css";

interface IProp {
  id: string;
  handleUpdateMode: () => void;
  isUpdateMode: boolean;
  handleSaveChanges: () => void;
}
const UpdatePost = ({
  id,
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
