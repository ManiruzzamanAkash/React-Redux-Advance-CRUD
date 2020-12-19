import { toast } from 'react-toastify';

export const showToast = (type = 'success', msg, autoClose = 2000, className = "primaryColor") => {
    if (type === 'success') {
        toast.success(msg, {
            autoClose: autoClose === null ? 2000 : autoClose,
            className: className === null ? 'primaryColor' : className,
            position: toast.POSITION.TOP_RIGHT
        });
    } else if (type === 'error') {
        toast.error(msg, {
            autoClose: autoClose === null ? 2000 : autoClose,
            className: className === null ? 'dangerColor' : className,
            position: toast.POSITION.TOP_RIGHT
        });
    }
}