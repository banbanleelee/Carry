import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import imagePlaceholder from '../images/imagePlaceholder.png'

import checkSummonerSpell from '../utils/checkSummonerSpell';
import computeTimeDifference from '../utils/computeTimeDifference'
import computeTimeLength from '../utils/computeTimeLength';
import checkQueueType from '../utils/checkQueueType';
import checkSummonerRune from '../utils/checkSummonerRune';
import returnColor from '../utils/returnColor';

import '../App.css'

const MatchCard = ({matchId, puuid}) => {
    // console.log(props.matchId);
    // console.log(puuid);
    // console.log(matchId);
    const [summonerMatchState, setSummonerMatchState] = useState(null);

    const key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        async function fetchData() {
            var instance = axios.create();
            instance.defaults.headers.common = {};
        
            const res = await instance.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`)
            await setSummonerMatchState([]);
            await setSummonerMatchState(summonerMatchState => [...summonerMatchState, res.data]);
            }
        fetchData();
    },[matchId]);

    if (!summonerMatchState) {
        console.log(`loading`)
        return <p>Loading...</p>;
    } else {

        // console.log(summonerMatchState);
        const summoner = summonerMatchState[0].info.participants;
        const index = summoner.findIndex(obj => obj.puuid === puuid);
        // console.log(summonerMatchState[0].info.participants[index].challenges.killParticipation);
        if (!summonerMatchState[0].info.participants[index].win) {
            {window.location.reload()}
            return <p>Loading...</p>
        } else {
            return (
                <div className={`columns box ${returnColor(summonerMatchState[0].info.participants[index].win)}`} >
                    <div className="column is-2">
                        {summonerMatchState[0].info.participants[index].win ? (
                            <p className='has-text-info is-size-4'><b>Victory</b></p>
                        ) : (
                            <p className='has-text-danger-dark is-size-4'><b>Defeat</b></p>
                        )}
                        <br></br>
                        <p className='is-size-5'>{checkQueueType(summonerMatchState[0].info.queueId)}</p>
                        <br></br>
                        <p>{computeTimeDifference(summonerMatchState[0].info.gameEndTimestamp)}</p>
                        <p>{computeTimeLength(summonerMatchState[0].info.gameDuration)}</p>
                        <br></br>
                        <p className='is-size-5'> 
                            {summonerMatchState[0].info.participants[index].deaths === 0 ? (
                                <span><b>Perfect</b> KDA</span>
                            ) : (
                                <span>KDA <b>{summonerMatchState[0].info.participants[index].challenges.kda.toFixed(2)}</b></span>
                            )}
                        </p>
                        <p className='is-size-5'>
                            <span>
                                <b>{summonerMatchState[0].info.participants[index].kills}</b> 
                            </span> /&nbsp; 
                            <span>
                                <b>{summonerMatchState[0].info.participants[index].deaths}</b>
                            </span> /&nbsp; 
                            <span>
                                <b>{summonerMatchState[0].info.participants[index].assists}</b>
                            </span>
                        </p>
                    </div>
                    <div className='column is-6'>
                        <div className='columns '>
                            <div className='column is-4'>
                                <img 
                                    src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${summonerMatchState[0].info.participants[index].championName}.png`} 
                                    alt={summonerMatchState[0].info.participants[index].championName}
                                    style={{borderRadius:"7px", width:"100%"}}>
                                </img>
                                <span className="tag is-dark" style={{width:"100%"}}>Level {summonerMatchState[0].info.participants[index].champLevel}</span>
                            </div>
                            <div className='column is-1 px-1'>
                                <div>
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${checkSummonerSpell(summonerMatchState[0].info.participants[index].summoner1Id)}.png`}
                                        alt='summoner spell'
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                </div>
                                <div>
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${checkSummonerSpell(summonerMatchState[0].info.participants[index].summoner2Id)}.png`}
                                        alt='summoner spell'
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                </div>
                                <div>
                                    <img
                                        src={`https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/${checkSummonerRune(summonerMatchState[0].info.participants[index].perks.styles[0].selections[0].perk)}`}
                                        alt="summoner rune"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                </div>
                                <div>
                                    <img
                                        src={`https://raw.communitydragon.org/pbe/plugins/rcp-be-lol-game-data/global/default/v1/${checkSummonerRune(summonerMatchState[0].info.participants[index].perks.styles[1].style)}`}
                                        alt="summoner rune"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                </div>
                            </div>
                            <div className='column is-6'>
                                <p className='is-size-5'>Gold per Minute <b>{summonerMatchState[0].info.participants[index].challenges.goldPerMinute.toFixed(2)}</b></p>
                                <p className='is-size-5'>Damage per Minute <b>{summonerMatchState[0].info.participants[index].challenges.damagePerMinute.toFixed(2)}</b></p>
                                { summonerMatchState[0].info.participants[index].challenges.killParticipation === undefined ? (
                                    <p className='is-size-5'>Kill Participation 0%</p>
                                ) : (
                                    <p className='is-size-5'>Kill Participation <b>{`${Math.floor(100*(summonerMatchState[0].info.participants[index].challenges.killParticipation))}%`}</b></p>
                                )}
                                <p className='is-size-5'>Damage Percentage <b>{`${Math.floor(100*(summonerMatchState[0].info.participants[index].challenges.teamDamagePercentage))}%`}</b></p>
                                <br></br>
                                {summonerMatchState[0].info.participants[index].largestKillingSpree===3 ? (
                                    <span className='tag is-warning is-medium'><b>Killing Spree</b></span>
                                ) : summonerMatchState[0].info.participants[index].largestKillingSpree===4 ? (
                                <span className='tag is-warning is-medium'><b>Rampage</b></span>
                                ) : summonerMatchState[0].info.participants[index].largestKillingSpree===5 ? (
                                <span className='tag is-warning is-medium'><b>Unstoppable</b></span>
                                ) : summonerMatchState[0].info.participants[index].largestKillingSpree===6 ? (
                                <span className='tag is-warning is-medium'><b>Dominating</b></span>
                                ) : summonerMatchState[0].info.participants[index].largestKillingSpree===7 ? (
                                <span className='tag is-warning is-medium'><b>Godlike</b></span>
                                ) : summonerMatchState[0].info.participants[index].largestKillingSpree===8 ? (
                                    <span className='tag is-warning is-medium'><b>egendary</b></span>
                                ) : (<div></div>)}
                                &nbsp;
                                {summonerMatchState[0].info.participants[index].largestMultiKill===2 ? (
                                    <span className='tag is-warning is-medium'><b>Double Kill</b></span>
                                ) : summonerMatchState[0].info.participants[index].largestMultiKill===3 ? (
                                    <span className='tag is-warning is-medium'><b>Triple Kill</b></span>
                                ) : summonerMatchState[0].info.participants[index].largestMultiKill===4 ? (
                                    <span className='tag is-warning is-medium'><b>Quadra Kill</b></span>
                                ) : summonerMatchState[0].info.participants[index].largestMultiKill===5 ? (
                                    <span className='tag is-warning is-medium'><b>Penta Kill</b></span>
                                ) : (<div></div>)}
                            </div>
                        </div>
                        
                        <div className='columns'>
                            <div className='column pt-0 pr-1'>
                                {summonerMatchState[0].info.participants[index].item0 !==0 ? (
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${summonerMatchState[0].info.participants[index].item0}.png`} 
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                ) : (
                                    <img 
                                        src={imagePlaceholder}
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                )}                           
                            </div>
                            <div className='column pt-0 pl-0 pr-1'>
                                {summonerMatchState[0].info.participants[index].item1 !==0 ? (
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${summonerMatchState[0].info.participants[index].item1}.png`} 
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                ) : (
                                    <img 
                                        src={imagePlaceholder}
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                )}                           
                            </div>
                            <div className='column pt-0 pl-0 pr-1'>
                                {summonerMatchState[0].info.participants[index].item2 !==0 ? (
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${summonerMatchState[0].info.participants[index].item2}.png`} 
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                ) : (
                                    <img 
                                        src={imagePlaceholder}
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                )}                           
                            </div>
                            <div className='column pt-0 pl-0 pr-1'>
                                {summonerMatchState[0].info.participants[index].item3 !==0 ? (
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${summonerMatchState[0].info.participants[index].item3}.png`} 
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                ) : (
                                    <img 
                                        src={imagePlaceholder}
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                )}                           
                            </div>
                            <div className='column pt-0 pl-0 pr-1'>
                                {summonerMatchState[0].info.participants[index].item4 !==0 ? (
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${summonerMatchState[0].info.participants[index].item4}.png`} 
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                ) : (
                                    <img 
                                        src={imagePlaceholder}
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                )}                           
                            </div>
                            <div className='column pt-0 pl-0 pr-1'>
                                {summonerMatchState[0].info.participants[index].item5 !==0 ? (
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${summonerMatchState[0].info.participants[index].item5}.png`} 
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                ) : (
                                    <img 
                                        src={imagePlaceholder}
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                )}                           
                            </div>
                            <div className='column pt-0 pl-0 pr-1'>
                                {summonerMatchState[0].info.participants[index].item6 !==0 ? (
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/item/${summonerMatchState[0].info.participants[index].item6}.png`} 
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                ) : (
                                    <img 
                                        src={imagePlaceholder}
                                        alt="item"
                                        style={{borderRadius:"7px"}}>
                                    </img>
                                )}                           
                            </div>
                        </div>
                    </div>
                    <div className='column is-2 participantContainerLeft'>
                        <ul>
                        {summonerMatchState[0].info.participants.slice(0,5).map(participant => 
                            <li>
                            <div className='has-text-right'>
                                <Link to={`/${participant.summonerName.toLowerCase()}`}><span className='is-size-6'>{participant.summonerName}&nbsp;</span></Link>
                                <span>
                                    <img 
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${participant.championName}.png`} 
                                        alt={participant.championName}
                                        style={{borderRadius:"7px", height: "50px"}}>
                                    </img>
                                </span>
                            </div>
                            </li> 
                        )}
                        </ul>
                    </div>
                    <div className='column is-2 participantContainerRight'>
                        <ul>
                        {summonerMatchState[0].info.participants.slice(5).map(participant =>
                            <li>
                                <div className='has-text-left'>
                                    <span>
                                        <img 
                                            src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/champion/${participant.championName}.png`} 
                                            alt={participant.championName}
                                            style={{borderRadius:"7px", height: "50px"}}>
                                        </img>
                                    </span>
                                    <Link to={`/${participant.summonerName.toLowerCase()}`} ><span className='is-size-6'>{participant.summonerName}&nbsp;</span></Link>                                
                            </div>           
                            </li>
                        )}
                        </ul>
                    </div>
                </div>
            )    
        }
    }


    
}

export default MatchCard