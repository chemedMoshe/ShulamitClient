import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../redux/store";
import { deletePostReducer } from "../../redux/ExtraRedusers/Post/deleteReducer";

interface IProp {
  id: string;
}
const DeletePost = ({ id }: IProp) => {
  const appDispatch = useAppDispatch();
  const handleDelete = () => {
    appDispatch(deletePostReducer(id));
  };
  return (
    <div>
      <MdDelete onClick={handleDelete} />
    </div>
  );
};

export default DeletePost;
