import React from 'react'
import StockVehicule from '../Components/StockVehicule';

export default function ManagerInterface() {
    return (
        <div>
            <div className="container bg-danger rounded">
                <StockVehicule />
                <div class="btn-group-toggle" data-toggle="buttons">
  <label class="btn btn-secondary active">
  </label>
    <input type="checkbox" checked autocomplete="off"> Checked</input>
</div>
            </div>
        </div>
    )
}
