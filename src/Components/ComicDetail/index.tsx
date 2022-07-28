import React, { useState } from 'react'

interface IProps {
    showModal: () => void
    isModalActive: boolean
}

const ComicDetail: React.FC<IProps> = ({ showModal, isModalActive }) => {
    return (
        <>
            <div className="">
                {isModalActive ? (
                    <div className="   w-[90rem] h-[40rem] bg-white z-50">
                        <h1>EAEEAJWDJs</h1>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default ComicDetail
