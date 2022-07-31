import React, { useEffect } from 'react'
import Comics from './Components/Comics'
import Header from './Components/Header'
import Main from './Components/Main'
import Slider from './Components/Slider'

const App: React.FC = ({
}) => {
    return (
        <>
            <Header />
            <Slider />
            <Main />
        </>
    )
}

export default App
