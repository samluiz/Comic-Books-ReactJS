import React from 'react'
import Comics from '../Comics'

interface IProps {}

const Main: React.FC<IProps> = ({}) => {
    return (
        <>
            <main className=" grid place-items-center ">
                <div className=" max-w-[90rem] grid place-items-center">
                    <Comics />
                </div>
            </main>
        </>
    )
}

export default Main
