import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialPostState } from "../Types/initialState";
import { getAllPostsReduser } from "../ExtraRedusers/Post/GetAllExtraReduser";
import { PostType } from "../Types/PostType";
import { deletePostReducer } from "../ExtraRedusers/Post/deleteReducer";
import { updatePostReducer } from "../ExtraRedusers/Post/UpdatePsoExtraReducer";
import { addPostReducer } from "../ExtraRedusers/Post/addNewPostReducer";

const initialState: IinitialPostState = {
  postList: [],
  loading: false,
  error: null,
  success: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearPosts: (state) => {
      state.postList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPostReducer.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(
      addPostReducer.fulfilled,
      (state, action: PayloadAction<PostType>) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.postList = [action.payload,...state.postList];
      }
    );
    builder.addCase(addPostReducer.rejected, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(getAllPostsReduser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
      state.postList = [];
    });
    builder.addCase(
      getAllPostsReduser.fulfilled,
      (state, action: PayloadAction<PostType[]>) => {
        state.postList = action.payload;
        state.loading = false;
        state.error = null;
      }
    );
    builder.addCase(getAllPostsReduser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = false;
      state.postList = [];
    });

    builder.addCase(deletePostReducer.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(
      deletePostReducer.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.postList =
          state.postList?.filter((post) => post._id !== action.payload) || null;
      }
    );
    builder.addCase(deletePostReducer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = false;
    });
    builder.addCase(updatePostReducer.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(
      updatePostReducer.fulfilled,
      (state, action: PayloadAction<PostType>) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.postList = state.postList!.map((p) =>
          p._id === action.payload._id ? action.payload : p
        );
      }
    );
    builder.addCase(updatePostReducer.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = false;
    });
  },
});

export const { clearError, clearPosts } = postSlice.actions;
export default postSlice.reducer;
