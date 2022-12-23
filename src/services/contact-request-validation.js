export const contactRequestValidation =(data) => {
	console.log(data);
	const {
		bkashNumber,
		bkashTransactionId,
		rocketNumber,
		rocketTransactionId,
		NagadNumber,
		NagadTransactionId,
	} = data;

	// bkashInfoBool
	const bkashInfoBool = Boolean(bkashNumber) || Boolean(bkashTransactionId);

	// rocketInfoBool
	const rocketInfoBool = Boolean(rocketNumber) || Boolean(rocketTransactionId);

  // nagadInfoBool
	const nagadInfoBool = Boolean(NagadNumber) || Boolean(NagadTransactionId);

  console.log(!bkashInfoBool && !rocketInfoBool && !nagadInfoBool);

  if((!bkashInfoBool) && (!rocketInfoBool) && (!nagadInfoBool)) {
    return 'Please select one payment option';
  }
	
  if(bkashInfoBool) {
    // console.log('1', rocketInfoBool || nagadInfoBool);
    if(rocketInfoBool || nagadInfoBool) {
      return 'Please select only one payment option';
    }
  } else if(rocketInfoBool) {
    // console.log('2', bkashInfoBool || nagadInfoBool);
    if(bkashInfoBool || nagadInfoBool) {
      return 'Please select only one payment option';
    }
  } else if(nagadInfoBool) {
    // console.log('3', bkashInfoBool || rocketInfoBool);
    if(bkashInfoBool || rocketInfoBool) {
      return 'Please select only one payment option';
    }
  }
}