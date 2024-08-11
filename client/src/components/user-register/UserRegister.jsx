import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth-api"
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import "./UserRegister.error.css"
import { validateRegister } from "../../api/valid-api";

const initialValues = {
	fullName: '',
	email: '',
	password: '',
}

export default function UserRegister() {
	const navigate = useNavigate();
	const{ changeAuthState } = useAuthContext();
	
	const registerHandler = async ({ email, password, fullName }) => {
		try {
			const { password: _, ...authData } = await register( email, password, fullName)
			
			changeAuthState(authData);

			navigate('/')

		} catch (err) {
			if (err.response && err.response.status === 403) {
				showErrorModal('Invalid email or password. Please try again.');
			} else {
				console.error('Login failed', err);
			}
		}
	}

	const {values, changeHandler, submitHandler, errors} = useForm (initialValues, registerHandler, validateRegister)

	return (
		<div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
		<div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
			<Link to="/register">
			<img src="/images/task-nest-logo.jpg" alt="Task Manager" className='w-40 md:mb-4 mb-12' />
			</Link>

			<div className="grid md:grid-cols-2 items-center gap-8">
			<div className="max-md:order-1 lg:min-w-[450px]">
				<img src="https://readymadeui.com/signin-image.webp" className="lg:w-11/12 w-full object-cover" alt="login-image" />
			</div>

			<form className="md:max-w-md w-full mx-auto" onSubmit={submitHandler}>
				<div className="mb-12">
				<h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">Create an account</h3>
				</div>

				<div>
				<label className="text-gray-800 text-xs block mb-2">Full Name</label>
				<div className="relative flex items-center">
					<input 
					className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" 
					type="text"
					id="fullName"
					name="fullName"
					value={values.fullName}
					onChange={changeHandler}
					placeholder="Enter name" 
					required />
					
					{errors.fullName && (
						<p className="error">
							<span className="error-icon">⚠️</span> {errors.fullName}
						</p>
                	)}
					<svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
					<circle cx="10" cy="7" r="6" data-original="#000000"></circle>
					<path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
					</svg>
				</div>
				</div>
				<div className="mt-6">
				<label className="text-gray-800 text-xs block mb-2">Email</label>
				<div className="relative flex items-center">
					<input 
						className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter email"
						type="text"
						autoComplete="email"
						name="email"
						id="email"
						value={values.email}
						onChange={changeHandler}
						required
					/>
					{errors.fullName && (
						<p className="error">
							<span className="error-icon">⚠️</span> {errors.fullName}
						</p>
                	)}
					<svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
					<defs>
						<clipPath id="a" clipPathUnits="userSpaceOnUse">
						<path d="M0 512h512V0H0Z" data-original="#000000"></path>
						</clipPath>
					</defs>
					<g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
						<path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
						<path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
					</g>
					</svg>
				</div>
				</div>
				<div className="mt-6">
				<label className="text-gray-800 text-xs block mb-2">Password</label>
				<div className="relative flex items-center">
					<input 
						className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter password" 
						autoComplete="current-password"
						type="current-password" 
						name="password" 
						id="password"
						value={values.password}
						onChange={changeHandler}
						required
						/>
						{errors.fullName && (
							<p className="error">
								<span className="error-icon">⚠️</span> {errors.fullName}
							</p>
                		)}
					<svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
					<path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
					</svg>
				</div>
				</div>

				<div className="mt-12">
				<button type="submit" className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
					Creat an account
				</button>
				<p className="text-sm mt-6 text-gray-800">Already have an account? <Link to="/login" className="text-blue-500 font-semibold hover:underline ml-1">Login here</Link></p>
				</div>
			</form>
			</div>
		</div>
		</div>
	)
}