import React from "react";
import { AllProducts } from "../../utils/data";
import { Products } from "../../components/products/Index";
import { CartProducts } from "../../components/cartProducts/Index";

const Index = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                {/* Cart section */}
                <div className="col-md-4 overflow-auto">
                    <CartProducts />
                </div>

                {/* Product section */}
                <div className="col-md-8">
                    <Products products={AllProducts} />
                </div>
            </div>
        </div>
    );
}

export default Index;
