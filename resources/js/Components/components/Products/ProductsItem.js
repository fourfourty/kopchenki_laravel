import React, { useState } from 'react';

const ProductsItem = ({ id,name,path,price = null ,description,weight = null }) => {
  const FOLDER_PATH = '/goods/';
  let [btnActive,setBtnActive] = useState(false);

  return (
    <li className='products__item'>
      <div className="products__img-wrap">
        <img className="products__img" src={FOLDER_PATH + path} alt="img"></img>
      </div>
      <div className="products__info">
        <span className="products__discript">{name}</span>
        <button className="products__btn"
        onClick={() => setBtnActive(btnActive = true)}>Подробнее</button>
      </div>
      <div className={!btnActive ? "products__modal modal modal-hide" : "products__modal modal modal-show"}>
        <div className="modal__wrapper wrapper">
        <div className="modal__toggle" onClick={() => { setBtnActive(btnActive = false)
        }}>
        <span className="modal__mark"></span>
        <span className="modal__mark"></span>
        </div>
        <div className="modal__info">
          <span className="modal__name">{name}</span>
          <span className="modal__composition">{description}</span>
          {/* <span className="modal__weight">Вес: {weight}</span> */}
        </div>
        </div>
      </div>
    </li>
  )
}

export default ProductsItem;