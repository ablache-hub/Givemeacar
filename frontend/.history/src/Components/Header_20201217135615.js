import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="/Logo/logo_black_orange.png" alt="" width="3%" class="d-inline-block align-top"></img>
                        <span>GIVEMEACAR</span>
                    </a>
                    <button class="btn my-2 my-sm-0 float-right {background-color: #8064A2 !important}" type="submit" >Log-Out</button>
                </div>
            </nav>
        </div>
    )
}
