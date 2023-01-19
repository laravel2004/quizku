import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

const Quiz = (props) => {

    const navigate = useNavigate()

    const [data, setData] = useState(['']);
    const [numberQuiz, setNumberQuiz] = useState(0);
    const [value, setValue] = useState(0)
    const [loading, setLoading] = useState(true);
    const [time, setTime] = useState(15)
    let next = 0;

    const handleNextTrue = () => {
        setNumberQuiz(numberQuiz + 1)
        if(data[numberQuiz].correct_answer == 'True') {
            setValue(value + 1)
        }
        setTime(15)
        localStorage.setItem('value', JSON.stringify(value))
    }

    const handleNext = () => {
        setNumberQuiz(numberQuiz + 1)
        setTime(15)
    }

    const handleNextFalse = () => {
        setNumberQuiz(numberQuiz + 1)
        if(data[numberQuiz].correct_answer == 'False') {
            setValue(value + 1)
        }
        setTime(15)
        localStorage.setItem('value', JSON.stringify(value))
    }


    if(time === 0) {
        next += 1;
    }
    useEffect(() => {
        handleNext()
    }, [next])

    useEffect(() => {
        fetching()
    }, [])

    useEffect (() => {
        const settingTime = setInterval(() => {
            setTime(time => {
                if(time === 0) {
                    return 15
                }
                return time - 1
            })
        }, 1000)
        return () => clearInterval(settingTime)
    }, [])




    const fetching = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean')
            const set = await response.json()
            setData(set.results)
            setLoading(false)
        }
        catch(e) {
            console.log(e)
            setLoading(false)
        }
    }

    

    return(

        <div>
            {loading ? <div className="mt-60 text-center">Loading . . . </div> :
             <div className=" mt-14">
                <div className="flex primary justify-center text-center mx-10 md:mx-44 p-3 rounded-lg font-semibold text-slate-50">
                    <h2 className="text-center">{time} detik tersisa.</h2>
                </div>
                {data[numberQuiz] ? (
                    <Jumbotron
                        category = {data[numberQuiz].category}
                        question = {data[numberQuiz].question}
                        correct = {data[numberQuiz].correct_answer}
                        buttonTrue = {handleNextTrue}
                        buttonFalse = {handleNextFalse}
                    />
                ) :
                    navigate('/result')
                }
            </div>}
        </div>
    )
}

export default Quiz;