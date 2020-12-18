import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getProductsAction } from '../../redux/actions/ProductAction';

const ProductList = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.product.isLoading);
    const products = useSelector((state) => state.product.products);

    console.log('products :>> ', products);

    useEffect(() => {
        dispatch(getProductsAction());
    }, []);
    return (
        <div className="">
            <table className="table table-bordered">
                <thead>
                    <th>Sl</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Link to={`/products/view/${product.id}`} title="Product Detail">
                                        <i className="fa fa-eye text-info"></i>
                                    </Link>
                                    <Link to={`/products/edit/${product.id}`} title="Product Edit" className="ml-2">
                                        <i className="fa fa-edit text-success"></i>
                                    </Link>
                                    <button className="btn ml-2" title="Product Delete" >
                                        <i className="fa fa-trash text-danger"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;