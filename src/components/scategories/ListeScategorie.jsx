import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import "../article.css";
import { fetchScategoriePagination } from "../../service/scategorieservice";
import Menu from "../menu";
import AfficheScategorie from "./AfficheScategorie";
const Listecategorie = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [scategorie, setScategorie] = useState([]);
  const [limit, setLimit] = useState(5);
  const fetchProducts = async (page, limit) => {
    try {
      const res = await fetchScategoriePagination(page, limit);
      setScategorie(res.data.products);
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
      <AfficheScategorie
        scategorie={scategorie}
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
