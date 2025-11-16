export type PostType = {
    _id: string,
    subject: string,
    header: string,
    content: string,
    endPost: string | null,
    likes: { id: string, name: string, email: string, amount: number; }[] | [],
};

export type PostKeysType =  keyof PostType