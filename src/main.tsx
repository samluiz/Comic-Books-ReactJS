import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App
            showModal={function (): void {
                throw new Error('Function not implemented.')
            }}
            isModalActive={false}
            itemsPerPage={0}
            totalItems={0}
            comics={[]}
        />
    </React.StrictMode>
)

// debugging
