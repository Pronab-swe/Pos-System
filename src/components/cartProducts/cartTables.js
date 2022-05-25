import React from "react";
import './style.scss';
import { Icon } from 'react-icons-kit';
import { useDispatch } from "react-redux";
import { edit } from "react-icons-kit/fa";
import { trash, remove } from 'react-icons-kit/fa';
import { deleteProduct } from "../../redux/actions/productActions";
import NoData from "../../assets/nodata.png";

export const CartTables = (props) => {
    const dispatch = useDispatch()

    return (
        <>
            {/* Table for cart products section */}
            <div className="table-responsive main-cart-table overflow-auto mb-2">
                <table className="table table-bordered">
                    <thead className="cart-thead sticky-top text-center">
                        <tr>
                            <th className="w-50" scope="col-3">Product</th>
                            <th scope="col-2">Price</th>
                            <th className="w-25" scope="col-2">Quantity</th>
                            <th scope="col-3">Subtotal</th>
                            {props && !props.preview ?
                                <th scope="col-2">
                                    <Icon icon={trash} size={18} />
                                </th>
                                : null
                            }
                        </tr>
                    </thead>
                    <tbody className="border-1">
                        {props && props.productsList && props.productsList.length > 0 ?
                            props.productsList.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{data.id + " - " + data.name}</td>
                                        <td className="text-center">{data.price.toFixed(2)}</td>
                                        <td className="text-center">
                                            <input
                                                className="w-50 p-0 shadow-none text-center"
                                                type="number"
                                                value={data.quantity}
                                                readOnly
                                            />
                                        </td>
                                        <td className="text-center">{(data.price * data.quantity).toFixed(2)}</td>
                                        {props && !props.preview ?
                                            <td className="text-center">
                                                <button
                                                    className="btn p-0 shadow-none"
                                                    type="button"
                                                    onClick={() => dispatch(deleteProduct(data.id))}
                                                >
                                                    <Icon icon={remove} size={18} />
                                                </button>
                                            </td>
                                            : null
                                        }
                                    </tr>
                                )
                            })
                            : <tr className="text-center">
                                <td colSpan={5}>
                                    <img
                                        src={NoData}
                                        alt="No data available"
                                        height={100}
                                        width={100}
                                    />
                                    <p>No product available</p>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>

            {/* Total items and total price section */}
            <table className="table table-bordered mb-0">
                <tbody>
                    <tr>
                        <td>
                            <span className="float-start">Items</span>
                            <span className="float-end fw-bolder">
                                {props.items ? props.items : 0} ({props.items ? props.items.toFixed(2) : 0.00})
                            </span>
                        </td>
                        <td>
                            <span className="float-start">Total</span>
                            <span className="float-end fw-bolder">
                                {props.subTotal ? props.subTotal.toFixed(2) : 0.00}
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <span className="float-start">Order Tax
                                <span className="text-primary"> <Icon icon={edit} size={14} /></span>
                            </span>
                            <span className="float-end fw-bolder"> 0.00</span>
                        </td>
                        <td>
                            <span className="float-start">Discount
                                <span className="text-primary"> <Icon icon={edit} size={14} /></span>
                            </span>
                            <span className="float-end fw-bolder"> 0.00</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Total payable section */}
            <table className="table mb-0">
                <tbody>
                    <tr>
                        <td className="bg-dark text-white border-bottom-0">
                            <span className="float-start">Total Payable</span>
                            <span className="float-end fw-bolder">{props.subTotal ? props.subTotal.toFixed(2) : 0.00}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}