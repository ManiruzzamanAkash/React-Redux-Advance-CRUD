import React from 'react'
const currencyFormatter = require('currency-formatter');

const ProductShortInfoFrontend = (props) => {
    const { product } = props;

    return (
        <>
            <div class="card mt-2">
                <div className="product-image-area">
                    <img src={product.image_url === null ? '/assets/img/products/no-image.png' : product.image_url} className="img img-fluid product-img-frontend" alt="" />
                </div>
                <div class="card-body">
                    <h4 class="card-text product-title-frontend">
                        {product.title}
                    </h4>
                    <h5>
                        <strong className="text-warning" style={{ fontFamily: 'math' }}>
                            {
                                currencyFormatter.format(product.price, { code: 'BDT' })
                            }
                        </strong>
                    </h5>
                </div>
            </div>
        </>
    );
}

export default ProductShortInfoFrontend;