import { PostType } from "../../Types/PostType";

export const updatePostFetch = async (postId: string, updatedData: PostType) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/post/update/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
    credentials: "include",
  });
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  const data: PostType = await response.json();
  return data;
};
