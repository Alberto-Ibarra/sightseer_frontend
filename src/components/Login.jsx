import axios from 'axios';
import { useState } from 'react';

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [login, setLogin] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('https://sightseer-backend.onrender.com/users/login', {
				email,
				password,
			})
			.then((result) => {
				console.log(result);
				setLogin(true);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	function handleLogout() {
		setLogin(false);
		setEmail('');
		setPassword('');
	}

	// if (login) {
	// 	return <div>User logined successfully!</div>
	//     ;
	// }

	return (
		<>
			<div className='dropdown-container'>
				<button
					className='dropdown-button'
					onClick={login ? handleLogout : null}>
					{login ? 'Logout' : 'Login'}
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
						{login ? (
							<p className='text-success'>Welcome {email} </p>
						) : (
							<p className='text-danger'>You are not logged in.</p>
						)}

						<button type='submit' onClick={() => setShowOverlay(!showOverlay)}>
							login
						</button>
					</form>
				</div>
			</div>
            
		</>
	);
};

export default Login;
