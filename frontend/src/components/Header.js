import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { logout } from '../actions/userActions'

function Header() {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (

<div className="Home">
    <div class="humberger__menu__overlay"></div>
        <header class="header">
            <div class="header__top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="header__top__left">
                                <ul>
                                    <li>
                                        <i class="fa fa-envelope"></i>
                                        <Link className="text-primary" to="https://preview.colorlib.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dbb3beb7b7b49bb8b4b7b4a9b7b2b9f5b8b4b6">[email&#160;protected]</Link>
                                    </li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="header__top__right">
                            
                                <div class="header__top__right__social">
                                    <Link to="#">
                                        <i class="fa fa-facebook"></i>
                                    </Link>
                                    <Link to="#">
                                        <i class="fa fa-twitter"></i>
                                    </Link>
                                    <Link to="#">
                                        <i class="fa fa-linkedin"></i>
                                    </Link>
                                    <Link to="#">
                                        <i class="fa fa-pinterest-p"></i>
                                    </Link>
                                </div>
                                 <div class="header__top__right__language">
                                    <img src="images/language.png" alt="" />
                                    <div>English</div>
                                </div>
                                
                                <Row className="header__top__right__auth">
                                {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                                ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fa fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}
                                                    

                                {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}
                            </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="header__logo">
                            <Link to="/">
                                <img src="images/logo.png" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <nav class="header__menu">
                            <ul>
                                <li class="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                {/* <li>
                                    <Link to="#">Pages</Link>
                                    <ul class="header__menu__dropdown">
                                        <li>
                                            <Link to="/shop_details">Shop Details</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop_cart">Shoping Cart</Link>
                                        </li>
                                        <li>
                                            <Link to="/checkout">Check Out</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog_details">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li> */}
                                <li>
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-lg-3">
                        <div class="header__cart">
                            <ul>
                                <li>
                                    <Link to="#">
                                        <i class="fa fa-heart"></i>
                                        <span>0</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="cart">
                                        <i class="fa fa-shopping-cart"></i>
                                        <span>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="humberger__open">
                    <i class="fa fa-bars"></i>
                </div>
            </div>
        </header>
    </div>




        
    )
}

export default Header



{/* <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />
                        <Nav className="ml-auto">

                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenue'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header> */}

