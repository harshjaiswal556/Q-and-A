import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import "./css/HomePage.css"

function HomePage() {
    return (
        <div className="quora">
            <Header />
            <div className="quora__contents">
                <div className="quora__content">
                    <Sidebar />
                    <Feed />
                    <Widget />
                </div>
            </div>
        </div>
    )
}

export default HomePage