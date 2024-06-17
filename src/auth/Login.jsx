// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { signInUser } from '../Redux/authSlice'; 
// import { Link, useNavigate } from 'react-router-dom'; 
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// const schema = yup.object().shape({
//   email: yup
//     .string()
//     .email('Invalid email address')
//     .required('Email is required'),
//   password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .max(20, 'Password must be at most 20 characters')
//     .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
//     .required('Password is required'),
// });

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error, user } = useSelector((state) => state.user);

//   const onSubmit = async (data) => {
//     await dispatch(signInUser(data));
//     if (user) {
//       navigate('/dashboard');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block text-gray-700">Email Address</label>
//           <input
//             type="email"
//             {...register('email')}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//         </div>

//         <div className="mb-4 relative">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             {...register('password')}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//           <div
//             className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
//           </div>
//           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           disabled={loading}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>

//      <Link to="/register">
//      <button className='mt-12 bg-blend-color-dodge bg-sky-500 px-5 py-6'>register</button>
//      </Link>
//       {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//     </div>
//   );
// };

// export default LoginForm;


// for testing login

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../Redux/authSlice';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be at most 20 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(''); // State variable to track login error

  const onSubmit = async (data) => {
    try {
      await dispatch(signInUser({ username: data.username, password: data.password })).unwrap();
      alert('Login successful'); // Show success message
      navigate('/dashboard'); // Redirect to the dashboard or another page
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Invalid username or password'); // Set login error message
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            {...register('username')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            {...register('password')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {loginError && <p className="text-red-500 text-sm mt-1">{loginError}</p>} {/* Display login error message */}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
