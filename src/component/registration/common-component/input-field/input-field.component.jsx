import React from 'react';

const InputField = ({title, guideText, variant, value, handleChange}) => {
  return (
		<fieldset className='border pl-1 custom-input-container mt-1'>
			<legend className='float-none w-auto'>সম্পূর্ণ নাম*</legend>
			{variant === 'input' ? (
				<input type='text'  value={value} className='full-width' onChange={handleChange} />
			) : (
				<textarea rows={5}  value={value} className='full-width' onChange={handleChange} />
			)}
			{guideText && <p className='guide-text'>{guideText}</p>}
		</fieldset>
	);
}

export default InputField;