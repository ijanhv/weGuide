import React from 'react'

export const Login = () => {
  return (
    <div class="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen grid grid-cols-2">
      <div>
        <img className="object-center p-10" src="https://i.pinimg.com/originals/14/bb/c9/14bbc99c3907c39d21ec10163ec14e92.png" alt="image" />
      </div>
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-5xl font-semibold text-center">Login</h1>

                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
            
                        <button
                            type="submit"
                            class="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-1">Login</button>

                
                    </div>

                    <div className="text-zinc-100 mt-6">
                        Don't have an account? 
                        <a className="no-underline border-b border-blue font-semibold text-blue" href="/signup">
                            Sign Up
                        </a>.
                    </div>
                </div>
            </div>
  )
}
