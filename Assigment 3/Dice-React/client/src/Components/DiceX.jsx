import React, { useState } from 'react';
import d1 from '../assets/Dicepic/dice1.png';
import d2 from '../assets/Dicepic/dice2.png';
import d3 from '../assets/Dicepic/dice3.png';
import d4 from '../assets/Dicepic/dice4.png';
import d5 from '../assets/Dicepic/dice5.png';
import d6 from '../assets/Dicepic/dice6.png';

const dic = [null, d1, d2, d3, d4, d5, d6];

function DiceX() {
    const [var1, setVar1] = useState(1);
    const [var2, setVar2] = useState(1);
    const [res, setRes] = useState("Let's Go Play!");

    const rolldices = () => {
        const a = Math.floor(Math.random() * 6) + 1;
        const b = Math.floor(Math.random() * 6) + 1;
        setVar1(a);
        setVar2(b);
        a > b ? setRes("Player 1 Wins!") : b > a ? setRes("Player 2 Wins!") : setRes("Draw!");
    }

    return (
        
        <div 
            className='d-flex flex-column justify-content-center align-items-center' 
            style={{ minHeight: '100vh', backgroundColor: '#ffeaa7' }}
        >
            <h1 className='mb-5' style={{ color: '#c0392b', fontStyle: 'italic', fontFamily: 'serif' }}>
                🎉{res}🎉
            </h1>

            
            <div className='d-flex flex-row justify-content-center align-items-center mb-5'>
                
                
                <div className='text-center mx-4'> 
                    <p style={{ color: '#8e44ad', fontWeight: 'bold' }}>player1</p>
                    <img src={dic[var1]} height="150px" width="150px" alt="dice1" style={{ borderRadius: '10px' }} />
                </div>

                
                <div className='text-center mx-4'>
                    <p style={{ color: '#8e44ad', fontWeight: 'bold' }}>player2</p>
                    <img src={dic[var2]} height="150px" width="150px" alt="dice2" style={{ borderRadius: '10px' }} />
                </div>

            </div>

            <button className='btn btn-outline-dark btn-lg' onClick={rolldices}>
                Roll dices
            </button>
        </div>
    );
}

export default DiceX;