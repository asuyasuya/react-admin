import React from 'react';
import Layout from "../../componets/Layout";
import {Button, TextField} from "@mui/material";

const ProductForm = () => {
    return (
       <Layout>
           <form>
               <div className={"mb-3"}>
                   <TextField label={"タイトル"}/>
               </div>
               <div className={"mb-3"}>
                   <TextField label={"説明"}/>
               </div>
               <div className={"mb-3"}>
                   <TextField label={"Image"}/>
               </div>
               <div className={"mb-3"}>
                   <TextField label={"Price"} type={"number"}/>
               </div>
               <Button variant={"contained"} color={"primary"}>Submit</Button>
           </form>
       </Layout>
    );
};

export default ProductForm;