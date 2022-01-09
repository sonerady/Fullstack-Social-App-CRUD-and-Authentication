import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

//-GET ALL MEMORIES

export const fetchMemories = async () => API.get("/memories");

//GET ONLY ONE MEMORY

export const fetchMemory = async (id) => API.get(`/memories/${id}`);

//-----POST MEMORIES

export const createMemory = async (newMemory) => {
  await API.post("/memories", newMemory);
  //   const { data } = await API.post("/memories", newMemory);
  //   console.log(data); bu şekilde de yazılabilir. amaç sadece konsola yazdırmak.
};

//-----DELETE MEMORIES

export const deleteMemory = async (id) => API.delete(`/memories/${id}`);

//-----UPDATE MEMORIES

export const updateMemory = async (id, updatedMemory) => {
  await API.put(`/memories/${id}`, updatedMemory);
};
