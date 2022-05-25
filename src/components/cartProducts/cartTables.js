import React from "react";
import './style.scss'
import { Icon } from 'react-icons-kit'
import { trash, remove } from 'react-icons-kit/fa'
import { edit } from "react-icons-kit/fa";
import NoData from "../../assets/nodata.png"
import { removeProduct } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";

export const CartTables = (props) => {
    const dispatch = useDispatch()

    return (
        <>
            {/* Table for cart products */}
            <div className="table-responsive main-cart-table overflow-auto mb-2">
                <table className="table table-bordered">
                    <thead className="cart-thead sticky-top text-center">
                        <tr>
                            <th className="w-50" scope="col-3">Product</th>
                            <th scope="col-2">Price</th>
                            <th scope="col-2">Quantity</th>
                            <th scope="col-3">Subtotal</th>
                            <th scope="col-2">
                                <Icon icon={trash} size={18} />
                            </th>
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
                                                className="w-50 p-0 shadow-none"
                                                type="number"
                                                value={data.quantity}
                                                readOnly
                                            />
                                        </td>
                                        <td className="text-center">{(data.price * data.quantity).toFixed(2)}</td>
                                        <td className="text-center">
                                            <button
                                                className="btn p-0 shadow-none"
                                                type="button"
                                                onClick={() => dispatch(removeProduct(data.id))}
                                            >
                                                <Icon icon={remove} size={18} />
                                            </button>
                                        </td>
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

            {/* <div className="row mx-1 pt-2">
                    <div className="col-6 d-flex border py-1">
                        <span className="text-start w-100">
                            Items
                        </span>
                        <span className="text-end">
                            0.00
                        </span>
                    </div>
                    <div className="col-6 d-flex border py-1">
                        <span className="text-start w-100">
                            Total
                        </span>
                        <span className="text-end">
                            0.00
                        </span>
                    </div>
                </div>
                <div className="row mx-1">
                    <div className="col-6 d-flex border py-1">
                        <span className="text-start w-100">
                            Order Tax
                        </span>
                        <span className="text-end">
                            0.00
                        </span>
                    </div>
                    <div className="col-6 d-flex border py-1">
                        <span className="text-start w-100">
                            Discount
                        </span>
                        <span className="text-end">
                            0.00
                        </span>
                    </div>
                </div> */}

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