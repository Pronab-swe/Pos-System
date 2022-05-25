import React, { useState } from "react";
import './style.scss'
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/productActions";
import { Loader } from "../loading/Index";

export const Products = (props) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    // handle add product to cart
    const handleAddToCart = (data) => {
        setLoading(true)
        const selectedProduct = {
            quantity: 1,
            ...data,
        };
        setTimeout(() => {
            dispatch(addProduct(selectedProduct));
            setLoading(false)
        }, 500);

    };


    return (
        <div className="product-section">
            {loading ? <Loader /> : null}
            <div className="d-flex flex-wrap text-center py-2 p-2">
                {props.products && props.products.length > 0 ?
                    props.products.map((data, i) => {
                        return (
                            <div
                                className="product-details me-1 mt-1 border p-1 shadow-sm"
                                key={i}
                                role="button"
                                onClick={() => handleAddToCart(data)}
                            >
                                <img className="product-image" src={data.image} alt={data.name} />
                                <p className="text-wrap mb-0 mt-1">{data.name}</p>
                            </div>
                        )
                    })
                    : null}
            </div>
        </div>

    )
}