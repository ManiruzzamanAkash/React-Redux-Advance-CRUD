import React from 'react'
import { Link } from 'react-router-dom';

const ProductShortInfo = (props) => {
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
            <td>{product.price}</td>
            <td>{product.description}</td>
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