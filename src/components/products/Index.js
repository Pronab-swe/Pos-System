import React from "react";
import './style.scss'

export const Products = (props) => {

    return (
        <div className="product-section d-flex flex-wrap text-center my-3 p-2">
            {props.products && props.products.length > 0 ?
                props.products.map((data, i) => {
                    return (
                        <div className="product-details me-1 mt-1 border p-1 shadow-sm" key={i} role="button">
                            <img className="product-image" src={data.image} alt={data.name} />
                            <p className="text-wrap mb-0 mt-1">{data.name}</p>
                        </div>
                    )
                })
                : null}
        </div>
    )
}