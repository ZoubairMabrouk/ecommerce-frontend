import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import "../article.css";
import { fetchcategories, fetchcategoriesPagination } from "../../service/categoriservice";
import Menu from "../menu";
import AfficheCategorie from "./AfficheCategorie";
const Listecategorie = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [categorie, setCategorie] = useState([]);
  const [limit, setLimit] = useState(2);
  const fetchProducts = async (page, limit) => {
    try {
      const res = await fetchcategoriesPagination(page, limit);
      setCategorie(res.data.products);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts(currentPage, limit);
  }, [currentPage, limit]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };
  return (
    <div>
        <Menu/>
      <AfficheCategorie
        categorie={categorie}
        handleLimitChange={handleLimitChange}
        limit={limit}
      />
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div> 
  );
};
export default Listecategorie;
