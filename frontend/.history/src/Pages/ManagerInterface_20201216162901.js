import React from 'react'
import StockVehicule from '../Components/StockVehicule';

export default function ManagerInterface() {
    return (
        <div>
            <div className="container color-gray400 rounded">
                <StockVehicule />
                <label class="switch">
                    <input type="checkbox"/>
                        <span class="slider"></span>
                </label>
            </div>
            </div>
    )
}
