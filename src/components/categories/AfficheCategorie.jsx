import React from "react";
import "../article.css";
const AfficheCategorie = ({ categorie, handleLimitChange, limit }) => { console.log(categorie);
  return (
    <div className="table-container">
      <table className="table-container">
        <thead>
          <tr>
            <th>Categorie ID</th>
            <th>image Categorie</th>
            <th>nom Categorie</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categorie.map((cat, index) => (
            <tr key={index}>
              <td>{cat.id}</td>
              <td>
                <img src={cat.imagecategorie} width={70} height={70} />
              </td>
              <td>{cat.nomcategorie}</td>
              
              
              <td>
                <button className="btn-edit">
                  <i className="fa-solid fa-pen-to-square"></i>Update
                </button>
              </td>
              <td>
                <button className="btn-delete">
                  <i className="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="8">
              <div className="limit-selector-container">
                <label>
                  Afficher &nbsp;
                  <select value={limit} onChange={handleLimitChange}>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={16}>16</option>
                  </select>
                </label>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default AfficheCategorie;
