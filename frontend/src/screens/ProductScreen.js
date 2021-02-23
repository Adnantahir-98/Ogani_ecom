import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form, Container} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }

        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
            rating,
            comment
        }
        ))
    }

    return (

<div>

    <section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars"></i>
                                <span>All departments</span>
                            </div>
                            <ul>
                                <li><Link href="#">Fresh Meat</Link></li>
                                <li><Link href="#">Vegetables</Link></li>
                                <li><Link href="#">Fruit & Nut Gifts</Link></li>
                                <li><Link href="#">Fresh Berries</Link></li>
                                <li><Link href="#">Ocean Foods</Link></li>
                                <li><Link href="#">Butter & Eggs</Link></li>
                                <li><Link href="#">Fastfood</Link></li>
                                <li><Link href="#">Fresh Onion</Link></li>
                                <li><Link href="#">Papayaya & Crisps</Link></li>
                                <li><Link href="#">Oatmeal</Link></li>
                                <li><Link href="#">Fresh Bananas</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                                        <span className="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="breadcrumb-section set-bg" data-setbg="images/breadcrumb.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Vegetable’s Package</h2>
                            <div className="breadcrumb__option">
                                <Link href="index.html">Home</Link>
                                <Link href="index.html">Vegetables</Link>
                                <span>Vegetable’s Package</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {loading ? <Loader />
        : error 
        ? <Message variant='danger'>{error}</Message> 
        : (

        <section className="product-details spad">
            <div className="container">
            <Link to='/' className='btn btn-dark rounded-0 my-3'>Go Back</Link>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img className="product__details__pic__item--large" src={product.image} alt={product.name} />
                            </div>
                            {/* <div className="product__details__pic__slider owl-carousel">
                                <img data-imgbigurl="images/product/details/product-details-2.jpg" src="images/product/details/thumb-1.jpg" alt="" />
                                <img data-imgbigurl="images/product/details/product-details-3.jpg" src="images/product/details/thumb-2.jpg" alt="" />
                                <img data-imgbigurl="images/product/details/product-details-5.jpg" src="images/product/details/thumb-3.jpg" alt="" />
                                <img data-imgbigurl="images/product/details/product-details-4.jpg" src="images/product/details/thumb-4.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                        
                            <h3>{product.name}</h3>
                            <div className="product__details__rating">
                                {/* <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span></span> */}
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                            </div>
                            <div className="product__details__price">${product.price}</div>
                            <p>{product.description}</p>
                            <ul className="my-4 py-2">
                                <li><b>Availability</b> <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span></li>
                                <li><b>Shipping</b> <span>03 day shipping. <samp>Free delivery today</samp></span></li>
                            </ul>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <Form.Control style={{width:"141px", height:"50px"}}
                                            as="select"
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)} >
                                        {
                                            [...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))
                                        }
                                        </Form.Control>
                                    </div>
                                </div>
                            </div>
                            <button className="primary-btn" style={{border:"none"}} 
                            onClick={addToCartHandler}
                                disabled={product.countInStock == 0}
                                >ADD TO CARD</button>

                            {/* <Link href="#" className="heart-icon"><span className="icon_heart_alt"></span></Link>
                            <ul>
                                <li><b>Availability</b> <span>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</span></li>
                                <li><b>Shipping</b> <span>03 day shipping. <samp>Free delivery today</samp></span></li>
                                <li><b>Weight</b> <span>0.5 kg</span></li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <Link href="#"><i className="fa fa-facebook"></i></Link>
                                        <Link href="#"><i className="fa fa-twitter"></i></Link>
                                        <Link href="#"><i className="fa fa-instagram"></i></Link>
                                        <Link href="#"><i className="fa fa-pinterest"></i></Link>
                                    </div>
                                </li>
                            </ul> */}

                        </div>
                    </div>
                    {/* <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews <span>(1)</span></Link>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                            suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                            vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                            Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                            accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                            pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                            elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                            et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                            vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                            elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                            porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                            nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                            porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                            sed sit amet dui. Proin eget tortor risus.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                            Proin eget tortor risus.</p>
                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                            elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                            porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                            nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                            Proin eget tortor risus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

            )
        }

{/* 
        <section className="related-product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title related__product__title">
                            <h2>Related Product</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="images/product/product-1.jpg">
                                <ul className="product__item__pic__hover">
                                    <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><Link href="#">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="images/product/product-2.jpg">
                                <ul className="product__item__pic__hover">
                                    <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><Link href="#">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="images/product/product-3.jpg">
                                <ul className="product__item__pic__hover">
                                    <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><Link href="#">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="images/product/product-7.jpg">
                                <ul className="product__item__pic__hover">
                                    <li><Link href="#"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-retweet"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><Link href="#">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

</div>




        
    )
}

export default ProductScreen





{/* <div>
        <Container>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
                        <div>
                            <Row>
                                <Col md={6}>
                                    <Image src={product.image} alt={product.name} fluid />
                                </Col>


                                <Col md={3}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Price: ${product.price}
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Description: {product.description}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>


                                <Col md={3}>
                                    <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <strong>${product.price}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Qty</Col>
                                                        <Col xs='auto' className='my-1'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {

                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )}


                                            <ListGroup.Item>
                                                <Button
                                                    onClick={addToCartHandler}
                                                    className='btn-block'
                                                    disabled={product.countInStock == 0}
                                                    type='button'>
                                                    Add to Cart
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <h4>Reviews</h4>
                                    {product.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

                                    <ListGroup variant='flush'>
                                        {product.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825' />
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </ListGroup.Item>
                                        ))}

                                        <ListGroup.Item>
                                            <h4>Write a review</h4>

                                            {loadingProductReview && <Loader />}
                                            {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                            {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

                                            {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                        >
                                                            <option value=''>Select...</option>
                                                            <option value='1'>1 - Poor</option>
                                                            <option value='2'>2 - Fair</option>
                                                            <option value='3'>3 - Good</option>
                                                            <option value='4'>4 - Very Good</option>
                                                            <option value='5'>5 - Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>Review</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        disabled={loadingProductReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        Submit
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
                                                )}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                    )

            }

            </Container>
        </div >  */}