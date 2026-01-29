import {DataGraph} from "./DataGraph"

export interface IInitialGraphState {
    dataGraph: DataGraph[]
    loading: boolean
    error: null | string
    success: boolean
}