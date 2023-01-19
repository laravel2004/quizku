import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const [user, setUser] = useState('')

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
        .then(response =>{
            localStorage.clear();
            navigate('/')
        })
    }

    const handleClear = () => {
        localStorage.clear();
        navigate('/quiz')
    }

    useEffect(() => {
        setValue(JSON.parse(localStorage.getItem('value')))
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    return(
        <div className="md:mx-44 mx-5">
            <div className="text-center mt-10">
                <h3 className="text-3xl font-semibold">Congratulations {user ? user.displayName : 'Guest'}</h3>
                <p className="mt-3 font-medium">You was finished your quiz</p>
            </div>
            <div className="mt-14 text-center">
                <h5 className="text-2xl font-bold">Score Quiz</h5>
                <h1 className="text-xl font-semibold">{value * 10} pts</h1>
                <p className="text-lg mt-14">Thanks about your participate in this quiz</p>
            </div>
            <div className="grid gap-4 mt-10 md:mx-36">
                <button onClick={handleClear} className="p-3 primary rounded-lg font-semibold text-slate-50 ">Repeat the Quiz</button>
                <button onClick={handleSignOut} className="p-3 bg-red-500 rounded-lg font-semibold text-slate-50">Log Out</button>
            </div>
        </div>
    )
}

export default Result;