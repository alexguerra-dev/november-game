import Head from 'next/head'

import Die from '../components/Die'

export default function Home() {
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
                    <button className="bg-black text-white m-4 p-4">
                        Start
                    </button>
                </div>

                <div className="w-2/3 bg-green-700 grid grid-cols-3 gap-4 border-black border-4 rounded p-8 container mx-auto">
                    <Die></Die>
                    <Die></Die>
                    <Die></Die>
                    <Die></Die>
                    <Die></Die>
                </div>
            </main>
        </>
    )
}
