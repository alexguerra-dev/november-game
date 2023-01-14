import { useState } from 'react'
import Head from 'next/head'

import Die from '../components/Die'

export default function Home() {
    const [hidden, setHidden] = useState(true)
    const [gameActive, setGameActive] = useState(false)
    const [dice, setDice] = useState([
        { id: 1, value: 1, active: true, kept: false },
        { id: 2, value: 2, active: true, kept: false },
        { id: 3, value: 3 },
        { id: 4, value: 1 },
        { id: 5, value: 1 },
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
            return {
                ...die,
                value: rollDie(),
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
                        <div className="container">
                            <button
                                className="bg-black text-white m-4 p-4"
                                onClick={rollButtonHandler}
                            >
                                Start
                            </button>
                        </div>

                        <div className=" bg-green-700 grid grid-cols-3 gap-4 border-black border-4 rounded p-8 container mx-auto">
                            {dice.map((die) => {
                                return (
                                    <div key={die.id}>
                                        <Die
                                            value={die.value}
                                            active={die.active}
                                            keepButtonHandler={() => {
                                                console.log(
                                                    'The id is... ',
                                                    die.id,
                                                )
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
                        <button className="bg-yellow-400 rounded">
                            Roll Again
                        </button>
                    </>
                ) : (
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="bg-emerald-400 flex flex-col rounded">
                            <p className="bg-red-700 mt-3">
                                The game is not active
                            </p>
                            <p>You could make a button to start the game.</p>
                            <button
                                className="bg-fuchsia-600 p-5 rounded-lg shadow-lg text-2xl mt-8 m-2 active:bg-fuchsia-800"
                                onClick={startButtonHandler}
                            >
                                Roll And Start The Game
                            </button>
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
