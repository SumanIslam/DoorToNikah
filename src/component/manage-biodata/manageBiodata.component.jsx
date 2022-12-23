import { useEffect } from "react";

// component
import BiodatasShowcase from "../biodatas-showcase/biodatas-showcase.component";

// useBiodatas context
import useBiodatas from "../../hooks/useBiodatas";

// api
import {
	httpGETUnapprovedBiodatas,
	httpGETUnapprovedBiodatasWithPagination,
} from '../../services/request';

const ManageBiodataComponent = () => {
  const { page, setBiodatas, setCount } = useBiodatas();

  useEffect(() => {
		const getUnapprovedBiodatas = async () => {
			const unapprovedBiodatas = await httpGETUnapprovedBiodatas();
			const unapprovedBiodatasWithPagination =
				await httpGETUnapprovedBiodatasWithPagination(page);

			if (unapprovedBiodatas?.length) {
				setCount(Math.ceil(unapprovedBiodatas.length / 12));
			} else if (unapprovedBiodatasWithPagination?.date) {
				setCount(0);
			} else {
				setCount(0);
			}

			if (unapprovedBiodatasWithPagination?.length) {
				setBiodatas(unapprovedBiodatasWithPagination);
			} else if (unapprovedBiodatasWithPagination?.date) {
				setBiodatas(unapprovedBiodatasWithPagination);
			} else {
				setBiodatas(null);
			}
		};

		getUnapprovedBiodatas();
	}, [page]);

  return (
    <>
    	<BiodatasShowcase admin={true} />
    </>
  );
};

export default ManageBiodataComponent;
