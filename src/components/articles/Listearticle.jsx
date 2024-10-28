import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import "../article.css";
import Affichearticle from "./Affichearticle";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  fetcharticlesPagination,
  deletearticle,
} from "../../service/articleservice";
import Menu from "../menu";
import Insertarticle from "./Insertarticle";

const Listarticles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  const [limit, setLimit] = useState(5);
  const [filtre, setFiltre] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchProducts = async (page, limit, filtre) => {
    try {
      const res = await fetcharticlesPagination(page, limit, filtre);
      setArticles(res.data.products);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts(currentPage, limit, filtre);
  }, [currentPage, limit, filtre]);

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
  const handleFiltreChange = (e) => {
    setFiltre(e.target.value);
  };
  const handleDeletearticle = async (id, ref) => {
    /* try {
      if (window.confirm("confirmer la suppression")) {
        await deletearticle(id).then((res) =>
          fetchProducts(currentPage, limit, "")
        );
      }
    } catch (error) {
      alert("impossible de se connecter au serveur");
    }*/
    confirmAlert({
      title: "Confirm delete...",
      message: " supprimer l' article: " + ref,
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            deletearticle(id)
              .then((res) => fetchProducts(currentPage, limit, ""))
              .catch((error) => console.log(error)),
        },
        {
          label: "Non",
        },
      ],
    });
  };
  const modifarticle=(artmod)=>{
    setArticles(articles.map((art) =>art.id === artmod.id ? artmod : art));
    }
    
  return (
    <div>
      <Menu filtre={filtre} handleFiltreChange={handleFiltreChange} />
      <button className="btn-add" onClick={handleShow}>
        <i className="fa-solid fa-plus-square"></i> Nouveau
      </button>

      <Affichearticle
        articles={articles}
        handleLimitChange={handleLimitChange}
        limit={limit}
        handleDeletearticle={handleDeletearticle}
        modifarticle={modifarticle}
      />
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      {show && (
        <Insertarticle
          show={show}
          handleClose={handleClose}
          fetchProducts={fetchProducts}
          limit={limit}
        />
      )}
    </div>
  );
};
export default Listarticles;
