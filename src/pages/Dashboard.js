import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyModal from "../components/Modals";
import Image from './../assets/image.jfif'

const Dashboard = () => {

    const [user, setUser] = useState('')
    const navigate = useNavigate()

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
        .then(response =>{
            localStorage.clear();
            navigate('/')
        })
    }

    const handleStart = (e) => {
        e.preventDefault()
        navigate('/quiz')
    }

    const handleWithGoogle = (e) => {
        e.preventDefault()
        navigate('/')
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    return(
        <div>
            <div>
                <MyModal 
                title = 'Login Succesfull'
                body = {`Hallo ${user? user.displayName : 'Guest'}, work correctly both with client-side routing and a non-root public URL. Learn how to configure a non-root public URL by running`}
                button = 'Go it!'
                />
            </div>
            <div>
                <div className="flex justify-between py-2 primary md:px-10 px-3 ">
                    <div className="flex justify-center items-center">
                        <p className="text-xs md:text-base font-semibold text-slate-100">{user ? user.displayName : 'Guest'}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={user ? user.photoURL : Image} alt='' className='rounded-full w-10'/>
                        <button className="text-xs md:text-base font-semibold" onClick={handleSignOut}>{user? 'Log Out' : undefined}</button>
                    </div>
                </div>
            </div>
            <div className="mx-4 text-center md:mx-44">
                <h1 className="mt-20 text-xl font-semibold">{`Hallo ${user ? user.displayName : 'Guest'} start your quiz ? `}</h1>
                <p className="mt-5">work correctly both with client-side routing and a non-root public URL. Learn how to configure a non-root public URL by running <br /> Prepare high-quality, interactive content in as little as two minutes. Customizable content library 30M+’ needs</p>
                <div className="grid md:mx-36 gap-5 mt-10">
                    <button onClick={handleStart} className="primary primary-hover p-2 px-8 rounded-lg text-slate-100 font-semibold">Get Start</button>
                    {
                        user ? undefined : <button onClick={handleWithGoogle} className="bg-slate-300 hover:bg-slate-400 p-2 px-8 rounded-lg font-semibold">Login with google account</button>
                    }

                    
                </div>

            </div>
        </div>
    );
}

export default Dashboard;