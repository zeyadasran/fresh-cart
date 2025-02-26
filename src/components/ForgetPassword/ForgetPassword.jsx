import React, { useState } from 'react';
import axios from 'axios';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setMessage(null);
        
        try {
            const response = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', { email });
            setMessage({ type: 'success', text: response.data.message || 'Check your email for reset instructions.' });
        } catch (error) {
            setMessage({ type: 'error', text: error.response?.data?.message || 'Something went wrong. Try again.' });
        }
        
        setIsLoading(false);
    }

    return (
        <>
               
{/* Label Email */}
  <div className="relative z-0 w-full mb-5 group">
  <input type="email" name="email"  onBlur={loginForm.handleBlur}     value={loginForm.values.email } onChange={loginForm.handleChange}   id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer" placeholder=" " required />
  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email</label>
</div>


{/* alert Email*/}
{loginForm.errors.email && loginForm.touched.email? <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
{loginForm.errors.email}
</div>:''
}


{/* 
<div className="w-[50%] mx-auto my-5">
            <h1 className='text-4xl text-gray-600'>Forgot Password</h1>
            <p className='text-gray-500 mb-4'>Enter your email to receive password reset instructions.</p>
            
            {message && <div className={`p-2 mb-4 text-sm rounded-lg ${message.type === 'error' ? 'text-red-800 bg-red-50' : 'text-green-800 bg-green-50'}`}>{message.text}</div>}
            
            <form onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-main peer" 
                        placeholder=" " required
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                </div>
                
                <button type="submit" className="text-white bg-main bg-opacity-70 hover:bg-main block ml-auto focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
            </form>
        </div> */}
        </>
     

 

    );
}
