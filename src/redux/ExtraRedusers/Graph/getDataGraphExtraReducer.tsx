import { createAsyncThunk } from "@reduxjs/toolkit";
import getDataGraphFetch from "../../Fetchs/Graph/getDataGraphFetch";
import { DataGraph } from "../../Types/DataGraph";

export const getDataGraph = createAsyncThunk(
  "graph/getDataGraph",
  async (_, thunkAPI) => {
    try {
      const data: DataGraph[] = await getDataGraphFetch();
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
