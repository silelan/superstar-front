import React from 'react'

export const Header = () => {
    return (
        <div className="nk-header nk-header-fixed is-light">
            <div className="container-fluid">
                <div className="nk-header-wrap">
                    <div className="nk-menu-trigger d-xl-none ms-n1">
                        <a href="/" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em
                            className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-header-brand d-xl-none">
                        <a href="/" className="logo-link">
                            <img className="logo-light logo-img" src="./images/logo.png"
                                srcSet="./images/logo2x.png 2x" alt="logo" />
                            <img className="logo-dark logo-img" src="./images/logo-dark.png"
                                srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                        </a>
                    </div>
                    <div className="nk-header-news d-none d-xl-block">
                        <div className="nk-news-list">
                            <a className="nk-news-item" href="/">
                                <div className="nk-news-icon">
                                    <em className="icon ni ni-card-view"></em>
                                </div>
                                <div className="nk-news-text">
                                    <p>This is an amazing website</p>
                                    <em className="icon ni ni-external"></em>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            <li className="dropdown language-dropdown d-none d-sm-block me-n1">


                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}