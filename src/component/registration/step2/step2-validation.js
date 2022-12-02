export const Step2Validation = (states) => {
  const { biodataType, birthYear, bloodGroup, height, maritalStatus, occupation, permanentDistrict, permanentDivision, presentDistrict, presentDivision, skinColor, weight} = states;
  return biodataType !== 'সকল বায়োডাটা' &&
		birthYear !== '----' &&
		bloodGroup !== 'জানা নেই' &&
		height !== '----' &&
		maritalStatus !== 'সকল' &&
		occupation !== '' &&
		permanentDistrict !== 'সকল জেলা' &&
		permanentDivision !== 'সকল বিভাগ' &&
		presentDistrict !== 'সকল জেলা' &&
		presentDivision !== 'সকল বিভাগ' &&
		skinColor !== '----' &&
		weight !== '----';
}