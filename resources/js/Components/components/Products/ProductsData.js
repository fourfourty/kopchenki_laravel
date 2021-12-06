
import React, { useState, useEffect } from 'react';
import ProductsItem from './ProductsItem.js';
import ProductsBtns from './ProductsBtns.js';

const ProductsData = (props) => {
    let [typeGoods,setTypeGoods] = useState('all');
    let [goods, setGoods] = useState(null);
    // let [currentType, setCurrentType] = useState(null);

    const switchGoods = ev => {
        if(ev.currentTarget.classList.contains('switch-goods__item')) {
            setTypeGoods(typeGoods = ev.currentTarget.id);
            // setCurrentType(currentType = ev.currentTarget.id);
        }
    };

    useEffect(() => {props.isLoading ? setGoods(goods = props.goods) : ''});
    useEffect(() => {},[typeGoods]);
    // console.log(currentType)

    return (
        <React.Fragment>
            <h2 className="page-b__head headers">Наша продукция</h2>
            <div className="page-b__wrapper wrapper">
            <div className="page-b__switch-btn-wrap switch-goods">
                <ProductsBtns type={typeGoods} switch={switchGoods.bind(this)}/>
            </div>
                <div className="page-b__products products">
                    <ul className="products__lists">
                        {goods !== null ?
                            goods.filter(good => {
                                if (typeGoods === 'all' || typeGoods === good.feature) {
                                    return good;
                                }
                            }).map(good => {
                                return (
                                <ProductsItem 
                                key={good.id}
                                name={good.name}
                                path={good.path}
                                // animationClass="products__item switch-active"
                                price={good.price}
                                description={good.description}
                                weight={good.weight}
                                />
                                )
                            }) : 'Подождите данные загружаются'
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductsData;