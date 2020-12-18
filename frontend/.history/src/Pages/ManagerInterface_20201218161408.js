import React from 'react'
import StockVehicule from '../Components/StockVehicule';

export default function ManagerInterface() {
    return (
        <>
            <div className="container rounded mt-5 float-right mx-auto" 
            style={{background: '#FA7E15' w}}>
            <StockVehicule />
                
                <label class="switch">
                    <input type="checkbox"/>
                        <span class="slider"></span>
                </label>
            </div>
            </>
    )
}
