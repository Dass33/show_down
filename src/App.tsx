import { useState } from 'react'
import showDownLogo from '/showdown_logo.webp'
import './App.css'

function App() {
    const defaultPot = 10;
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [potScore, setPotScore] = useState(defaultPot);

    return (
        <>
            <div className="main-content fade-in flex-col items-center max-w-[35rem] mx-auto">
                <div className='pt-4 w-64 my-1 mx-auto'>
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
                    <button className="foot" onClick={() => setPotScore(defaultPot)}>Reset pot</button>
                    <button className="foot" onClick={() => {
                        setPotScore(defaultPot);
                        setPlayer1Score(0);
                        setPlayer2Score(0);
                    }}>New game</button>
                </div>
            </div>
        </>
    )
}

export default App
