import React from "react";
import { CartProducts } from "../../components/cartProducts/Index";
import { Products } from "../../components/products/Index";
// import { AllProducts } from "../../data";
import { AllProducts } from "../../utils/data";

const Index = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 overflow-auto">
                    <CartProducts />
                </div>
                <div className="col-md-8">
                    <Products products={AllProducts} />
                </div>
            </div>
        </div>
    );
}

export default Index;
