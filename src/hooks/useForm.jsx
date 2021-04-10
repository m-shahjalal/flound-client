import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import actions from '../store/user/action';

const useForm = (formType) => {
	const [inputs, setInputs] = useState({});
	const { push } = useHistory();

	const changeHandler = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(inputs);
		if (formType === 'login') {
			actions.login(inputs);
			return push('/');
		}
		if (formType === 'signup') {
			actions.singup(inputs);
			return push('/login');
		}
	};

	return { inputs, changeHandler, submitHandler };
};

export default useForm;
