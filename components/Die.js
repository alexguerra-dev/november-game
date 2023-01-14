import React from 'react'

export default function Die() {
    return (
        <div className="bg-white text-center border-amber-500 border-4 flex flex-col justify-center shadow-xl">
            <div className="w-20 h-20 bg-slate-600 mx-auto">
                <p className="text-2xl">1</p>
            </div>

            <button className="border-violet-400 border-4 font-sans rounded bg-slate-800 text-yellow-200 w-20 rotate-12">
                Keep
            </button>
        </div>
    )
}
