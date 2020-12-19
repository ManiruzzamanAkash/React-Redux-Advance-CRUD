import React from 'react'
import swal from 'sweetalert';
import { useDispatch } from "react-redux";
import { deleteProductAction } from '../../redux/actions/ProductAction';

const ProductDeleteModal = (props) => {
    const { id } = props;
    const dispatch = useDispatch();

    const deleteModal = async () => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this product",
            icon: "warning",
            dangerMode: true,
            closeOnConfirm: false,
            buttons: {cancel:true, confirm:true}
        });

        if (willDelete) {
            dispatch(deleteProductAction(id))
        }
    }

    return (
        <button className="btn pl-2" title="Product Delete" onClick={deleteModal}>
            <i className="fa fa-trash text-danger"></i>
        </button>
    );
}

export default ProductDeleteModal;