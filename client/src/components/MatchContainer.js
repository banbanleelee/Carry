import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MatchCard from './MatchCard.js'

const MatchContainer = (props) => {
    // console.log(props.summonerPuuid);
    const [summonerMatchState, setSummonerMatchState] = useState(null);
    const summonerPuuid = props.summonerPuuid

    const key = process.env.REACT_APP_API_KEY;
    
    useEffect(() => {
        async function fetchData() {
            var instance = axios.create();
            instance.defaults.headers.common = {};
        
            const res = await instance.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerPuuid}/ids?start=0&count=5&api_key=${key}`)
            await setSummonerMatchState([]);
            await setSummonerMatchState(summonerMatchState => [...summonerMatchState, res.data]);
            // console.log(res.data);
            }
        fetchData();
    },[summonerPuuid]);

    // console.log(summonerMatchState);
    
    if (!summonerMatchState) {
        return <p>Loading...</p>;
    } else {
        return (
            <div>
                {summonerMatchState ? ( 
                    <div>
                        {summonerMatchState[0].map((item) => <MatchCard matchId={item} puuid={summonerPuuid}/>)}
                    </div>
                ) : (
                    <div>
                        <p>No Match History Found!</p>
                    </div>
                )}
            </div>
        )
    }


    
}

export default MatchContainer