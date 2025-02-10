import { useState } from 'react'
import showDownLogo from '/showdown_logo.webp'
import './App.css'

function App() {
    const defaultPot = 10;
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [potScore, setPotScore] = useState(defaultPot);
    const [show_21_modal, setShow_21_modal] = useState(false);
    const [show_6_modal, setShow_6_modal] = useState(false);

    return (
        <>
            {show_21_modal &&
                <div className="fixed z-50 h-screen w-screen text-black">
                    <div className='mt-52 bg-[#e5e5e3] border-4 border-[#bc1003] rounded-md w-fit mx-auto py-10 px-20'>
                        <p className="border-black text-center my-auto text-lg font-bold">Tvoje číslo je:</p>
                        <p className="border-black text-center text-5xl my-6 font-bold">{Math.ceil(Math.floor(Math.random() * 21))}</p>
                        <div className="flex w-full justify-center text-white text-xl">
                            <button className="border-2 border-black rounded-full flex px-8 py-2" onClick={() => setShow_21_modal(false)}>
                                <span className="my-auto text-black font-bold">Zavřít</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
            {show_6_modal &&
                <div className="fixed z-50 h-screen w-screen text-black">
                    <div className='mt-52 bg-[#e5e5e3] border-4 border-[#bc1003] rounded-md w-fit mx-auto py-10 px-20'>
                        <p className="border-black text-center my-auto text-lg font-bold">Tvoje číslo je:</p>
                        <p className="border-black text-center text-5xl my-6 font-bold">{Math.ceil(Math.floor(Math.random() * 6) + 1)}</p>
                        <div className="flex w-full justify-center text-white text-xl">
                            <button className="border-2 border-black rounded-full flex px-8 py-2" onClick={() => setShow_6_modal(false)}>
                                <span className="my-auto text-black font-bold">Zavřít</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
            <div className="z-0 main-content fade-in flex-col items-center max-w-[35rem] mx-auto">
                <div className='pt-2 w-56 my-1 mx-auto'>
                    <img src={showDownLogo} alt="logo" />
                </div>

                {/* Top row */}
                <div className="section relative">
                    <div className="controls ">
                        <button className="btn" onClick={() => setPlayer1Score(player1Score + 1)}>+1</button>
                        <button className="btn" onClick={() => {
                            if (player1Score < 1) setPlayer1Score(0);
                            else setPlayer1Score(player1Score - 1);
                        }}>-1</button>
                    </div>
                    <div className="score">{player1Score}</div>
                    <div className="controls">
                        <button className="btn" onClick={() => {
                            setPlayer1Score(player1Score + potScore);
                            setPotScore(defaultPot);
                        }}>Win</button>
                        <button className="btn" onClick={() => {
                            setPlayer1Score(Math.ceil(potScore / 2) + player1Score);
                            if (potScore != 1) setPotScore(Math.ceil(potScore / 2));
                        }}>1/2</button>
                    </div>
                </div>

                <svg className='mx-auto mt-2 mb-4' width="300" height="30" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="15" x2="280" y2="15" stroke="#DE1204" stroke-width="7" stroke-dasharray="50,20" strokeLinecap='round' />
                </svg>

                {/* Middle row */}
                <div className="section">
                    <div className="controls">
                        <button className="btn" onClick={() => setPotScore(potScore + 1)}>+1</button>
                        <button className="btn" onClick={() => setPotScore(potScore + 5)}>+5</button>
                        <button className="btn" onClick={() => setPotScore(potScore * 2)}>x2</button>
                    </div>
                    <div className="score">{potScore}</div>
                    <div className="controls">
                        <button className="btn" onClick={() => {
                            if (potScore < 1) setPotScore(0);
                            else setPotScore(potScore - 1);
                        }}>-1</button>
                        <button className="btn" onClick={() => {
                            if (potScore < 5) setPotScore(0);
                            else setPotScore(potScore - 5);
                        }}>-5</button>
                        <button className="btn" onClick={() => {
                            if (potScore < 10) setPotScore(0);
                            else setPotScore(potScore - 10);
                        }}>-10</button>
                    </div>
                </div>
                <svg className='mx-auto mb-2 mt-4' width="300" height="30" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20" y1="15" x2="280" y2="15" stroke="#DE1204" stroke-width="7" stroke-dasharray="50,20" strokeLinecap='round' />
                </svg>

                {/* Bottom row */}
                <div className="section">
                    <div className="controls">
                        <button className="btn" onClick={() => setPlayer2Score(player2Score + 1)}>+1</button>
                        <button className="btn" onClick={() => {
                            if (player2Score < 1) setPlayer2Score(0);
                            else setPlayer2Score(player2Score - 1);
                        }}>-1</button>
                    </div>
                    <div className="score">{player2Score}</div>
                    <div className="controls">
                        <button className="btn" onClick={() => {
                            setPlayer2Score(player2Score + potScore);
                            setPotScore(defaultPot);
                        }}>Win</button>
                        <button className="btn" onClick={() => {
                            setPlayer2Score(Math.ceil(potScore / 2) + player2Score);
                            if (potScore != 1) setPotScore(Math.ceil(potScore / 2));
                        }}>1/2</button>
                    </div>
                </div>

                {/* Footer buttons */}
                <div className="footer-buttons">
                    <button className="foot-left" onClick={() => setShow_21_modal(true)}>0-21</button>
                    <button className="foot-center" onClick={() => setPotScore(defaultPot)}>Reset pot</button>
                    <button className="foot-center" onClick={() => {
                        setPotScore(defaultPot);
                        setPlayer1Score(0);
                        setPlayer2Score(0);
                    }}>New game</button>
                    <button className="foot-right" onClick={() => setShow_6_modal(true)}>1-6</button>

                </div>
            </div>
        </>
    )
}

export default App
