import User from "./UserSlice";

export const store = {
    state: {
        myUser: User
    },
};

export type RootState = ReturnType<() => typeof store.state>

