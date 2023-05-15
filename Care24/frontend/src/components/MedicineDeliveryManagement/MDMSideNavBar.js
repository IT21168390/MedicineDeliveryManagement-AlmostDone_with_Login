import React, { Component } from 'react'

export default class NavBar2 extends Component {

render() {

    return (
        
                <div className='dashboard'>
                    <div className="dashboard-nav">
                        <header><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a><a href="#"
                            className="brand-logo">
                                <img src="/images/Care24_Logo-bgRemoved.png" style={{ maxWidth: '125px', align: 'center' }}/> </a></header>
                        <nav className="dashboard-nav-list"><a href="http://localhost:3000/" className="dashboard-nav-item"><i className="fas fa-home"></i>
                            Home </a><a
                                href="#" className="dashboard-nav-item active"><i className="fas fa-tachometer-alt"></i> Dashboard
                            </a>
                            <a href="#" className="dashboard-nav-item"><i className="fas fa-cogs"></i> Settings </a><a
                                href="#" className="dashboard-nav-item"><i className="fas fa-user"></i> Profile </a>
                            <div className="nav-item-divider"></div>
                            <a
                                href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
                        </nav>
                    </div>
                    
                        <header className='dashboard-toolbar'><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a></header>
                        
                    
                </div>

    )
}}
