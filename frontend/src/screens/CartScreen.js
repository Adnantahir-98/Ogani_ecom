import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, Container } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

function CartScreen({ match, location, history }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

return (

<div>
    <section className="breadcrumb-section set-bg" data-setbg="images/breadcrumb.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Shopping Cart</h2>
                        <div className="breadcrumb__option">
                            <Link to="/">Home</Link>
                            <span>Shopping Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="shoping-cart spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {cartItems.length === 0 ? (
                                <Message variant='info'>
                                    Your cart is empty <Link to='/' className="text-primary">Go Back</Link>
                                </Message>
                            ) : (
                            <tbody>
                                {cartItems.map(item => (
                                <tr key={item.product}>
                                    <td className="shoping__cart__item">
                                        <img src={item.image} alt={item.name} style={{width:"100px", heigh:"75px"}}/>
                                        <h5>{item.name}</h5>
                                    </td>
                                    <td className="shoping__cart__price">
                                        ${item.price}
                                    </td>
                                    <td className="shoping__cart__quantity">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <Form.Control
                                                    className="px-3"
                                                    style={{height:"40px"}}
                                                    as="select"
                                                    value={item.qty}
                                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))} >
                                                    {
                                                        [...Array(item.countInStock).keys()].map((x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))
                                                    }

                                                </Form.Control>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="shoping__cart__total">
                                        ${item.price}
                                    </td>
                                    <td className="shoping__cart__item__close">
                                        <span 
                                        className="fa fa-times text-dark"
                                        type='button'
                                        variant='light'
                                        onClick={() => removeFromCartHandler(item.product)}></span>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="shoping__cart__btns">
                        <Link to="/shop" className="primary-btn cart-btn">CONTINUE SHOPPING</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    {/* <div className="shoping__continue">
                        <div className="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code" />
                                <button type="submit" className="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div> */}
                </div>
                <div className="col-lg-6 right-0">
                    <div className="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Subtotal <span>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span></li>
                            <li>Total <span>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</span></li>
                        </ul>
                        <button 
                        type='button'
                        style={{border:"none", background:"#7fad39", color:"#fff"}}
                        className='btn-block btn-lg rounded-0'
                        disabled={cartItems.length === 0}
                        onClick={checkoutHandler} >PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
    )
}

export default CartScreen




// <Container>
//             <Row>
//                 <Col md={8}>
//                     <h1>Shopping Cart</h1>
//                     {cartItems.length === 0 ? (
//                         <Message variant='info'>
//                             Your cart is empty <Link to='/'>Go Back</Link>
//                         </Message>
//                     ) : (
//                             <ListGroup variant='flush'>
//                                 {cartItems.map(item => (

//                                     <ListGroup.Item key={item.product}>
//                                         <Row>
//                                             <Col md={2}>
//                                                 <Image src={item.image} alt={item.name} fluid rounded />
//                                             </Col>
//                                             <Col md={3}>
//                                                 <Link to={`/product/${item.product}`}>{item.name}</Link>
//                                             </Col>

//                                             <Col md={2}>
//                                                 ${item.price}
//                                             </Col>

//                                             <Col md={3}>
//                                                 <Form.Control
//                                                     className="my-1 px-3"
//                                                     style={{height:"42px"}}
//                                                     as="select"
//                                                     value={item.qty}
//                                                     onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
//                                                 >
//                                                     {

//                                                         [...Array(item.countInStock).keys()].map((x) => (
//                                                             <option key={x + 1} value={x + 1}>
//                                                                 {x + 1}
//                                                             </option>
//                                                         ))
//                                                     }

//                                                 </Form.Control>
//                                             </Col>

//                                             <Col md={1}>
//                                                 <Button
//                                                     type='button'
//                                                     variant='light'
//                                                     onClick={() => removeFromCartHandler(item.product)}
//                                                 >
//                                                     <i className='fas fa-times my-1'></i>
//                                                     {/* <i className='fas fa-trash'></i> */}
//                                                 </Button>
//                                             </Col>
//                                         </Row>
//                                     </ListGroup.Item>
//                                 ))}
//                             </ListGroup>
//                         )}
//                 </Col>

//                 <Col md={4} className="py-4">
//                     <Card>
//                         <ListGroup variant='flush'>
//                             <ListGroup.Item>
//                                 <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
//                                 ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
//                             </ListGroup.Item>
//                         </ListGroup>

//                         <ListGroup.Item>
//                             <Button
//                                 type='button'
//                                 className='btn-block btn-success rounded-0'
//                                 disabled={cartItems.length === 0}
//                                 onClick={checkoutHandler}
//                             >
//                                 Proceed To Checkout
//                             </Button>
//                         </ListGroup.Item>


//                     </Card>
//                 </Col>
//             </Row>
//         </Container>