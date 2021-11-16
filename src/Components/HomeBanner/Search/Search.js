import React from 'react'
import { Link } from 'react-router-dom'
import DemiMedicine from '../../../res/images/demi-medicine.png'
import './Search.css'
export default function Search() {
    return (
        <div>

            <div className="mb-5 d-grid justify-content-center">
                <div className="d-flex">
                    <input onChange={(e) => {
                        document.getElementById("sounter").classList.add("d-none");
                        document.getElementById("result").classList.remove("d-none");
                         if (e.target.value === "") {
                             document.getElementById("sounter").classList.remove("d-none");
                             document.getElementById("result").classList.add("d-none");
                        }
                    }} style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px", border: "0" }} className="form-control w" type="text" placeholder="Search Medicine" />
                    <button style={{ borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }} className="btn btn-sahil">Search</button>
                </div>

                <div id="result" className="bg-white d-none pb-3">
                    <div className="result px-2 py-2 d-flex gap align-items-center"><img src={DemiMedicine} alt="" height="20px" /><div className="d-flex"><h4>saad</h4><p style={{ fontSize: "15px" }}>(papsule)</p></div></div>
                    <div className="result px-2 py-2 d-flex gap align-items-center"><img src={DemiMedicine} alt="" height="20px" /><div className="d-flex"><h4>saad</h4><p style={{ fontSize: "15px" }}>(papsule)</p></div></div>
                    <div className="result px-2 py-2 d-flex gap align-items-center"><img src={DemiMedicine} alt="" height="20px" /><div className="d-flex"><h4>saad</h4><p style={{ fontSize: "15px" }}>(papsule)</p></div></div>
                    <div className="result px-2 py-2 d-flex gap align-items-center"><img src={DemiMedicine} alt="" height="20px" /><div className="d-flex"><h4>saad</h4><p style={{ fontSize: "15px" }}>(papsule)</p></div></div>
                    <div className="result px-2 py-2 d-flex gap align-items-center"><img src={DemiMedicine} alt="" height="20px" /><div className="d-flex"><h4>saad</h4><p style={{ fontSize: "15px" }}>(papsule)</p></div></div>

                    <div className="d-flex justify-content-center"><Link to="/"><button className="btn btn-sahil">Show More</button></Link></div>
                </div>

            </div>

        </div>
    )
}
