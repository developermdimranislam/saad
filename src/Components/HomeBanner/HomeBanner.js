import React from 'react'
import Counter from './Counter/Counter'
import './HomeBanner.css'
import Search from './Search/Search'

export default function HomeBanner() {


    return (
        <main className="home-banner">
            <div className="container">
                <Search />
                <Counter />
            </div>
        </main>
    )
}
