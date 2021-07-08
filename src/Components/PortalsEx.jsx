import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalsEx() {
    return ReactDOM.createPortal(
        <div>
            <h1>Portals Data</h1>
        </div>,
        document.getElementById('portals')
    )
}
