// import React, { Fragment } from 'react';
// import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
// import { productQuantity, clearProduct } from '../actions/productQuantity';



// function Shopping_cart({basketProps, productQuantity, clearProduct}) {
// // console.log(basketProps);

// // let productsInCart = [];

// // Object.keys(basketProps.products).forEach( function(item){
// // console.log(item);
// // console.log(basketProps.products[item].inCart);
// // if(basketProps.products[item].inCart){
// // productsInCart.push(basketProps.products[item])
// // }
// // console.log(productsInCart);
// // })

// // const productImages = [beef,banana,watermelons,watermelon,grapes,burger,mango,apple];
// // const productImages = (product) => {
// //     if(product.tagName === 'beef'){ 
// //         return beef
// //     }else if(product.tagName === 'banana'){
// //         return banana
// //     }else if(product.tagName === 'watermelons'){
// //         return watermelons
// //     }else if(product.tagName === 'watermelon'){
// //         return watermelon
// //     }else if(product.tagName === 'grapes'){
// //         return grapes
// //     }else if(product.tagName === 'burger'){
// //         return burger
// //     }else if(product.tagName === 'mango'){
// //         return mango
// //     }else if(product.tagName === 'apple'){
// //         return apple
// //     }
// // }

// productsInCart = productsInCart.map( ( product, index ) =>{

// return(
//     <Fragment key={index}>
//         <tbody>
//             <tr>
//                 <td className="shoping__cart__item">
//                     <img src={productImages(product)} alt="" style = {{width:"101px", height:"100px"}} />
//                     <h5 className="pt-1">{product.name}</h5>
//                 </td>
//                 <td className="shoping__cart__price">
//                     ${product.price}
//                 </td>
//                 <td className="shoping__cart__quantity">
//                     <div className="quantity">
//                     <div className="pro-qty">
//                         <i className="fa fa-minus py-2 my-1 mx-3 text-secondary" onClick={() => productQuantity('decrease', product.tagName)} style={{cursor:"pointer"}}> </i>
//                         <span max="10"> { product.numbers} </span>
//                         <i className="fa fa-plus py-2 my-1 mx-3 text-secondary" onClick={() => productQuantity('increase', product.tagName)} max="10" style={{cursor:"pointer"}}> </i>
//                     </div>
//                     </div>
//                 </td>
//                 <td className="shoping__cart__total">
//                     ${ product.numbers * product.price }
//                 </td>
//                 <td className="shoping__cart__item__close">
//                     <span onClick={() => clearProduct(product.tagName)} className="icon_close"></span>
//                 </td>
//             </tr>
//         </tbody>

//     </Fragment>
// )

// })

// return (

//     <div>
 
//         <section className="hero hero-normal">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-3">
//                         <div className="hero__categories">
//                             <div className="hero__categories__all">
//                                 <i className="fa fa-bars"></i>
//                                 <span>All departments</span>
//                             </div>
//                             <ul>
//                                 <li><a href="#">Fresh Meat</a></li>
//                                 <li><a href="#">Vegetables</a></li>
//                                 <li><a href="#">Fruit & Nut Gifts</a></li>
//                                 <li><a href="#">Fresh Berries</a></li>
//                                 <li><a href="#">Ocean Foods</a></li>
//                                 <li><a href="#">Butter & Eggs</a></li>
//                                 <li><a href="#">Fastfood</a></li>
//                                 <li><a href="#">Fresh Onion</a></li>
//                                 <li><a href="#">Papayaya & Crisps</a></li>
//                                 <li><a href="#">Oatmeal</a></li>
//                                 <li><a href="#">Fresh Bananas</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col-lg-9">
//                         <div className="hero__search">
//                             <div className="hero__search__form">
//                                 <form action="#">
//                                     <div className="hero__search__categories">
//                                         All Categories
//                                         <span className="arrow_carrot-down"></span>
//                                     </div>
//                                     <input type="text" placeholder="What do yo u need?" />
//                                     <button type="submit" className="site-btn">SEARCH</button>
//                                 </form>
//                             </div>
//                             <div className="hero__search__phone">
//                                 <div className="hero__search__phone__icon">
//                                     <i className="fa fa-phone"></i>
//                                 </div>
//                                 <div className="hero__search__phone__text">
//                                     <h5>+65 11.188.888</h5>
//                                     <span>support 24/7 time</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>


//         <section className="breadcrumb-section set-bg" data-setbg="images/breadcrumb.jpg">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12 text-center">
//                         <div className="breadcrumb__text">
//                             <h2 className="text-dark">Shopping Cart</h2>
//                             <div className="breadcrumb__option">
//                                 <Link to="/" className="text-dark">Home</Link>
//                                 <span className="text-dark">Shopping Cart</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>


//         <section className="shoping-cart spad">
//             <div className="container">
//             <div className="row">
//             <div className="col-lg-12">
//                 <div className="shoping__cart__table">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th className="shoping__product">Products</th>
//                                 <th>Price</th>
//                                 <th>Quantity</th>
//                                 <th>Total</th>
//                                 <th></th>
//                             </tr>
//                         </thead>

//                 {/* {productsInCart} */}

//                 </table>
//                 </div>
//             </div>
//         </div>
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <div className="shoping__cart__btns">
//                             <Link to="/shop" className="primary-btn cart-btn CS">CONTINUE SHOPPING</Link>
//                             <Link to="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
//                                 Upadate Cart</Link>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <div className="shoping__continue">
//                             <div className="shoping__discount">
//                                 <h5>Discount Codes</h5>
//                                 <form action="#">
//                                     <input type="text" placeholder="Enter your coupon code" />
//                                     <button type="submit" className="site-btn">APPLY COUPON</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
                    
//                 <div className="col-lg-6">
//                     <div className="shoping__checkout">
//                         <h5>Cart Total</h5>
//                         <ul>
//                             <li>Subtotal <span>$454.98</span></li>
//                             <li>Total <span>$454.98</span></li>
//                         </ul>
//                         <Link to="/checkout" className="primary-btn">PROCEED TO CHECKOUT</Link>
//                     </div>
//                 </div>

//                 </div>
//             </div>
//         </section>
//     </div>


//     );
// }

// const mapStateToProps = state => ({
// basketProps: state.basketState
// });

// export default connect( mapStateToProps, { productQuantity, clearProduct } )(Shopping_cart);