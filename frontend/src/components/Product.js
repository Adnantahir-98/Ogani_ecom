import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


function Product({ product }) {

    return (

        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div class="featured__item">
                <div class="featured__item__pic set-bg" data-setbg={product.image}>
                    <img src={product.image} alt={product.name} />
                    <ul class="featured__item__pic__hover">
                        <li><a><i class="fa fa-heart"></i></a></li>
                        <li><a><i class="fa fa-retweet"></i></a></li>
                        <li><Link to={`/product/${product._id}`}><i class="fa fa-shopping-cart"></i></Link></li>
                    </ul>
                </div>
                <div class="featured__item__text">
                    <h6><Link to={`/product/${product._id}`}> { product.name } </Link></h6>
                    <h5>${product.price}</h5>
                </div>
            </div>
        </div>

    )
}

export default Product



{/* <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card> */}
