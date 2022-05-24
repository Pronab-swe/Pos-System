import React from "react";
import './style.scss'
import { Icon } from 'react-icons-kit'
import { pencil, eye, plusCircle, trash, remove } from 'react-icons-kit/fa'
import { money } from "react-icons-kit/fa";

export const CartProducts = () => {

    return (
        <div className="cart-section py-3">
            <div className="p-2">
                {/* Walk in customer section */}
                <div className="input-group mb-2">
                    {/* <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Walk in customer"
                    /> */}
                    <select className="form-select shadow-none">
                        <option>Walk in customer</option>
                        <option value="1">Test 1</option>
                        <option value="2">Test 2</option>
                        <option value="3">Test 3</option>
                    </select>
                    <span className="input-group-text text-primary">
                        <Icon icon={pencil} size={18} />
                    </span>
                    <span className="input-group-text text-primary">
                        <Icon icon={eye} size={18} />
                    </span>
                    <span className="input-group-text text-primary">
                        <Icon icon={plusCircle} size={18} />
                    </span>
                </div>

                {/* Warehouse select section */}
                <select className="form-select shadow-none mb-2">
                    <option value="1">Warehouse 1</option>
                    <option value="2">Warehouse 2</option>
                    <option value="3">Warehouse 3</option>
                </select>

                {/* Search product section */}
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Scan/Search product by name/code"
                    />
                    <span className="input-group-text text-primary">
                        <Icon icon={plusCircle} size={18} />
                    </span>
                </div>

                {/* Table for cart products */}
                <div className="table-responsive main-cart-table overflow-auto">
                    <table className="table table-bordered text-center">
                        <thead className="cart-thead sticky-top">
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
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0 shadow-none"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td>4000</td>
                                <td>
                                    <input
                                        className="w-50 p-0"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td>8000</td>
                                <td>
                                    <button
                                        className="btn p-0 shadow-none"
                                        type="button"
                                    >
                                        <Icon icon={remove} size={18} />
                                    </button>
                                </td>
                            </tr>
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

                <table className="table table-bordered mb-0 mt-2">
                    <tbody>
                        <tr>
                            <td className="py-2">
                                <span className="float-start">Items</span>
                                <span className="float-end">0.00</span>
                            </td>
                            <td className="py-2">
                                <span className="float-start">Total</span>
                                <span className="float-end">0.00</span>
                            </td>
                        </tr>

                        <tr>
                            <td className="py-2">
                                <span className="float-start">Order Tax</span>
                                <span className="float-end"> 0.00</span>
                            </td>
                            <td className="py-2">
                                <span className="float-start">Discount</span>
                                <span className="float-end"> 0.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="table mb-0">
                    <tbody>
                        <tr>
                            <td className="bg-dark text-white border-bottom-0">
                                <span className="float-start">Total Payable</span>
                                <span className="float-end">0.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table-sm w-100">
                    {/* <thead></thead> */}
                    <tbody>
                        <tr>
                            <td className="bg-warning text-center border-bottom-0">
                                <div
                                    className="btn w-100 shadow-none text-white"
                                >
                                    Suspand
                                </div>
                            </td>
                            <td className="bg-info text-center border-bottom-0">
                                <button
                                    className="btn w-100 shadow-none text-white"
                                >
                                    Order
                                </button>
                            </td>
                            <td rowSpan="2" className="bg-success text-center" role="button">
                                <div
                                    className="w-100 shadow-none text-white"
                                >
                                    <span><Icon icon={money} size={18} /></span> Payment
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="bg-danger text-center">
                                <button
                                    className="btn w-100 shadow-none text-white"
                                >
                                    Cancel
                                </button>
                            </td>
                            <td className="bg-primary text-center">
                                <button
                                    className="btn w-100 shadow-none text-white"
                                >
                                    Bill
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}