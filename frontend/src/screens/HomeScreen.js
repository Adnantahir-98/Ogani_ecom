import React, { useState, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Latestproducts from '../components/latestproduct'
// import ProductCarousel from '../components/ProductCarousel'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import { listProducts } from '../actions/productActions'


function HomeScreen({ history }) {
    

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])


    const posts = [
        {
        img:"images/blog/blog-1.jpg",
        date: "March 5, 2019",
        comnt: "9",
        title: "Cooking tips make cooking simple",
        para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        },
        {
        img:"images/blog/blog-2.jpg",
        date: "June 12, 2020",
        comnt: "51",
        title: "6 ways to prepare breakfast for 30",
        para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaera",
        },
        {
        img:"images/blog/blog-3.jpg",
        date: "January 6, 2018",
        comnt: "12",
        title: "Visit the clean farm in the US",
        para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        },
      ]


    const banners = [
        {
            img:"images/banner/banner-1.jpg"
        },
        {
            img:"images/banner/banner-2.jpg"
        }
    ]

    return (

    <div>
            {/* {!keyword && <ProductCarousel />} */}
    
    <section className="hero">
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
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
                <div className="col-lg-12">
                    <div className="hero__search">
                        <div className="hero__search__form w-75">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                            </form>
                            <SearchBox />
                        </div>
                        <div className="hero__search__phone px-3">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+92324-9843213</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12" data-setbg="images/hero/banner.jpg">
                                <img src="images/hero/banner.jpg" className="veg_img w-100" style={{height:"73vh"}} alt="" />
                            </div>
                            <div className="hero__text carousel-caption" style={{position: "absolute", left:"-25%", top:"35%"}}>
                                <span className="ml-3">FRUIT FRESH</span>
                                <h2 className="ml-3" style={{fontSize: "30px"}}>Vegetable <br />100% Organic</h2>
                                <p className="ml-4">Free Pickup and Delivery Available</p>
                                <Link to="/shop" className="primary-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
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

    </section>


    <div className="banner">
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-6 col-md-6 col-sm-6"> */}
                    <div className="banner__pic">
                        {banners.map(banner =>
                            <img src={banner.img} alt="" />
                        )}
                    </div>
                {/* </div> */}
            </div>
        </div>
    </div>


    <section className="latest-product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">

                        <Latestproducts />


                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Top Rated Products</h4>
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
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Review Products</h4>
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
        </div>
    </section>



    {/* Blog Post Section */}
    <section className="from-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title from-blog__title">
                        <h2>From The Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row">

            {posts.map(post =>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> {post.date} </li>
                                <li><i className="fa fa-comment-o"></i> {post.comnt} </li>
                            </ul>
                            <h5><a href="#">{post.title} </a></h5>
                            <p> {post.para} </p>
                        </div>
                    </div>
                </div>
            )}

            </div>
        </div>
    </section>




</div>

    )
}

export default HomeScreen
