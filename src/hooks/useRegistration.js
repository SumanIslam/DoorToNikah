import { useContext } from 'react';
import { RegistrationContext } from '../context/registration.context';

const useRegistration = () => {
	return useContext(RegistrationContext);
};

export default useRegistration;
