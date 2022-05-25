import React, { useState, useEffect, useCallback } from "react";
import './style.scss'
import { Icon } from 'react-icons-kit'
import { pencil, eye, plusCircle, money } from 'react-icons-kit/fa'
import { CartTables } from "./cartTables";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, clearCart } from "../../redux/actions/productActions";
import { AllProducts } from "../../utils/data";
import { productsList } from "../../redux/actions/productActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PreviewModal } from "../modal/PreviewModal";

export const CartProducts = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [items, setItems] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [searchInput, setSearchInput] = useState([]);
    const { products } = useSelector((state) => state.products);

    // Handle add to cart by searching product
    const handleAddToCart = () => {
        const searchProduct = AllProducts.find((item) => item.name === searchInput)
        if (searchProduct) {
            const selectedProduct = {
                quantity: 1,
                ...searchProduct,
            };

            dispatch(addProduct(selectedProduct));
        }
    };

    // Handling toastify by their type and message
    const handleToast = (type, message) => {
        if (type === "success") {
            toast.success(message);
        }
        else if (type === "error") {
            toast.error(message)
        }
        else {
            toast(message)
        }
    }

    // Handle product subtotal and items calculation
    const handleProductCalculation = useCallback(() => {
        if (products && products.length > 0) {
            let preTotal = 0;
            let preTotalItem = 0;
            for (let i = 0; i < products.length; i++) {
                const element = products[i];
                preTotal += element.price * element.quantity;
                preTotalItem += element.quantity;
            }
            setSubTotal(preTotal);
            setItems(preTotalItem);
        } else {
            setSubTotal(0);
            setItems(0);
        }
    }, [products])

    useEffect(() => {
        dispatch(productsList());
    }, [dispatch]);

    useEffect(() => {
        handleProductCalculation()
    }, [handleProductCalculation]);

    return (
        <div className="cart-section py-2">
            <div className="p-1">
                {/* Walk in customer section */}
                <div className="input-group mb-2">
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
                <div className="input-group mb-2">
                    <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Scan/Search product by name/code"
                        onChange={(e) => setSearchInput(e.target.value)}
                        style={{ fontSize: "15px" }}
                    />
                    <span className="input-group-text text-primary" onClick={() => handleAddToCart()}>
                        <Icon icon={plusCircle} size={18} />
                    </span>
                </div>

                <CartTables
                    subTotal={subTotal}
                    items={items}
                    productsList={products}
                />

                {/* Table for cart products */}
                {/* <div className="table-responsive main-cart-table overflow-auto mb-2 border-bottom">
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
                            <tr>
                                <td>COMPUTER SET - 1</td>
                                <td className="text-center">4000</td>
                                <td className="text-center">
                                    <input
                                        className="w-50 p-0 shadow-none"
                                        type="number"
                                        defaultValue={2}
                                        readOnly
                                    />
                                </td>
                                <td className="text-center">8000</td>
                                <td className="text-center">
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
                </div> */}

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

                {/* <table className="table table-bordered mb-0">
                    <tbody>
                        <tr>
                            <td>
                                <span className="float-start">Items</span>
                                <span className="float-end">0.00</span>
                            </td>
                            <td>
                                <span className="float-start">Total</span>
                                <span className="float-end">0.00</span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <span className="float-start">Order Tax
                                    <span className="text-primary"> <Icon icon={edit} size={14} /></span>
                                </span>
                                <span className="float-end"> 0.00</span>
                            </td>
                            <td>
                                <span className="float-start">Discount
                                    <span className="text-primary"> <Icon icon={edit} size={14} /></span>
                                </span>
                                <span className="float-end"> 0.00</span>
                            </td>
                        </tr>
                    </tbody>
                </table> */}

                <table className="table-sm w-100">
                    {/* <thead></thead> */}
                    <tbody>
                        <tr>
                            <td
                                className="bg-warning text-center border-bottom-0"
                                onClick={() => {
                                    products && products.length ?
                                        dispatch(clearCart()) && handleToast("success", "All Product Remove From Cart")
                                        :
                                        handleToast("error", "No Product Available")
                                }}
                            >
                                <div
                                    className="btn w-100 shadow-none text-white"
                                >
                                    Suspand
                                </div>
                            </td>
                            <td
                                className="bg-info text-center border-bottom-0"
                                onClick={() => {
                                    products && products.length ?
                                        setShow(true)
                                        :
                                        handleToast("error", "No Product Available")
                                }}
                            >
                                <button
                                    className="btn w-100 shadow-none text-white"
                                >
                                    Order
                                </button>
                            </td>
                            <td
                                rowSpan="2"
                                className="bg-success text-center"
                                role="button"
                                onClick={() => {
                                    products && products.length ?
                                        handleToast("success", "The Order is Saved Successfully")
                                        :
                                        handleToast("error", "No Product Available")
                                }}
                            >
                                <div
                                    className="w-100 shadow-none text-white"
                                >
                                    <span><Icon icon={money} size={18} /></span> Payment
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td
                                className="bg-danger text-center"
                                onClick={() => {
                                    products && products.length ?
                                        dispatch(clearCart()) && handleToast("success", "All Product Remove From Cart")
                                        :
                                        handleToast("error", "No Product Available")
                                }}
                            >
                                <button
                                    className="btn w-100 shadow-none text-white"
                                >
                                    Cancel
                                </button>
                            </td>
                            <td
                                className="bg-primary text-center"
                                onClick={() => {
                                    products && products.length ?
                                        setShow(true)
                                        :
                                        handleToast("error", "No Product Available")
                                }}
                            >
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
            <PreviewModal
                show={show}
                onHide={() => setShow(false)}
                title="Invoice Preview"
                size="lg"
            >
                <CartTables
                    subTotal={subTotal}
                    items={items}
                    productsList={products}
                />
            </PreviewModal>
            <ToastContainer />
        </div>
    )
}