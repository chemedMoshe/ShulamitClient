import { createAsyncThunk } from "@reduxjs/toolkit";
import { createDataGraphFetch } from "../../Fetchs/Graph/createDataGraphFetch";
import { DataGraph } from "../../Types/DataGraph";

export const createDataGraph = createAsyncThunk(
  "post/newPost",
  async (dataGraph: DataGraph, thunkAPI) => {
    try {
    const data = await createDataGraphFetch(dataGraph);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);