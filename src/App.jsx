import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Listecategorie from './components/categories/Listecategorie';
import ListeScategorie from './components/scategories/ListeScategorie';
import Listearticle from './components/articles/Listearticle';
import Menu from './components/menu';
import Listarticlescard from './components/client/ListarticleCard';
import { CartProvider } from 'use-shopping-cart';
import Cart from './components/client/shopping/Cart';
/*
import Insertarticle from './components/articles';
import Insertcategorie from './components/categories';
import Insertscategorie from './components/scategories';

import Editarticle  from './components/articles';
import Editcategorie from './components/categories';
import Editscategorie from './components/scategories';

import Viewarticle  from './components/articles';
import Viewcategorie from './components/categories';
import Viewscategorie from './components/scategories';
*/

function App() {
  return (
    <>
    <CartProvider>
    <Router>
    <Routes>
      <Route path='' element={<Menu/>}/>
    <Route path="/articles" element={<Listearticle/>}/>
    <Route path="/articlescard" element={<Listarticlescard/>}/>

    <Route path="/categories" exact element={<Listecategorie/>}/>
    
    <Route path="/scategories" element={<ListeScategorie/>}/>
    <Route path='/cart' element={<Cart/>}></Route>
    
    </Routes>
    </Router>
    </CartProvider>
    </>
    )
    }
    export default App
    