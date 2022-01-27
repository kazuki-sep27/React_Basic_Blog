import React, { useContext } from "react";
import { useForm } from "react-hook-form";


import AuthContext from '../../Store/auth-context';

const axios = require('axios');
const apiURL = process.env.REACT_APP_API_URL

const LoginForm = () => {

    const authCtx = useContext(AuthContext)

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log("start call api");
        const response = await axios.post(apiURL + '/auth/login', {
            email: data.email,
            password: data.password
        })

        if (response.data.code === 200) {
            authCtx.login(response.data.token)
        } else {
            setError("email", {
                type: "manual",
                message: response.data.message,
            })
        }

        console.log(response);
    }

    return (
        <>
            {!authCtx.isLoggedIn && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex bg-gray-bg1'>
                        <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                            <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                                Log in to your account
                            </h1>
                            <div className={'mb-4'}>
                                <label htmlFor='email'>Email</label>
                                <input
                                    {...register("email",
                                        {
                                            required: true,
                                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                    type='email'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out`}
                                    id='email'
                                    placeholder='Your Email'
                                />
                                <div className={'text-xs text-red mt-2'}>
                                    {errors.email?.type === 'required' && "Email is required"}
                                    {errors.email?.type === 'pattern' && "Email is invalid"}
                                    {errors.email?.type === 'manual' && <p>{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className={'mb-4'}>
                                <label htmlFor='password'>Password</label>
                                <input
                                    {...register("password", { required: true })}
                                    type='password'
                                    className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out`}
                                    id='password'
                                    placeholder='Your Password'
                                />
                                <div className={'text-xs text-red mt-2'}>
                                    {errors.password && "Password is required"}
                                </div>
                            </div>

                            <div className='flex justify-center items-center mt-10'>
                                <button
                                    className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </form >
            )
            }
        </>
    )
}

export default LoginForm
