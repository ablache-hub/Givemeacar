import React from 'react'
import ProfilManager from '../Components/ProfilManager';
import StockVehicule from '../Components/StockVehicule';

export default function ManagerInterface() {
    return (
        <>
            <div className="hello">
                <ProfilManager />
                <StockVehicule />
                </div>

                {/* <div className="container rounded my-5 float-right "
                    style={{ background: '#FA7E15' }}>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div> */}
        </>
    )
}
