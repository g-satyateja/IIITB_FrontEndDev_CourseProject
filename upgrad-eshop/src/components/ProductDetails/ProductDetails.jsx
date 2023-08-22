import { Button, CardMedia, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { Filters } from "../Content/Content";
import NoMatch from "../404Handling/NoMatch";
import './ProductDetails.css';

export default function ProductDetails() {
    let { productId } = useParams();
    console.log("🚀 ~ file: ProductDetails.jsx:11 ~ ProductDetails ~ productId:", productId)
    const products = JSON.parse(localStorage.getItem('products'));
    console.log("🚀 ~ file: ProductDetails.jsx:13 ~ ProductDetails ~ products:", products)
    const product = products?.find(element => element.key == productId);
    console.log("🚀 ~ file: ProductDetails.jsx:14 ~ ProductDetails ~ product:", product)
    const [productQuantity, setProductQuantity] = useState(1);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const user = useSelector(state => state.user);
    const isLoggedIn = Object.keys(user).length !== 0;

    useEffect(() => {
        if(!isLoggedIn) {
            console.log('reached');
            navigate('/');
        }
    });

    const ProductQuantityHandler = (e) => {
        setProductQuantity(e.target.value);
        if(product.quantity - e.target.value < 0) {
            setError('Quantity available is insufficient')
        } else {
            setError('')
        }
    }

    if(product === undefined) {
        return <NoMatch />
    }

    return(
        <div id='productDetails'>
            <Filters isHideSort={true}/>
            <div className="product-detail-section">
                <div className="product-image">
                    <CardMedia
                        component="img"
                        height="auto"
                        image={product.photo}
                        alt={product.name}
                    />
                </div>
                <div className="product-detail">
                    <div className="product-title">
                        <h1 className="product-name">{product.name}</h1>
                        <span className="product-availability">Available Quantity : {(product.quantity - productQuantity < 0) ? 0 : (product.quantity - productQuantity)}</span>
                    </div>
                    <div className="product-category">
                        <span>Category: <b>{product.category}</b></span>
                    </div>
                    <div className="product-description">
                        <span>{product.description}</span>
                    </div>
                    <div className="product-price">
                        <span> &#8377;  {product.price}</span>
                    </div>
                    <form>
                        <div className="product-quantity">
                            <TextField
                                label="Enter the Quantity"
                                value={productQuantity}
                                required
                                fullWidth
                                type='number'
                                error={error !== ''}
                                helperText={error}
                                onChange={ProductQuantityHandler}
                                onBlur={(e) => {
                                    if(!e.target.value || e.target.value === '0') {
                                        setProductQuantity(1);
                                    }
                                }}
                            />
                        </div>
                        <div className="btn-order">
                            <Button size="small" variant="contained" color="primary" onClick={() => {
                                if(error === '') {
                                    navigate({
                                        pathname: "/orders",
                                        search: createSearchParams({
                                            productId: product.key,
                                            quantity: productQuantity
                                        }).toString()
                                    });
                                }
                            }}>
                                PLACE ORDER
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}