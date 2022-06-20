import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import {IoRocketOutline} from 'react-icons/io5'

const Header = () => {
    const [formState, setFormState] = useState({
        summonerName: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        window.location.assign(`/summoner/${formState.summonerName}`);
    };

    console.log('formstate', formState.summonerName);

    return (
        <div>
            <section className="hero is-warning is-medium">
                <div className="hero-head">
                    <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                        <Link to="/carry" className="navbar-item">
                            <img src={logo} alt="Logo" style={{width:"300px", minHeight:"150px"}}></img>
                        </Link>
                        <span className="navbar-burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                        <div className="navbar-end">
                            <Link to="/carry" className="navbar-item"> <span className='is-size-4'> <b>HOME</b> </span> </Link>
                            <span className="navbar-item">
                            <form onSubmit={handleFormSubmit}>
                                <div className="field has-addons">
                                    <div className="control">
                                        <input
                                            type="text"
                                            placeholder="Search a summoner!"
                                            autoComplete="on"
                                            name="summonerName"
                                            value={formState.summonerName}
                                            onChange={handleChange}
                                            className="input is-medium is-rounded"
                                        >
                                        </input>
                                    </div>
                                    <div className="control">
                                        <button className='button is-medium is-rounded' type='submit'>
                                            <span className="icon is-left">
                                                <IoRocketOutline />
                                            </span> 
                                        </button>
                                    </div>
                                </div>
                            </form>
                            </span>
                        </div>
                        </div>
                    </div>
                    </nav>
                </div>

                <div className="hero-body">
                    <div className="container has-text-centered">
                    {/* <p className="title">
                        Title
                    </p>
                    <p className="subtitle">
                        Subtitle
                    </p> */}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Header