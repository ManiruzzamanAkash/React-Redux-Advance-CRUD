import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { deleteProductImagePreview, handleChangeProductInputAction, storeNewProduct, emptyProductMessage } from '../../redux/actions/ProductAction';
import SimpleEditor from '../../../master/components/text-editor/SimpleEditor';
import { useHistory } from 'react-router-dom';

const ProductCreateSchema = yup.object().shape({
    title: yup.string().required('Please give product title'),
    price: yup.number('Please give product price').required('Please give product price').positive('Please give a positive price'),
    // description: yup.string().required('Please give product description')
});

const ProductCreate = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(ProductCreateSchema)
    });
    const dispatch = useDispatch();
    const history = useHistory();

    const isLoading = useSelector((state) => state.product.isLoading);
    const addStatus = useSelector((state) => state.product.addStatus);
    const addMessage = useSelector((state) => state.product.addMessage);
    const productData = useSelector((state) => state.product.productData);

    const submitHandler = (data) => {
        dispatch(storeNewProduct(productData))
    }

    const handleChangeTextInput = (name, value, e=null) => {
        dispatch(handleChangeProductInputAction(name, value, e));
    };

    useEffect(() => {
        if (typeof addStatus !== 'undefined' && addStatus === true && addMessage !== null && addMessage.length > 0) {
            if (addStatus && addMessage.length > 0) {
                dispatch(emptyProductMessage());
                history.push("/products");
            }
        }
    }, [addStatus, addMessage]);
    return (
        <>
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
                            value={productData.title}
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
                            value={productData.price}
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
                        value={productData.description}
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
                        productData.imagePreviewUrl !== null &&
                        <div className="imgPreview" title="Remove">
                            <div className="preview-delete-icon"><i className="fa fa-times text-danger" onClick={() => dispatch(deleteProductImagePreview())}></i></div>
                            <img src={productData.imagePreviewUrl} className="img img-thumbnail" />
                        </div>
                    }
                </Form.Group>

                {!isLoading && <Button variant="primary" type="submit"> Save Product </Button>}

                {
                    isLoading &&
                    <Button variant="primary" type="button" disabled>
                        Saving Product... {"  "} <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </Button>
                }
            </Form>


        </>
    );
}

export default ProductCreate;