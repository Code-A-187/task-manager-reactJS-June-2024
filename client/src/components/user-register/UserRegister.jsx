import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth-api"
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import "./UserRegister.error.css"
import { validateRegister } from "../../api/valid-api";
import { useErrorModal } from "../../hooks/useErrorModal";

const initialValues = {
	fullName: '',
	email: '',
	password: '',
}

export default function UserRegister() {
	const navigate = useNavigate();
	const{ changeAuthState } = useAuthContext();
	const { showErrorModal, ErrorModalComponent } = useErrorModal();
	
	const registerHandler = async ({ email, password, fullName }) => {
		try {
			const { password: _, ...authData } = await register( email, password, fullName)
			
			changeAuthState(authData);

			navigate('/')

		} catch (err) {
			let errorMessage = 'An unexpected error occurred. Please try again later.';

            if (err.message.includes('already exists')) {
                errorMessage = 'Email already in use. Please try another email.';
            } else if (err.message.includes('Invalid email or password')) {
                errorMessage = 'Invalid email or password. Please try again.';
            }
            
            showErrorModal(errorMessage); // Assuming this function is available to show the modal
        }
	}

	const {values, changeHandler, submitHandler, errors} = useForm (initialValues, registerHandler, validateRegister)

	return (
		<>
		<div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
            <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
                <div className="grid md:grid-cols-2 items-center gap-8">
                    <div className="max-md:order-1 lg:min-w-[450px]">
                    <Link to="/login" className="inline-block">
                        <img 
                            src="images/main_logo.png" 
                            alt="Task Manager" 
                            className='w-40' 
                        />
                    </Link>

                    <img src="https://readymadeui.com/signin-image.webp" className="lg:w-11/12 w-full object-cover" alt="register-image" />
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
                                    required 
                                />
                                {errors.fullName && (
                                    <p className="error">
                                        <span className="error-icon">⚠️</span> {errors.fullName}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="text-gray-800 text-xs block mb-2">Email</label>
                            <div className="relative flex items-center">
                                <input 
                                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" 
                                    placeholder="Enter email"
                                    type="email"
                                    autoComplete="email"
                                    name="email"
                                    id="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    required
                                />
                                {errors.email && (
                                    <p className="error">
                                        <span className="error-icon">⚠️</span> {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="text-gray-800 text-xs block mb-2">Password</label>
                            <div className="relative flex items-center">
                                <input 
                                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" 
                                    placeholder="Enter password" 
                                    autoComplete="current-password"
                                    type="password" 
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    required
                                />
                                {errors.password && (
                                    <p className="error">
                                        <span className="error-icon">⚠️</span> {errors.password}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-12">
                            <button type="submit" className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                                Create an account
                            </button>
                            <p className="text-sm mt-6 text-gray-800">Already have an account? <Link to="/login" className="text-blue-500 font-semibold hover:underline ml-1">Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
		<ErrorModalComponent />
		</>
	);
};