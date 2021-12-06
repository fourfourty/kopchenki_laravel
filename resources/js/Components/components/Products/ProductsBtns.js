import React from 'react';
import Icons from '../Icons.js';
import '../../../../../public/css/products.css';

const ProductsBtns = (props) => {
    return (
        <>
          <button onClick={props.switch} className={props.type === 'cow' ? 'isActive-filter switch-goods__item' : 'switch-goods__item'} id="cow">
                {
                    <Icons 
                    name={'cow'}
                    color={'#CD6858'}
                    size={'30px'}
                    className={'switch__icon'}
                    />  
                }
                </button>
                <button onClick={props.switch} className={props.type === 'pork' ? 'isActive-filter switch-goods__item' : 'switch-goods__item'} id="pork">
                    {
                        <Icons 
                        name={'pig'}
                        color={'#CD6858'}
                        size={'30px'}
                        className={'switch__icon'}
                        />  
                    }
                </button>
                <button onClick={props.switch} className={props.type === 'chicken' ? 'isActive-filter switch-goods__item' : 'switch-goods__item'} id="chicken">
                    {
                        <Icons 
                        name={'chicken'}
                        color={'#CD6858'}
                        size={'28px'}
                        className={'switch__icon'}
                        />  
                    }
                </button>
                <button onClick={props.switch} className={props.type === 'all' ? 'isActive-filter switch-goods__item' : 'switch-goods__item'} id='all'>
                {
                    <Icons 
                    name={'infinity'}
                    color={'#CD6858'}
                    size={'30px'}
                    className={'switch__icon'}
                    />  
                }
                </button>
        </>
    )
}

export default ProductsBtns;