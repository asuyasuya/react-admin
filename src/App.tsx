import React from 'react';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Links from "./pages/Links";
import {RedirectToUsers} from "./componets/RedirectToUsers";
import Products from "./pages/products/Products";
import ProductForm from "./pages/products/ProductForm";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<RedirectToUsers/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path={'/register'} element={<Register />}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/users/:id/links'} element={<Links/>}/>
                    <Route path={'/products'} element={<Products/>}/>
                    <Route path={'/products/create'} element={<ProductForm/>}/>
                    <Route path={'/products/:id/edit'} element={<ProductForm/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
