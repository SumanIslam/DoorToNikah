import { useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
	// const { auth } = useAuth();

  const isLoggedIn = true;

  const location = useLocation();
  // console.log('auth: ', auth);

  // return (
  //   auth?.userId
  //       ? <Outlet />
  //       : <Navigate to='/login' state={{from: location}} replace />
  // )
  return (
    isLoggedIn
        ? <Outlet />
        : <Navigate to='/login' state={{from: location}} replace />
  )
}

export default RequireAuth;