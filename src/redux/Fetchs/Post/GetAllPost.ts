export const getAllPosts = async () => {
    try {
        const allPosts = await fetch(`${import.meta.env.VITE_BASE_URL}/post/all`,{
            credentials: "include",
        });
        if (allPosts.status > 200){
            throw new Error('Network response was not ok');
        }
        const data = await allPosts.json();
        return data;
    } catch (error) {
        throw "קבלת כל הפוסטים כשלה";
    }
};