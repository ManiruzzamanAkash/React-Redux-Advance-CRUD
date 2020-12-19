import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { StripHTMLText } from '../../../master/utils/StringHelper';

const ProductShortInfo = (props) => {
    const [isShortText, setIsShortText] = useState(true);
    const { index, product } = props;

    return ( 
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                {product.title}
                <br />
                {
                    product.image_url != null &&
                    <img src={product.image_url} className="img img-product" alt="" />
                }
            </td>
            <td>
                <strong>{product.price} ৳</strong>
            </td>
            <td>
                {
                    isShortText &&
                    <div>
                        {StripHTMLText(product.description, 20)}...
                        <br />
                        <button className="btn btn-link btn-sm" onClick={() => setIsShortText(false)}>
                            View More <i className="fa fa-chevron-down"></i>
                        </button>
                    </div>
                }
                {
                    !isShortText &&
                    <div>
                        {StripHTMLText(product.description, null)}...
                        <br />
                        <button className="btn btn-link btn-sm" onClick={() => setIsShortText(true)}>
                            View Less <i className="fa fa-chevron-up"></i>
                        </button>
                    </div>
                }
            </td>
            <td>
                <Link to={`/products/view/${product.id}`} title="Product Detail">
                    <i className="fa fa-eye text-info"></i>
                </Link>
                <Link to={`/products/edit/${product.id}`} title="Product Edit" className="ml-2">
                    <i className="fa fa-edit text-success"></i>
                </Link>
                <button className="btn pl-2" title="Product Delete" >
                    <i className="fa fa-trash text-danger"></i>
                </button>
            </td>
        </tr>
     );
}
 
export default ProductShortInfo;