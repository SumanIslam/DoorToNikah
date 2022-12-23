import { useContext } from 'react';
import { BiodatasContext } from '../context/biodatas.context';

const useBiodatas = () => {
	return useContext(BiodatasContext);
};

export default useBiodatas;
