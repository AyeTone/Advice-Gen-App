import { React, useState, useEffect } from 'react'
import Icon from '../images/icon-dice.svg'
import Divider from './Divider/Divder';

const Card = () => {
    const [advice, setAdvice] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random() * 1000));


    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then(data => setAdvice(data.slip.advice))
    }, [number]);

    function newQuote() {
        setNumber(Math.floor(Math.random() * 1000))
    }

    return (
        <div className='bg-grayishBlue drop-shadow-2xl p-12 flex gap-5 flex-col 
                        text-center items-center rounded-md relative w-11/12 
                        mb-[13rem] mt-5 min-h-[50%] lg:w-3/5'>
            <p className='text-sm uppercase tracking-[3px] text-neonGreen'>
                advice #{number}
            </p>
            <p className=' text-4xl flex-1 mt-4 font-bold  '>
                "{advice}"
            </p>
            <p className=' italic text-xs '> pssst.. wait for the spin before you click </p>
            <div className=' flex w-full items-center'>
                <hr className=' w-full'/>
                <span className=' text-xl px-2 '><Divider /></span>
                <hr />
            </div>
            <button onClick={newQuote} className='
            bg-neonGreen transition-all duration-500  hover:shadow-neonGreen 
            p-5 shadow-allsides absolute -bottom-8 rounded-full hover:animate-spin-slow'>
                <img src={Icon} alt="" />
            </button>
        </div>
    )
}

export default Card