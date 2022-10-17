import React from "react";
import { v4 as uuidv4 } from 'uuid';

// MUI
import SearchIcon from '@mui/icons-material/Search';

// components
import FormSelect from "./select-field/select-field.component";

// styles
import '../../styles/utils.scss';
import './biodata-search-box.styles.scss';

// data
import { labelAndOptions } from "./selectOptionData";

const BiodataSearchBox = () => {
  return (
		<div className='bg-pink p-4 biodata-box'>
			<form>
				{labelAndOptions.map((data) => (
					<FormSelect key={uuidv4()} labelAndOptions={data} />
				))}
				<button type="submit" className='search-button d-flex justify-content-center align-items-center'>
					<SearchIcon />
					বায়োডাটা খুঁজুন
				</button>
			</form>
		</div>
	);
}

export default BiodataSearchBox;