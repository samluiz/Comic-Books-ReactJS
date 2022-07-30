import React from 'react'
import Logo from '/img/Logo.png'
import Saurs from '/public/img/Black Logo.svg'

const Header: React.FC = () => {
    return (
        <>
            <header className=" top-0 h-20 grid grid-flow-row place-items-center bg-black shadow-md fixed w-screen z-10">
                <div className=" ">
                    <a
                        href="https://github.com/saurs"
                        target="_blank"
                        className=" top-0 left-20 absolute"
                    >
                        <img
                            src={Saurs}
                            alt=""
                            className=" sm:block hidden invert w-20"
                        />
                    </a>
                </div>
                <a href="">
                    <img src={Logo} alt="Marvel" className=" w-32 h-12" />
                </a>
            </header>
        </>
    )
}

export default Header
