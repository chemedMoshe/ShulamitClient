import { checkIfLoggedUserReducer } from "../redux/ExtraRedusers/LoginExtraReduser";
import { useAppDispatch } from "../redux/store";

const useIsLoginUser = () => {
  const appDispatch = useAppDispatch();
  const isLoggedUser = !!localStorage.getItem("user")
    isLoggedUser && appDispatch(checkIfLoggedUserReducer());

};

export default useIsLoginUser;
