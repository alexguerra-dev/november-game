import { useState } from 'react'
import Head from 'next/head'

import Die from '../components/Die'

export default function Home() {
    const [hidden, setHidden] = useState(true)
    const [dice, setDice] = useState([
        { id: 1, value: 1, active: true, kept: false },
        { id: 2, value: 2, active: true, kept: false },
        { id: 3, value: 3 },
        { id: 4, value: 1 },
        { id: 5, value: 1 },
    ])

    const startButtonHandler = () => {
        console.log(hidden)
        setHidden(!hidden)
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
                <div className="container">
                    <button
                        className="bg-black text-white m-4 p-4"
                        onClick={startButtonHandler}
                    >
                        Start
                    </button>
                </div>

                <div className="w-2/3 bg-green-700 grid grid-cols-3 gap-4 border-black border-4 rounded p-8 container mx-auto">
                    {dice.map((die) => {
                        return (
                            <div>
                                <Die
                                    key={die.id}
                                    value={die.value}
                                    active={die.active}
                                    keepButtonHandler={() => {
                                        console.log('The id is... ', die.id)
                                    }}
                                ></Die>
                            </div>
                        )
                    })}
                </div>

                {dice
                    .filter((die) => die.active)
                    .map((die) => {
                        return <Die key={die.id} value={die.value}></Die>
                    })}

                {dice
                    .filter((die) => !die.active)
                    .map((die) => {
                        return <Die key={die.id} value={die.value}></Die>
                    })}
                {hidden ? (
                    <h1 className="transition ease-in-out delay-150 duration-300 animate-pulse hover:-scale-100 w-20 bg-red-400 text-center">
                        Hello
                    </h1>
                ) : (
                    <h1 className=" transition-opacity ease-in duration-150 active:-scale-y-125 bg-gray-500">
                        No
                    </h1>
                )}
            </main>
        </>
    )
}
