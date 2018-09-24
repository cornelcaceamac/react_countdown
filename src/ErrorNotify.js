import React from 'react';

const ErrorNotify = (props) => {
	return (
		(props.show) ? (<p className="errorClass">WARNING: You can't choose a date in the past.</p>) : (<p></p>)
	)
}

export default ErrorNotify;