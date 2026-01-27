export const deletePostFetch = async (postId: string) => {
  try {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/post/delete/${postId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (response.status !== 200) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
} catch (error) {
  throw "מחיקת הפוסט נכשלה, נסה שוב מאוחר יותר";
}
};
