import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    Emblem_Iron, 
    Emblem_Bronze, 
    Emblem_Silver, 
    Emblem_Gold, 
    Emblem_Platinum, 
    Emblem_Diamond, 
    Emblem_Master,
    Emblem_Grandmaster,
    Emblem_Challenger,
    Emblem_Unranked_Solo,
    Emblem_Unranked_Flex
} from '../images/rankedEmblems';

import checkRankEmblem from '../utils/checkRankEmblem';

const SummonerRankCard = (props) => {
    const [summonerRankState, setSummonerRankState] = useState(null);
    const [soloState, setSoloState] = useState(null);
    const [flexState, setFlexState] = useState(null);

    const key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        async function fetchData() {
            var instance = axios.create();
            instance.defaults.headers.common = {};
        
            const res = await instance.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${props.summonerId}?api_key=${key}`)
            await setSummonerRankState([]);
            await setSummonerRankState(summonerRankState => [...summonerRankState, res.data]);
            // console.log(res.data);
            await setSoloState(res.data.filter((el) => {return el.queueType === 'RANKED_SOLO_5x5'}));
            await setFlexState(res.data.filter((el) => {return el.queueType === 'RANKED_FLEX_SR'}));
            }
        fetchData();
    },[props.summonerId]);

    console.log(soloState);
    if (!summonerRankState || !soloState || !flexState) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className="box has-background-light" style={{height:"180px"}}>
                <div className='columns'>
                    
                    <div className='column is-3'>
                        {   soloState.length === 0 ? (
                                <img src={Emblem_Unranked_Solo} alt="unranked" style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Iron' ? (
                            <img src={Emblem_Iron} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Bronze' ? (
                                <img src={Emblem_Bronze} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Silver' ? (
                                <img src={Emblem_Silver} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Gold' ? (
                            <img src={Emblem_Gold} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Platinum' ? (
                                <img src={Emblem_Platinum} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Diamond' ? (
                                <img src={Emblem_Diamond} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Master' ? (
                                <img src={Emblem_Master} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Grandmaster' ? (
                                <img src={Emblem_Grandmaster} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : soloState.length !== 0 && checkRankEmblem(soloState[0].tier) === 'Emblem_Challenger' ? (
                                <img src={Emblem_Challenger} alt={soloState[0].tier} style={{height:"128px"}}></img>
                            ) : ( 
                                <></>
                            )} 
                    </div>


                    <div className='column is-3'>
                        <p className='is-size-5'><b>Ranked Solo</b></p>
                        {soloState && soloState.length>0 ? (
                            <div>
                                <p>{soloState[0].tier} {soloState[0].rank} {soloState[0].leaguePoints} LP</p>
                                <p>{soloState[0].wins} wins, {soloState[0].losses} losses</p>
                                <br></br>
                                {soloState[0].hotStreak ? <span className='tag is-warning is-medium'><b>HOTSTREAK!</b></span> : <div></div>} 
                                {soloState[0].veteran ? <span className='tag is-warning is-medium'><b>VETERAN!</b></span> : <div></div>} 
                                {soloState[0].freshBlood ? <span className='tag is-warning is-medium'><b>FRESHBLOOD!</b></span> : <div></div>}
                            </div>
                        ) : (
                            <div>
                                <br></br>
                                <p> Unranked </p>
                            </div>
                            )
                        }
                    </div>

                    <div className='column is-3'>
                        {   flexState.length === 0 ? (
                                <img src={Emblem_Unranked_Flex} alt="unranked" style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Iron' ? (
                            <img src={Emblem_Iron} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Bronze' ? (
                                <img src={Emblem_Bronze} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Silver' ? (
                                <img src={Emblem_Silver} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Gold' ? (
                            <img src={Emblem_Gold} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Platinum' ? (
                                <img src={Emblem_Platinum} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Diamond' ? (
                                <img src={Emblem_Diamond} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Master' ? (
                                <img src={Emblem_Master} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Grandmaster' ? (
                                <img src={Emblem_Grandmaster} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : flexState.length !== 0 && checkRankEmblem(flexState[0].tier) === 'Emblem_Challenger' ? (
                                <img src={Emblem_Challenger} alt={flexState[0].tier} style={{height:"128px"}}></img>
                            ) : ( 
                                <></>
                            )}
                    </div>
                    
                    <div className='column is-3'>
                        <p className='is-size-5'><b>Ranked Flex</b></p>
                        {flexState && flexState.length>0 ? (
                            <div>
                                <p>{flexState[0].tier} {flexState[0].rank} {flexState[0].leaguePoints} LP</p>
                                <p>{flexState[0].wins} wins, {flexState[0].losses} losses</p>
                                <br></br>
                                {flexState[0].hotStreak ? <span className='tag is-warning is-medium'><b>HOTSTREAK!</b></span> : <div></div>} 
                                {flexState[0].veteran ? <span className='tag is-warning is-medium'><b>VETERAN!</b></span> : <div></div>} 
                                {flexState[0].freshBlood ? <span className='tag is-warning is-medium'><b>FRESHBLOOD!</b></span> : <div></div>}
                                </div>
                            ) : (
                                <div>
                                    <br></br>
                                    <p> Unranked </p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }


    
}

export default SummonerRankCard