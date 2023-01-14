import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Die from '../components/Die'

export default function Home() {
    const [hidden, setHidden] = useState(true)
    const [gameActive, setGameActive] = useState(false)
    const [game, setGame] = useState({ players: 'Alex' })
    const [turn, setTurn] = useState([])
    const [dice, setDice] = useState([
        { id: 1, value: 0, active: true, scoring: false },
        { id: 2, value: 0, active: true, scoring: false },
        { id: 3, value: 0, active: true, scoring: false },
        { id: 4, value: 0, active: true, scoring: false },
        { id: 5, value: 0, active: true, scoring: false },
    ])

    const rollDie = () => {
        return Math.floor(1 + Math.random() * 6)
    }

    const scoreSet = (set) => {
        return 0
    }

    const startButtonHandler = () => {
        setGameActive(true)
    }

    const passButtonHandler = () => {
        setGameActive(false)
    }

    const rollButtonHandler = () => {
        const newDice = dice.map((die) => {
            const newRoll = rollDie()

            if (die.active) {
                return {
                    ...die,
                    value: newRoll,
                }
            } else {
                return { ...die }
            }

            if (newRoll === 1) {
                return {
                    ...die,
                    value: newRoll,
                    scoring: true,
                }
            }

            return {
                ...die,
                value: newRoll,
                scoring: false,
            }
        })

        setDice(newDice)
    }

    const keepButtonHandler = (dieId) => {
        const newDice = dice.map((die) => {
            if (die.id === dieId) {
                return {
                    ...die,
                    active: !die.active,
                }
            }
            return {
                ...die,
            }
        })
        setDice(newDice)
    }

    return (
        <>
            <Head>
                <title>November Game</title>
                <meta name="description" content="Let's Roll" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
                {gameActive ? (
                    <>
                        <div className=" bg-transparent grid grid-cols-3 gap-4 border-black border-4 rounded p-8 container mx-auto">
                            {dice.map((die) => {
                                return (
                                    <div key={die.id}>
                                        <Die
                                            value={die.value}
                                            active={die.active}
                                            scoring={die.scoring}
                                            keepButtonHandler={() => {
                                                keepButtonHandler(die.id)
                                            }}
                                        ></Die>
                                    </div>
                                )
                            })}
                        </div>

                        <button
                            className="bg-indigo-600 rounded m-8 p-2"
                            onClick={passButtonHandler}
                        >
                            Pass And Keep your Points
                        </button>
                        <button
                            className="bg-yellow-400 rounded"
                            onClick={rollButtonHandler}
                        >
                            Roll Again
                        </button>
                    </>
                ) : (
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="bg-emerald-400 flex flex-col rounded">
                            <p className="bg-red-700 mt-3">
                                The game is not active
                            </p>
                            <button
                                className="bg-fuchsia-600 p-5 rounded-lg shadow-lg text-2xl mt-8 m-2 active:bg-fuchsia-800"
                                onClick={startButtonHandler}
                            >
                                Roll And Start The Game
                            </button>

                            <button className="btn">Learn To Play</button>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal" className="btn">
                                open modal
                            </label>

                            {/* Put this part before </body> tag */}
                            <input
                                type="checkbox"
                                id="my-modal"
                                className="modal-toggle"
                            />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">
                                        Congratulations random Internet user!
                                    </h3>
                                    <p className="py-4">
                                        been selected for a chance to get one
                                        year of subscription to use Wikipedia
                                        for free!
                                    </p>
                                    <div className="modal-action">
                                        <label
                                            htmlFor="my-modal"
                                            className="btn"
                                        >
                                            Yay!
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* {dice
                    .filter((die) => die.active)
                    .map((die) => {
                        return <Die key={die.id} value={die.value}></Die>
                    })}

                {dice
                    .filter((die) => !die.active)
                    .map((die) => {
                        return <Die key={die.id} value={die.value}></Die>
                    })} */}
            </main>
        </>
    )
}
