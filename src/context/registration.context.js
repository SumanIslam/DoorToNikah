import { createContext, useState } from 'react';

export const RegistrationContext = createContext({});

export const RegistrationProvider = ({ children }) => {
	const [candidatesInfo, setCandidatesInfo] = useState(
		JSON.parse(localStorage.getItem('candidatesInfo')) || {}
	);

	return (
		<RegistrationContext.Provider value={{ candidatesInfo, setCandidatesInfo }}>
			{children}
		</RegistrationContext.Provider>
	);
};

export default RegistrationProvider;