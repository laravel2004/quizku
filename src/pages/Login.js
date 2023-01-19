import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Auth } from "firebase/auth";

const Login = () => {

    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem('user', JSON.stringify(result.user))
            navigate("/dashboard")
        })
    }

    return(
        <div className="mx-5 md:mx-44">
            <div className="text-center mx-4">
                <div className=" md:flex md:gap-1 md:justify-center mt-20 ">
                    <h3 className="text-5xl md:text-7xl font-bold text-slate-700">It matters</h3>
                    <h1 className="text-4xl md:text-7xl font-bold text-red-500"> How you quizz</h1>
                </div>
                <p className="mt-6 text-slate-800 text-center text-lg">Assessment, instruction, and practice that motivate every student to mastery. Prepare high-quality, interactive content in as little as two minutes. </p>
            </div>
            <div className="grid md:grid-cols-2 mx-5 mt-10 gap-4 md:mx-64">
                <Link to={'/dashboard'} className="text-center bg-slate-100 p-3 rounded-lg shadow-md hover:bg-slate-200 font-semibold ">Guest account </Link>
                <button onClick={handleGoogleLogin} type='button' className="primary p-3 rounded-lg shadow-md primary-hover font-semibold text-slate-100">Sign up </button>
            </div>
            <div className="mt-16">
                <h3 className="text-5xl md:text-7xl text-center font-semibold">Quickly find or create anything in your curriculum</h3>
                
                
                
            </div>
        </div>
    );
}

export default Login;