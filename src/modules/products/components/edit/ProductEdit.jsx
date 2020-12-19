import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { deleteProductImagePreview, handleChangeProductInputAction, updateProductAction, emptyProductMessage, getProductDetailAction } from '../../redux/actions/ProductAction';
import SimpleEditor from '../../../master/components/text-editor/SimpleEditor';
import { Link, useHistory } from 'react-router-dom';
import LoadingSpinner from '../../../master/components/loading/LoadingSpinner';

const ProductEditSchema = yup.object().shape({
    title: yup.string().required('Please give product title'),
    price: yup.number('Please give product price').required('Please give product price').positive('Please give a positive price'),
});

const ProductEdit = ({ id }) => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(ProductEditSchema)
    });
    const dispatch = useDispatch();
    const history = useHistory();

    const isLoading = useSelector((state) => state.product.isLoading);
    const editing = useSelector((state) => state.product.editing);
    const editStatus = useSelector((state) => state.product.editStatus);
    const editMessage = useSelector((state) => state.product.editMessage);
    const productEditData = useSelector((state) => state.product.productEditData);

    const submitHandler = (data) => {
        dispatch(updateProductAction(productEditData, id))
    }

    const handleChangeTextInput = (name, value, e = null) => {
        dispatch(handleChangeProductInputAction(name, value, e, true));
    };

    useEffect(() => {
        dispatch(getProductDetailAction(id, true));
        if (typeof editStatus !== 'undefined' && editStatus === true && editMessage !== null && editMessage.length > 0) {
            if (editStatus && editMessage.length > 0) {
                dispatch(emptyProductMessage());
                history.push("/products");
            }
        }
    }, [editStatus, editMessage, dispatch, history, id]);
    return (

        <>
            {
                isLoading &&
                <LoadingSpinner text="Loading Product Details..." />
            }
            {
                typeof productEditData != 'undefined' && productEditData != null &&
                <Form
                    onSubmit={handleSubmit(submitHandler)}
                    method="POST"
                    encType="multipart/form-data"
                >
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Title <span className="text-danger text-sm">*</span></Form.Label>
                            <Form.Control
                                onChange={(e) => handleChangeTextInput('title', e.target.value)}
                                value={productEditData.title}
                                required=""
                                name="title"
                                placeholder="Enter Product Title"
                                ref={register}
                            />
                            {errors.title && <div className="text-danger text-sm">{errors.title.message}</div>}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Price <span className="text-danger text-sm">*</span></Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(e) => handleChangeTextInput('price', e.target.value)}
                                value={productEditData.price}
                                required=""
                                name="price"
                                placeholder="Enter Product Price"
                                ref={register}
                            />
                            {errors.price && <div className="text-danger text-sm">{errors.price.message}</div>}
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Description <span className="text-info text-sm">(Optional)</span></Form.Label>
                        <SimpleEditor
                            value={productEditData.description}
                            onValueChange={(e) => handleChangeTextInput('description', e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formGridCity">
                        <Form.Label>Image <span className="text-info text-sm">(Optional)</span></Form.Label>
                        <Form.Control
                            type="file"
                            name="image"
                            onChange={(e) => handleChangeTextInput('image', e.target.files[0], e)}
                            className="fromStyle"
                            ref={register}
                        />
                        {
                            productEditData.imagePreviewUrl !== null &&
                            <div className="imgPreview" title="Remove">
                                <div className="preview-delete-icon"><i className="fa fa-times text-danger" onClick={() => dispatch(deleteProductImagePreview())}></i></div>
                                <img src={productEditData.imagePreviewUrl} className="img img-thumbnail" alt=""/>
                            </div>
                        }
                    </Form.Group>

                    {!editing && <Button variant="primary" type="submit"> <i className="fa fa-check"></i> Save Product </Button>}

                    {
                        editing &&
                        <Button variant="primary" type="button" disabled>
                            Saving Product... {"  "} <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </Button>
                    }
                    <Link className="btn btn-secondary ml-2" to="/products">
                       <i className="fa fa-times"></i> Cancel
                    </Link>
                </Form>
            }
        </>
    );
}

export default ProductEdit;