import axios from "../Api/axios";
const SCATEGORIE_API = "scategories";
export const fetchscategories = async () => {
  return await axios.get(SCATEGORIE_API);
};
export const fetchscategorieById = async (scategorieId) => {
  return await axios.get(SCATEGORIE_API + "/" + scategorieId);
};
export const deletescategorie = async (scategorieId) => {
  return await axios.delete(SCATEGORIE_API + "/" + scategorieId);
};
export const addscategorie = async (scategorie) => {
  return await axios.post(SCATEGORIE_API, scategorie);
};
export const editscategorie = (scategorie) => {
  return axios.put(SCATEGORIE_API + "/" + scategorie.id, scategorie);
};
export const fetchScategoriePagination = async (page, limit) => {
  return await axios.get(
    SCATEGORIE_API + `/scat/pagination?page=${page}&pageSize=${limit}`
  );
};

