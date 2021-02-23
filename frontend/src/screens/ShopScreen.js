import React, { useState, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
// import Latestproducts from '../components/latestproduct'
// import ProductCarousel from '../components/ProductCarousel'
import SearchBar from '../components/SearchBox'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { listProducts } from '../actions/productActions'


function ShopScreen({ history }) {
    
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

return (

<div className="App" style={{overflowX: "hidden",}}>

    <section class="hero hero-normal">
        <div class="container">
            <div class="row">
                {/* <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="#">Fresh Meat</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruit & Nut Gifts</a></li>
                            <li><a href="#">Fresh Berries</a></li>
                            <li><a href="#">Ocean Foods</a></li>
                            <li><a href="#">Butter & Eggs</a></li>
                            <li><a href="#">Fastfood</a></li>
                            <li><a href="#">Fresh Onion</a></li>
                            <li><a href="#">Papayaya & Crisps</a></li>
                            <li><a href="#">Oatmeal</a></li>
                            <li><a href="#">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div> */}
                <div class="col-lg-12">
                    <div class="hero__search">
                        <div class="hero__search__form w-75">
                            <form action="#">
                                <div class="hero__search__categories">
                                    All Categories
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                {/* <input type="text" placeholder="What do yo u need?" />
                                <button type="submit" class="site-btn">SEARCH</button> */}
                            </form>
                            <SearchBar />
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*   className="breadcrumb-section set-bg"    */}
    <section   data-setbg="">
        <img className="breadcrumb-section set-bg imag" src="/images/breadcrumb.jpg" alt="" />
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2 className="text-dark">Lobby's Shop</h2>
                        <div className="breadcrumb__option">
                            <Link to="/" className="text-dark">Home</Link>
                            <span className="text-dark">Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="product spad">
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-3 col-md-5">
                    <div className="sidebar">
                        <div className="sidebar__item">
                            <h4>Department</h4>
                            <ul>
                                <li><a href="#">Fresh Meat</a></li>
                                <li><a href="#">Vegetables</a></li>
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Fresh Berries</a></li>
                                <li><a href="#">Ocean Foods</a></li>
                                <li><a href="#">Butter & Eggs</a></li>
                                <li><a href="#">Fastfood</a></li>
                                <li><a href="#">Fresh Onion</a></li>
                                <li><a href="#">Papayaya & Crisps</a></li>
                                <li><a href="#">Oatmeal</a></li>
                            </ul>
                        </div>
                        

                        <div className="sidebar__item">
                            <div className="latest-product__text">
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
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-12 col-md-12">
                    <div className="product__discount">
                        <div className="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
                        


                    </div>
                    <div className="filter__item">
                        <div className="row">
                            <div className="col-lg-4 col-md-5">
                                <div className="filter__sort">
                                    <span>Sort By</span>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="filter__found">
                                    <h6><span>4</span> Products found</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-3">
                                <div className="filter__option">
                                    <span className="icon_grid-2x2"></span>
                                    <span className="icon_ul"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        :
                        <div className="row featured__filter">
                            {products.map(product => (

                                    <Product product={product} />

                            ))}
                            <Paginate page={page} pages={pages} keyword={keyword} />
                        </div>
                    }

                </div>
            </div>
        </div>
    </section>

</div>

    );
  }


export default ShopScreen;