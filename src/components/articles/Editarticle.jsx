import React, { useEffect, useState } from "react";
import { fetchscategories } from "../../service/scategorieservice";
import { Modal } from "react-bootstrap";
import "./Insertarticle.css"
import axios from "axios";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { editarticle } from "../../service/articleservice"; // Assurez-vous d'importer cette fonction

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Editarticle = ({ showe, art, handleclose, modifarticle }) => {
  const [article, setArticle] = useState(art);
  const [scategories, setScategories] = useState([]);
  const [files, setFiles] = useState([]);

  const loadscategories = async () => {
    try {
      const res = await fetchscategories();
      setScategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadscategories();
  }, []);

  const handlemodif = (e) => {
    setArticle({ ...article, [e.target.id]: e.target.value });
  };

  const serverOptions = () => ({
    load: (source, load, error, progress, abort, headers) => {
      fetch(new Request(source))
        .then((response) => response.blob())
        .then((myBlob) => load(myBlob));
    },
    process: (fieldName, file, metadata, load, error, progress, abort) => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "ecommerce");
      data.append("cloud_name", "dxjip85ip");
      data.append("publicid", file.name);

      axios
        .post("https://api.cloudinary.com/v1_1/dxjip85ip/image/upload", data)
        .then((response) => response.data)
        .then((data) => {
          setArticle({ ...article, imageart: data.url });
          load(data);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          error("Upload failed");
          abort();
        });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editarticle(article);
      modifarticle(article);
      handleclose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <Modal show={showe} onHide={handleclose}>
        <form className="article-form" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <h2>Modifier Article</h2>
          </Modal.Header>
          <Modal.Body>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="reference">Référence</label>
                <input
                  type="text"
                  id="reference"
                  value={article.reference}
                  onChange={handlemodif}
                  className="form-input"
                  placeholder="Entrez référence article"
                />
              </div>
              <div className="form-group">
                <label htmlFor="designation">Désignation</label>
                <input
                  type="text"
                  id="designation"
                  value={article.designation}
                  onChange={handlemodif}
                  className="form-input"
                  placeholder="Entrez la désignation article"
                />
              </div>
              <div className="form-group">
                <label htmlFor="marque">Marque</label>
                <input
                  type="text"
                  id="marque"
                  value={article.marque}
                  onChange={handlemodif}
                  className="form-input"
                  placeholder="Entrez marque"
                />
              </div>
              <div className="form-group">
                <label htmlFor="qtestock">Quantité</label>
                <input
                  type="number"
                  id="qtestock"
                  value={article.qtestock}
                  onChange={handlemodif}
                  className="form-input"
                  placeholder="Entrez quantité stock"
                />
              </div>
              <div className="form-group">
                <label htmlFor="prix">Prix</label>
                <input
                  type="number"
                  id="prix"
                  value={article.prix}
                  onChange={handlemodif}
                  className="form-input"
                  placeholder="Entrez Quantité stock"
                />
              </div>
              <div className="form-group">
                <label htmlFor="scategorieID">Catégorie</label>
                <select
                  id="scategorieID"
                  className="form-control"
                  value={article.scategorieID}
                  onChange={handlemodif}
                >
                  {scategories.map((scat, index) => (
                    <option key={index} value={scat.id}>
                      {scat.nomscategorie}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="imageart">Image</label>
                <div style={{ width: "80%", margin: "auto", padding: "1%" }}>
                  <FilePond
                    files={files}
                    acceptedFileTypes="image/*"
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    server={serverOptions()}
                    name="file"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="form-submit-button">
              Enregistrer
            </button>
            <button type="button" className="form-reset-button" onClick={handleclose}>
              Annuler
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default Editarticle;
