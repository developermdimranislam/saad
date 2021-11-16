import React from 'react';
import { useCounter } from "@chakra-ui/counter"

import './Counter.css'

export default function Counter() {

    const counter = useCounter({
        max: 10,
        min: 0,
        step: 0.1,
      })
      console.log(counter.value);
    const first = () => {
        let counter1 = 0;
        const counter = setInterval(() => {
            counter1++;

            const counter1is = document.getElementById("id1");

            counter1is.innerHTML = counter1;
            if (counter1is.innerHTML === counter1is.getAttribute("stop")) {
                clearInterval(counter);
            }

        }, 30 / 22314);
    }
    first();





    const second = () => {
        let counter2 = 0;
        const counter = setInterval(() => {
            counter2++;

            const counter2is = document.getElementById("id2");

            counter2is.innerHTML = counter2;
            if (counter2is.innerHTML === counter2is.getAttribute("stop")) {
                clearInterval(counter);
            }

        }, 2e-9);
    }
    second();





    const third = () => {
        let counter3 = 0;
        const counter = setInterval(() => {
            counter3++;

            const counter3is = document.getElementById("id3");

            counter3is.innerHTML = counter3;
            if (counter3is.innerHTML === counter3is.getAttribute("stop")) {
                clearInterval(counter);
            }

        }, 2e-9);
    }
    third();





    const fourth = () => {
        let counter4 = 0;
        const counter = setInterval(() => {
            counter4++;

            const counter4is = document.getElementById("id4");

            counter4is.innerHTML = counter4;
            if (counter4is.innerHTML === counter4is.getAttribute("stop")) {
                clearInterval(counter);
            }

        }, 2e-9);
    }
    fourth();
    return (
        <div>
            

            <div id="sounter" className="container">
                <div className="row d-flex justify-content-center">
                    <div className="my-3 col-md-6 col-lg-3 col-sm-12"><div className="w-100 px-3 py-1 counter"><h2 className="" stop="22314" id="id1">0</h2><p>Saad</p></div></div>
                    <div className="my-3 col-md-6 col-lg-3 col-sm-12"><div className="w-100 px-3 py-1 counter"><h2 className="" stop="22314" id="id2">0</h2><p>Saad</p></div></div>
                    <div className="my-3 col-md-6 col-lg-3 col-sm-12"><div className="w-100 px-3 py-1 counter"><h2 className="" stop="22314" id="id3">0</h2><p>Saad</p></div></div>
                    <div className="my-3 col-md-6 col-lg-3 col-sm-12"><div className="w-100 px-3 py-1 counter"><h2 className="" stop="22314" id="id4">0</h2><p>Saad</p></div></div>
                    <div className="my-3 col-md-6 col-lg-3 col-sm-12"><div className="w-100 px-3 py-1 counter"><h2>{counter.value}</h2><p>Saad</p></div></div>
                </div>
            </div>
        </div>
    )
}
