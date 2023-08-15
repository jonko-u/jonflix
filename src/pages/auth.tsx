import axios from 'axios';
import Input from '@/components/Input';
import '@/styles/globals.css'
import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';

import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';

const Auth = (    
    
) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    
    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant) => currentVariant == 'login' ? 'register': 'login');
    },[]);
    const register = useCallback(async()=> {
        try{
            await axios.post('api/register',{
                email,
                name,
                pass
            });
            
        } catch(error){console.log(error)}
    },[email, name, pass]);
    const login = useCallback(async()=> {
        try{
            await signIn('credentials', {email,pass, callbackUrl: '/profiles'});
            
        } catch (error){ console.log(error)};
    },[email, pass]);
    return(
        <div className="relative h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover"
        style={{ backgroundImage: "url('/images/netflix-Background.jpg')" }}>
            <div className='bg-black w-full h-full lg:bg-opacity-50 md:bg-opacity-50 bg-opacity-50'>
                <nav className='px-12 py-5'>
                    <img src="/images/logo.png" alt="Logo" className='h-12'/>
                </nav>
                <div className='flex justify-center'>
                     <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full '>
                        <h2 className='text-white text-4xl mb-8 font-semibold'>{variant == 'login' ? 'Sign in' : 'Register'}</h2>

                        <div className='flex flex-col gap-4'>
                            {variant == 'register' && (<Input id='name' label='Name' onChange={(ev: any) => setName(ev.target.value)} value={name} type="text"/>) }                            
                            <Input id='email' label='Email' onChange={(ev: any) => setEmail(ev.target.value)} value={email} type="email"/>
                            <Input id='pass' label='Password' onChange={(ev: any) => setPass(ev.target.value)} value={pass} type="password"/>
                        </div>
                        <button onClick={variant == 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                        {variant == 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                                <FcGoogle></FcGoogle>
                            </div>
                            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                                <FaGithub></FaGithub>
                            </div>
                        </div>
                        <p className='text-neutral-500 mt-12'>
                            {variant == 'login' ? 'First time using Netflix?' : 'Already have an account?' }                            
                        <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                            {variant == 'login' ? 'Create an account' : 'Log in'}                            </span></p>
                     </div>
                </div>
            </div>
        </div>
  );
}
export default Auth;