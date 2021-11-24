import React from 'react';
import logo from '../assets/images/logo.svg';
import Header from "../components/header";

export default function Home() {
    return(
        <>
            <Header />
            <div className='home-container'>
                <h1>Homepage</h1>
                <img src={logo} alt="React logo"/>
            </div>
        </>
    );
}