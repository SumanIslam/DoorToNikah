import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAdminAuth = () => {
	const { auth } = useAuth();

	const location = useLocation();

	return auth?.roles?.Admin === 5056 ? (
		<Outlet />
	) : (
		<Navigate to='/' state={{ from: location }} replace />
	);
};

export default RequireAdminAuth;
