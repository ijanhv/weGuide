import React, {useState} from 'react';

const SignUp = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    
    async function registerUser(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const data = await response.json()
        console.log(data)
    }

  return (
    <div class="bg-gradient-to-b from-blue-900 to-blue-500 min-h-screen grid grid-cols-2">
                <div className="justify-center">
                    <img className="object-center p-10" src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Photo.png" alt="pic" />
                </div>
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                        <form onSubmit={registerUser}>
                        <h1 className="mb-8 text-4xl font-semibold text-center">Sign up</h1>
                        <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input 
                            value={email}
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-blue-900 text-white hover:bg-blue-600 focus:outline-none my-1">Create Account
                            </button>
                            </form>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and  
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                 Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-gray-300 mt-6">
                        Already have an account? 
                        <a className="no-underline border-b border-blue text-blue font-semibold" href="../login/">
                            Log in
                        </a>.
                    </div>
                </div>
                
            </div>
  )
}

export default SignUp