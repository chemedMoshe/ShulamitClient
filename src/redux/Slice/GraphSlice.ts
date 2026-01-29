import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialGraphState } from "../Types/InitialGraphState";
import { getDataGraph } from "../ExtraRedusers/Graph/getDataGraphExtraReducer";
import { DataGraph } from "../Types/DataGraph";
import { createDataGraph } from "../ExtraRedusers/Graph/createDataGraphExtraReducer";

const initialState: IInitialGraphState = {
  dataGraph: [],
  loading: false,
  error: null,
  success: false,
};

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataGraph.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(getDataGraph.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.dataGraph = action.payload;
    });
    builder.addCase(getDataGraph.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = false;
    });

    builder.addCase(createDataGraph.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(
      createDataGraph.fulfilled,
      (state, action: PayloadAction<DataGraph>) => {
        state.loading = false;
        state.error = null;
        state.success = true;
        state.dataGraph = [action.payload, ...state.dataGraph];
      }
    );
    builder.addCase(createDataGraph.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.success = false;
    });
  },
});

export default graphSlice.reducer
