import React, {useState} from 'react'
import Toggle from 'react-bootstrap-toggle'

export default function StockVehicule() {

    const [toggle, setToggle] = useState(false)
    
    const active = () =>{
        setToggle = !toggle
        return(
            toggle
            ) 
            
    }
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-2 g-4 m-auto w-50 text-center ">
                {/* CARD 1 */}
                <div class="col my-2">
                    <div class="card h-100">
                        <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du véhicule</h5>
                            <p class="card-text">Infos véhicule</p>
                        </div>
                        <div className="flex ">
                            <Toggle
                                on={<h2>ON</h2>}
                                off={<h2>OFF</h2>}
                                size="xs"
                                onClick={active}
                                offstyle="danger"
                                active="no" 
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
        </div>
    )
}
