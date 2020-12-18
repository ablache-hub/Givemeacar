import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid align-items">
                    <a class="navbar-brand" href="/">
                        <img src="/Logo/logo_black_orange.png" alt="" width="3%" class="d-inline-block align-top"></img>
                        <span>GIVEMEACAR</span>
                    </a>
                </div>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </nav>
        </div>
    )
}
