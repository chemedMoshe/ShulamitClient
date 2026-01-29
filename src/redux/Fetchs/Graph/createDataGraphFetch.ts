import { DataGraph } from "../../Types/DataGraph";

export const createDataGraphFetch = async (dataGraph:DataGraph) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/graph`, {
         method: "POST", 
         headers: { "Content-Type": "application/json" }, 
         credentials: "include", 
         body: JSON.stringify(dataGraph)});
    const data: DataGraph = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
};