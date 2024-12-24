import axios from "../Api/axios";
const SCATEGORIE_API = "under_categories";
export const fetchunder = async () => {
  return await axios.get(SCATEGORIE_API);
};
export const fetchunderById = async (scategorieId) => {
  return await axios.get(SCATEGORIE_API + "/" + scategorieId);
};
export const deleteunder = async (scategorieId) => {
  return await axios.delete(SCATEGORIE_API + "/" + scategorieId);
};
export const addunder = async (scategorie) => {
  return await axios.post(SCATEGORIE_API, scategorie);
};
export const editunder = (scategorie) => {
  return axios.put(SCATEGORIE_API + "/" + scategorie.id, scategorie);
};
export const fetchunderPagination = async (page, limit) => {
  return await axios.get(
    '/under/' + SCATEGORIE_API + `?page=${page}&pageSize=${limit}`
  );
};

