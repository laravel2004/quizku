import React, { useState } from "react";

const Jumbotron = (props) => {


    return(
        <div className="m-5 md:mx-44">
            <div className="bg-slate-100 p-5 mt-9 rounded-xl">
                <div className="text-center">
                    <h4 className="font-semibold text-lg">{`Category : ${props.category}`}</h4>
                </div>
                <div className="mt-5">
                    <p className="font-semibold">Question :</p>
                    <p className="mt-5 text-center">{props.question}</p>
                </div>
                <div className="grid gap-4 mt-10 md:mx-24 md:pb-7">
                    <button onClick={props.buttonTrue} className="p-3 primary text-slate-50 font-semibold rounded-md primary-hover">True</button>
                    <button onClick={props.buttonFalse} className="p-3 bg-slate-500 text-slate-50 font-semibold rounded-md hover:bg-slate-400">False</button>
                </div>
            </div>
        </div>
    );
}
export default Jumbotron