import React from 'react'

export default function StockVehicule() {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4 m-auto w-50">
                {/* CARD 1 */}
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du véhicule</h5>
                            <p class="card-text">Infos véhicule</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                {/*/////// */}
                {/* CARD 2 */}
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du véhicule</h5>
                            <p class="card-text">Infos véhicule</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                {/*/////// */}
                {/* CARD 3 */}
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du véhicule</h5>
                            <p class="card-text">Infos véhicule</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
