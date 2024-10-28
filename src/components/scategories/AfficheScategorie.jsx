import React from "react";

const AfficheScategorie = ({ scategorie, handleLimitChange, limit }) => {
  console.log(scategorie);
  return (
    <div className="table-container">
      <table className="table-container">
        <thead>
          <tr>
            <th>S-Categorie ID</th>
            <th>nom S-Categorie</th>
            <th>image S-Categorie</th>
            <th>Categorie ID</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {scategorie.map((cat, index) => (
            <tr key={index}>
              <td>{cat.id}</td>
              <td>{cat.nomscategorie}</td>
              <td>
                <img src={cat.imagescategorie} width={70} height={70} />
              </td>
              <td>{cat.categorieID}</td>
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
            <td colSpan={8}>
              <div className="limit-selector-container">
                <label>
                  Afficher &nbsp;
                  <select value={limit} onChange={handleLimitChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={100}>100</option>
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
export default AfficheScategorie;
