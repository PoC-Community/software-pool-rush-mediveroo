import React from 'react';

const Register = () => {
    return (
        <div className='register'>
            <form onSubmit>
                <input type='email' name='email' placeholder='Enter your email' required onChange/>
                <input type='password' name='password' placeholder='Enter your password' required onChange/>
                <button onSubmit>Register</button>
            </form>
        </div>
    );
};

export default Register;