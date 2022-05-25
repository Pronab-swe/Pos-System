import React, { useState, useEffect, useCallback } from "react";
import './style.scss';
import { Icon } from 'react-icons-kit';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { pencil, eye, plusCircle, money } from 'react-icons-kit/fa';
import { addProduct, deleteAllProducts } from "../../redux/actions/productActions";
import { productsList } from "../../redux/actions/productActions";
import { PreviewModal } from "../modal/PreviewModal";
import { AllProducts } from "../../utils/data";
import { CartTables } from "./cartTables";

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
            let totalPrice = 0
            let totalItem = 0
            for (let i = 0; i < products.length; i++) {
                const item = products[i]
                totalPrice = totalPrice + (item.price * item.quantity)
                totalItem = totalItem + item.quantity
            }
            setSubTotal(totalPrice);
            setItems(totalItem);
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
                    <span
                        className="input-group-text text-primary"
                        onClick={() => handleAddToCart()}
                        style={{ cursor: "pointer" }}
                    >
                        <Icon icon={plusCircle} size={18} />
                    </span>
                </div>

                {/* Cart table compontent call */}
                <CartTables
                    subTotal={subTotal}
                    items={items}
                    productsList={products}
                />

                {/* Cancel, order, suspend, bill and payment submit section */}
                <table className="table-sm w-100">
                    <tbody>

                        {/* Suspend, order and payment section */}
                        <tr>
                            <td
                                className="bg-warning text-center border-bottom-0"
                                onClick={() => {
                                    products && products.length ?
                                        dispatch(deleteAllProducts()) &&
                                        handleToast("success", "All Product Remove From Cart")
                                        :
                                        handleToast("error", "No Product Available")
                                }}
                            >
                                <div
                                    className="btn w-100 shadow-none text-white"
                                >
                                    Suspend
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
                                        dispatch(deleteAllProducts()) &&
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

                        {/* Cancel and bill section */}
                        <tr>
                            <td
                                className="bg-danger text-center"
                                onClick={() => {
                                    products && products.length ?
                                        dispatch(deleteAllProducts()) &&
                                        handleToast("success", "All Product Remove From Cart")
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

            {/* Preview modal call */}
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
                    preview={true}
                />
            </PreviewModal>

            {/* Toastify container call */}
            <ToastContainer />
        </div>
    )
}