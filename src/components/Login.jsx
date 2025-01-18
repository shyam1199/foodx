import React, { useEffect, useState } from 'react';
import { createUserAccount, userLogin } from '../backend/services/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setError(null)
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signIn) {
      const { error } = await createUserAccount(email, password)
      if (error) return setError(error)
    } else {
      const { error } = await userLogin(email, password)
      if (error) return setError(error)

      navigate('/food-delivery')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-2xl mb-6">Good to see you again</h1>

      <form className="w-full max-w-md shadow-2xl p-6 rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1 flex items-center border rounded-lg">
            <span className="px-3">🧑</span>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-l px-3 py-2 outline-none rounded-r-lg focus:ring-2"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 flex items-center border rounded-lg">
            <span className="px-3 text-gray-500">🔑</span>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-l px-3 py-2 outline-none rounded-r-lg focus:ring-2"
            />
          </div>
        </div>
        {error && <div className='text-sm text-red-600 mb-6'>{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
        >
          {signIn ? "Sign In" : "Create Account"}
        </button>
        <div className='text-center text-sm mt-4 underline hover:cursor-pointer' onClick={() => setSignIn(!signIn)}>
          {signIn ? "Don't have an account?" : "Already have an account?"}
        </div>
      </form>
    </div>
  );
};

export default Login;