import React, { useState } from 'react'
import './HomeBanner.css'

export default function HomeBanner() {
    const [counter1, setCounter1] = useState(0)
    setInterval(() => {
    //  const    setCounter1
        console.log(counter1);
    }, 10);
    return (
        <main className="home-banner">
            <div id="inp-1" className="d-block">
                <div className="d-flex justify-content-center">

                    <input style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", border: "0" }} className="form-control w-75" type="text" placeholder="Search Medicine" />


                    <button style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }} className="btn btn-sahil">Search</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"><span id="counter-1">0</span></div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
            </div>
        </main>
    )
}
