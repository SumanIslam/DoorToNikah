import { createContext, useState } from 'react';

export const BiodatasContext = createContext({});

export const BiodatasProvider = ({ children }) => {
	const [biodatas, setBiodatas] = useState('');
  const [page, setPage] = useState(1);
	const [count, setCount] =  useState(10)

	return (
		<BiodatasContext.Provider value={{ biodatas, page, setBiodatas, setPage, count, setCount }}>
			{children}
		</BiodatasContext.Provider>
	);
};

export default BiodatasProvider;
