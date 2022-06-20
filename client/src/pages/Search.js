import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import {IoRocketOutline} from 'react-icons/io5'
// import axios from 'axios';
// https://fast-citadel-27448.herokuapp.com/


// const proxy = 'http://localhost:3001/' ;

const Search = () => {
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

        window.location.assign(`/carry/${formState.summonerName}`);
    };

    // console.log('formstate', formState.summonerName);
    // console.log('summonerState', summonerState);

    
    return (
        <div className='section is-align-items-center'>
            <section className="hero is-warning is-fullheight">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src={logo} alt="Logo" style={{width:"300px", minHeight:"150px"}}></img>
                            </a>
                        </div>
                    </nav>
                </div>


                <div className="hero-body is-justify-content-center">
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
                                    className="input is-large is-rounded"
                                >
                                </input>
                            </div>
                            <div className="control">
                                <button className='button is-large is-rounded' type='submit'>
                                    <span className="icon is-small is-left">
                                        <IoRocketOutline />
                                    </span> 
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


                <div className="hero-foot">
                    <nav className="tabs is-boxed is-fullwidth">
                    <div className="container">
                        <ul>
                        <li>
                            <a href="https://github.com/banbanleelee" target="blank">GitHub</a>
                        </li>
                        <li>
                            <a href="https://github.com/banbanleelee/leagueOfLegendsData" target="blank">Repository</a>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </section>

            
        </div>
    )
}


export default Search;