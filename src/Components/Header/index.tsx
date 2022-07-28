import React from 'react'
import Logo from '/img/Logo.png'

const Header: React.FC = () => {
    return (
        <>
            <header className=" top-0 h-20 grid place-items-center bg-black shadow-md fixed w-screen z-10">
                <a href="">
                    <img src={Logo} alt="Marvel" className=" w-32 h-12" />
                </a>
            </header>
        </>
    )
}

export default Header
