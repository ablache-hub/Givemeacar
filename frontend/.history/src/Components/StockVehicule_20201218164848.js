import React, { useState } from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
export default function StockVehicule() {


    return (
        <>
            <div class="row row-cols-1 row-cols-md-2 text-center w-50 end-0 "
             > 
            {/* float-right */}
                {/* CARD 1 */}
                <div class="col my-2" >
                    <div class="card h-100 ">
                        <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du véhicule</h5>
                            <p class="card-text">Infos véhicule</p>
                        </div>
                        <div className="my-1">
                            <em className="d-inline mr-2 ">Véhicule en révision</em>
                            <BootstrapSwitchButton
                                checked={false}
                                onlabel='On'
                                offlabel='Off'
                                size="sm"
                                onstyle="info"
                                offstyle="danger"
                            />
                        </div>
                        <div className="my-1">
                            <em className="d-inline mr-2 ">Changer la localisation</em>
                            <BootstrapSwitchButton
                                checked={false}
                                onlabel='On'
                                offlabel='Off'
                                size="sm"
                                onstyle="info"
                                offstyle="danger"
                            />
                        </div>
                        <div class="card-footer">
                            <button className="btn btn-block btn-danger ">Supprimer vehicule</button>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                {/*/////// */}
                {/* CARD 2 */}
                <div class="col my-2">
                    <div class="card h-100">
                        <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du véhicule</h5>
                            <p class="card-text">Infos véhicule</p>
                        </div>
                        <div class="card-footer">
                            <button className="btn btn-block btn-danger ">Supprimer vehicule</button>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                {/*/////// */}
                {/* CARD 3 */}
                <div class="col my-2">
                    <div class="card h-100">
                        <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du véhicule</h5>
                            <p class="card-text">Infos véhicule</p>
                        </div>
                        <div class="card-footer">
                            <button className="btn btn-block btn-danger ">Supprimer vehicule</button>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                {/*/////// */}
                {/* CARD 4 */}
                <div class="col my-2">
                    <div class="card h-100">
                        <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du véhicule</h5>
                            <p class="card-text">Infos véhicule</p>
                        </div>
                        <div class="card-footer">
                            <button className="btn btn-block btn-danger" >Supprimer vehicule</button>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
