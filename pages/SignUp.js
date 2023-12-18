import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'



export default function SignUp() {
const router = useRouter();
  return (
    <div className='flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-black'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img className='mx-auto h-10 w-auto'
        onClick={()=>router.push("http://localhost:3001/")}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-grey-900 dark:text-white'>
          Sign in to your account
        </h2>
      </div>
      

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='Post'>
          <div>
            <label className='block text-sm font-medium leading-6 text-grey-400 dark:text-white'>
              Username
            </label>
            <div className='mt-2'>
              <input 
                id='email'
                name='email'
                type='email'
                required
                className='block w-full rounded-md border-0 py-1.5 text-grey-900 shadow-sm ring-1 ring-inset ring-grey-300 placeholder:text-grey-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label className='dark:text-white'>
                Password
              </label>
              <div className='text-sm'>
                <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div>
            <button 
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focuv-visble:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Sign In
              </button>
          </div>
        </form>

        <p  className='mt-10 text-center text-sm text-grey-500 point-cursor'>
          <a href='Signup' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
            Don't have an account?
          </a>
        </p>
      </div>
    </div>
  )
}
