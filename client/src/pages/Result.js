import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from 'axios';

import Header from '../components/Header.js';
import SummonerNameCard from '../components/SummonerNameCard.js';
import SummonerRankCard from '../components/SummonerRankCard.js';
import MatchContainer from '../components/MatchContainer.js'

// https://fast-citadel-27448.herokuapp.com/

// const proxy = 'http://localhost:3001/' ;

const Result = () => {
    const { summonerName: userParam } = useParams();
    // console.log(userParam);

    const [summoner, setSummoner] = useState(null);
    const key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        async function fetchData() {
            var instance = axios.create();
            instance.defaults.headers.common = {};
            
            const res = await instance.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userParam}?api_key=${key}`);
            setSummoner(res.data);

        }
        fetchData();
    },[userParam]);

    // console.log('summonersummonersummoner', summoner);

    if (!summoner) {
        return <p>This summoner doesn't exist</p>;
    } else { 
        return (
            <div>
                <Header />
                <div className='section'>
                    <div className='container'>
                        <div className='columns'>
                            <div className='column is-4 pl-0'>
                                {summoner && <SummonerNameCard summoner={summoner} />}
                            </div>
                            <div className='column is-8 pr-0'>
                                {summoner && <SummonerRankCard summonerId={summoner.id} />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section'>
                    <div className='container'>
                        <div className='columns'>
                            <div className='column is-12'>
                                {summoner && <MatchContainer summonerPuuid={summoner.puuid} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}


export default Result;