import React from 'react'

export default function Die({ value, active, scoring, keepButtonHandler }) {
    const Grid = ({ numberOfPips }) => {
        switch (numberOfPips) {
            case 0:
                return (
                    <div className="grid grid-cols-3 grid-rows-3">
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                    </div>
                )
                break
            case 1:
                return (
                    <div className="grid grid-cols-3 grid-rows-3">
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                    </div>
                )
                break

            case 2:
                return (
                    <div className="grid grid-cols-3 grid-rows-3">
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                    </div>
                )
                break

            case 3:
                return (
                    <div className="grid grid-cols-3 grid-rows-3">
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-bltransparentack rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                    </div>
                )
                break

            case 4:
                return (
                    <div className="grid grid-cols-3 grid-rows-3">
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-bltransparentack rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                    </div>
                )
                break

            case 5:
                return (
                    <div className="grid grid-cols-3 grid-rows-3 w-fit">
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                    </div>
                )
                break

            case 6:
                return (
                    <div className="grid grid-cols-3 grid-rows-3">
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                        <div className="w-12 h-12 bg-transparent rounded-full"></div>
                        <div className="w-12 h-12 bg-black rounded-full"></div>
                    </div>
                )
                break

            default:
                break
        }
    }
    const ActiveFace = ({ value, scoring }) => {
        if (scoring) {
            return (
                <div className=" bg-white border-black border-8 mx-auto rounded">
                    <Grid numberOfPips={value}></Grid>
                </div>
            )
        } else {
            return (
                <div className=" bg-white border-black border-8 mx-auto rounded">
                    <Grid numberOfPips={value}></Grid>
                </div>
            )
        }
    }

    const InactiveFace = ({ value }) => {
        return (
            <div className=" bg-gray-500 border-black border-8 mx-auto  rounded">
                <Grid numberOfPips={value}></Grid>
            </div>
        )
    }

    return (
        <div
            className="bg-transparent text-center flex flex-col justify-center "
            onClick={keepButtonHandler}
        >
            {/* <div className="w-20 h-20 bg-slate-600 mx-auto">
                <p className="text-2xl">{value}</p>
            </div> */}

            {/* <ActiveFace value={value}></ActiveFace> */}

            {active ? (
                <ActiveFace value={value} scoring={scoring}></ActiveFace>
            ) : (
                <InactiveFace value={value}></InactiveFace>
            )}
        </div>
    )
}
