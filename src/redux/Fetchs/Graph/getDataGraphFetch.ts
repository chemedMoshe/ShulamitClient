import { DataGraph } from "../../Types/DataGraph";

export const getDataGraphFetch = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/graph`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data: DataGraph[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
};

export default getDataGraphFetch;
