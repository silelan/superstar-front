
import React from 'react'
import {Link} from 'react-router-dom'

export const SideBar = () => {
    return (
        <div className="nk-sidebar nk-sidebar-fixed is-dark " data-content="sidebarMenu">
            <div className="nk-sidebar-element nk-sidebar-head">
                <div className="nk-menu-trigger">
                    <a href="/" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
                            <em className="icon ni ni-arrow-left"></em>
                    </a>
                        <a href="/" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                            data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-sidebar-brand">
                        <a href="/" className="logo-link nk-sidebar-logo">
                            <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x"
                                alt="logo"/>
                            <img className="logo-dark logo-img" src="./images/logo-dark.png"
                                srcSet="./images/logo-dark2x.png 2x" alt="logo-dark"/>
                        </a>
                    </div>
                </div>
                <div className="nk-sidebar-element nk-sidebar-body">
                    <div className="nk-sidebar-content">
                        <div className="nk-sidebar-menu" data-simplebar>
                            <ul className="nk-menu">
                            <li className="nk-menu-heading">
                                    <h6 className="overline-title text-primary-alt">Use-Case Preview</h6>
                                </li>
                                    <li className="nk-menu-item">
                                        <Link to="/" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-view-col"></em></span>
                                            <span className="nk-menu-text">Play with Text</span>
                                        </Link>
                                    </li>
                                    <li className="nk-menu-item">
                                        <Link to="/chat" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-img"></em></span>
                                            <span className="nk-menu-text">Chat with SuperstarBot</span>
                                        </Link>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}