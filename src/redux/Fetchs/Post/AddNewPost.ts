import { PostType } from "../../Types/PostType";

export const addNewPost = async (newPost: PostType) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/post`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
            credentials: "include",
        });
        if (res.status > 201){
            throw new Error('Network response was not ok');
        }
        const data: PostType = await res.json();
        return data;
    } catch (error) {
        throw "הוספת הפוסט נכשלה, נסה שוב מאוחר יותר";
    }
};