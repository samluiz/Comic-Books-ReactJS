import React from 'react'

interface IProps {
    itemsPerPage: number
    totalItems: number
}

const Pagination: React.FC<IProps> = ({ itemsPerPage, totalItems }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className="z-[200] p-6">
            <ul className="inline-flex -space-x-px">
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a
                            href="#!"
                            className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            {number}
                        </a>
                        <button>----</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
