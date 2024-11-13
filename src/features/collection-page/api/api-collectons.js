import axios from "axios";
import { BASE_URL_PROMPT_API } from "../../../constant/BASE_URL.js";

export async function fetchCollections() {
  try {
    const response = await axios.get(BASE_URL_PROMPT_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw new Error("Failed to fetch collections.");
  }
}

export async function deleteCollection(id, title) {
  try {
    const response = await axios.delete(`${BASE_URL_PROMPT_API}/${id}`);
    if (response.status === 200) {
      alert(`${title} deleted successfully`);
    }
    return response.data;
  } catch (error) {
    console.error("Error deleting collection:", error);
    throw new Error("Failed to delete collection.");
  }
}

export async function getDataById(id) {
  try {
    const response = await axios.get(`${BASE_URL_PROMPT_API}/${id}`);
    if (!response.status === 200) {
      throw new Error("Data not found.");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching data by id:", error);
    return null;
  }
}