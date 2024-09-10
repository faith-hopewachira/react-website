import React from "react";

function Nav(){
    return(
        <div>
            <div className="flex justify-evenly flex-row gap-15 mt-3.5 mb-6">
            <img src ="/images/logo.png" className="mb-10"></img>
                <a className="text-3xl"><b className="text-yellow-500">Home</b></a>
                <a className="text-3xl">Restaurant</a>
                <a className="text-3xl">Services</a>
                <a className="text-3xl">Cart</a>

            </div>


        </div>
    )
}

export default Nav