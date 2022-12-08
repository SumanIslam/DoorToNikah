import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleSuccess = (successMsg) => {
	toast.success(successMsg, {
		position: 'top-center',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	});
};