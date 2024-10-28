import axios from "../Api/axios";
const CATEGORIE_API = "/categories";
export const fetchcategories = async () => {
  return await axios.get(CATEGORIE_API);
};
export const fetchcategorieById = async (categorieId) => {
  return await axios.get(CATEGORIE_API + "/" + categorieId);
};
export const deletecategorie = async (categorieId) => {
  return await axios.delete(CATEGORIE_API + "/" + categorieId);
};
export const addcategorie = async (categorie) => {
  return await axios.post(CATEGORIE_API, categorie);
};
export const editcategorie = (categorie) => {
  return axios.put(CATEGORIE_API + "/" + categorie.id, categorie);
};
export const fetchcategoriesPagination = async (page, limit) => {
  return await axios.get(
    CATEGORIE_API + `/cat/pagination?page=${page}&pageSize=${limit}`
  );
};

