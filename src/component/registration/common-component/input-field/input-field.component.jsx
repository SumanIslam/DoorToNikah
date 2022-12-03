import React from 'react';

const InputField = ({title, guideText, variant, value, name, required, handleChange}) => {
  return (
		<fieldset className='border pl-1 custom-input-container mt-1'>
			<legend className='float-none w-auto'>{title}</legend>
			{variant === 'input' ? (
				<input
					type='text'
					name={name}
					value={value}
					className='full-width'
					onChange={handleChange}
					required={required}
					autoComplete='off'
				/>
			) : (
				<textarea
					rows={5}
					name={name}
					value={value}
					className='full-width'
					onChange={handleChange}
					required={required}
					autoComplete='off'
				/>
			)}
			{guideText && <p className='guide-text'>{guideText}</p>}
		</fieldset>
	);
}

export default InputField;