import { PostType } from "./PostType";

export interface IinitialUserState {
    _id: null | string
    name: null | string
    email: null | string
    loading: boolean
    error: null | string
    success: boolean
}

export interface IinitialPostState {
    postList: null | PostType[]
    loading: boolean
    error: null | string
    success: boolean
}