import React, { Component } from 'react'


class latestproduct extends Component {
render() {
return (

<div>


        <h4>Latest Products</h4>
        <div className="latest-product__slider owl-carousel">
            <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                        <img src="images/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
                <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                        <img src="images/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
                <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                        <img src="images/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                    </div>
                </a>
            </div>
            
        </div>
</div>
        )
    }
}

export default latestproduct;