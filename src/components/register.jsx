import axios from 'axios';
import { useState } from 'react';

const Register = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = { email, password };
		axios
			.post('https://sightseer-backend.onrender.com/users/register', newUser)
			.then((result) => {
                console.log(result)
				setRegister(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// if (register) {
	// 	return <div>User registered successfully!</div>
    //     ;
	// }

	return (
		<>
        <div className='dropdown-container'>
            <button
					className='dropdown-button'
					onClick={register ? 'register' : null}>
					Register
				</button>
                <div className='dropdown-menu'>

			<form onSubmit={(e) => handleSubmit(e)}>
				<label>Email</label>
				<input
					type='text'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label>Password</label>
				<input
					type='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{register ? (
					<p className='text-success'>You Are Registered Successfully</p>
				) : (
					<p className='text-danger'>You Are Not Registered</p>
				)}

				<button type='submit'>Register</button>
			</form>
            </div>
            </div>
		</>
	);
};

export default Register;
