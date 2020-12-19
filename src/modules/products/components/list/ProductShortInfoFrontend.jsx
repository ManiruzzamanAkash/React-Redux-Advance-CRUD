import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import { StripHTMLText } from '../../../master/utils/StringHelper';
import ProductDeleteModal from '../delete/ProductDelete';
const currencyFormatter = require('currency-formatter');

const ProductShortInfoFrontend = (props) => {
    const [isShortText, setIsShortText] = useState(true);
    const { index, product } = props;

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
        // <tr key={index}>
        //     <td>{index + 1}</td>
        //     <td>
        //         {product.title}
        //         <br />
        //         {
        //             product.image_url != null &&
        //             <img src={product.image_url} className="img img-product" alt="" />
        //         }
        //     </td>
        //     <td>
        // <strong className="text-warning" style={{ fontFamily: 'math' }}>
        //     {
        //         currencyFormatter.format(product.price, { code: 'BDT' })
        //     }
        // </strong>
        //     </td>
        //     <td>
        //         {
        //             isShortText &&
        //             <div>
        //                 {StripHTMLText(product.description, 20)}...
        //                 <button className="btn btn-link btn-sm" onClick={() => setIsShortText(false)}>
        //                     View More <i className="fa fa-chevron-down"></i>
        //                 </button>
        //             </div>
        //         }
        //         {
        //             !isShortText &&
        //             <div>
        //                 {StripHTMLText(product.description, null)}...
        //                 <br />
        //                 <button className="btn btn-link btn-sm" onClick={() => setIsShortText(true)}>
        //                     View Less <i className="fa fa-chevron-up"></i>
        //                 </button>
        //             </div>
        //         }
        //     </td>
        //     <td>
        //         <p className="card-text text-center">
        //             <strong>Time: </strong> {moment(product.created_at).format("Do MMM YYYY HH:mm")}
        //             <br />
        //             <>
        //                 <strong>By: </strong>
        //                 <span className="badge badge-info">{product.user.name}</span>
        //             </>
        //         </p>
        //     </td>
        // </tr>
    );
}

export default ProductShortInfoFrontend;