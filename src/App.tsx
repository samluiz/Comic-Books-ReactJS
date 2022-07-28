import React, { useEffect } from 'react'
import ComicDetail from './Components/ComicDetail'
import Comics from './Components/Comics'
import Header from './Components/Header'
import Main from './Components/Main'
import Pagination from './Components/Pagination'
import Slider from './Components/Slider'

interface IProps {
    showModal: () => void
    isModalActive: boolean
    itemsPerPage: number
    totalItems: number
    comics: []
}

const App: React.FC<IProps> = ({
    showModal,
    isModalActive,
    itemsPerPage,
    totalItems,
}) => {
    return (
        <>
            <ComicDetail showModal={showModal} isModalActive={isModalActive} />
            <Header />
            <Slider />
            <Main itemsPerPage={itemsPerPage} totalItems={totalItems} />
        </>
    )
}

export default App
