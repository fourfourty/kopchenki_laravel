import React from 'react';
import ProductsData from './ProductsData';
import OnLoadingGoodsData from './LoadingGoodsData';
import axios from 'axios';
import { useState,useEffect } from 'react';


const Products = () => {

  // const DataLoading = OnLoadingGoodsData(ProductsData);
  const [appState, setAppState] = useState({
    loading:false,
    goods: null
  });
  let [loadPage,setLoadPage] = useState(false);

  window.addEventListener('load', () => {setLoadPage(loadPage = true)})

  useEffect(() => {
  //  try { setAppState({loading: true})
  //   const apiUrl = '/api/getGoods';
  //   axios.get(apiUrl).then((resp) => {
  //     const allGoods = resp.data;
  //     console.log(resp.data)
  //     setAppState({
  //       loading: false,
  //       goods: allGoods
  //        });
  //   });
  // }
  // catch(error) {
  //   return console.log(error);
  // }
  if (loadPage) {
    try {
      const request = async () => {
        const apiUrl = '/api/getGoods';
        const result = await axios.get(apiUrl)
        if (result.status === 200) {
          const allGoods = result.data;
          console.log(result.data)
          setAppState({
            loading: true,
            goods: allGoods
            });
        }
      };
      request();
    } 
    catch(err) {
        console.log(err);
    }
  }
  },[loadPage]);
    return (
    <section className="page-b">
      <a name="products">{null}</a>
      { appState.loading ? 
        <ProductsData isLoading={appState.loading} goods={appState.goods}/>
        : 'Подождите данные загружаются'
    
    }
    </section>
    )
}

//* <DataLoading isLoading={appState.loading} goods={appState.goods} /> */
export default Products;