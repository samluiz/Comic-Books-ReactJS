import React from 'react'
import Comics from '../Comics'
import Pagination from '../Pagination'

interface IProps {
    itemsPerPage: number
    totalItems: number
}

const Main: React.FC<IProps> = ({ itemsPerPage, totalItems }) => {
    return (
        <>
            <main className=" ">
                <Comics />
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={totalItems}
                />
            </main>
        </>
    )
}

export default Main
