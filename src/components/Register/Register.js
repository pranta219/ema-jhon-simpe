import React, { useState } from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { LockClosed } from 'react-hero-icon/solid';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmBlur = event => {
        setConfirm(event.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirm) {
            setError('your two password did not match')
            return
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='mt-20'>
            <div className="container-from min-h-full flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sing Up <svg xmlns="http://www.w3.org/2000/svg" class="inline h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg> </h2>
                    </div>
                    <form onSubmit={handleCreateUser} className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="flex items-center justify-between">
                            <div className='flex items-center'>
                                <label htmlFor="first-name" className="sr-only">
                                    First Name
                                </label>
                                <input onBlur={handleNameBlur}
                                    id="first-name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md 
                                    rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className='flex items-center'>
                                <label htmlFor="last-name" className="sr-only">
                                    Last Name
                                </label>
                                <input onBlur={handleNameBlur}
                                    id="last-name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    onBlur={handleEmailBlur}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input onBlur={handlePasswordBlur}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Confirm Password
                                </label>
                                <input onBlur={handleConfirmBlur}
                                    id="Confirm Password"
                                    name="Confirm Password"
                                    type="Password"
                                    autoComplete="current-Confirm Password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sing Up
                            </button>
                        </div>
                        <p style={{ color: 'red' }}>
                            {error}
                        </p>
                        <p className='text-orange-400 mb'>
                            Already have an account? <Link className='text-fuchsia-600' to='/login'> Login</Link>
                        </p>
                        <div className='flex'>
                            <div class="social-divider">
                            </div> <span>or</span><div class="social-divider">
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-500  hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            Continue with google
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;