import React from 'react';

const SummonerNameCard = (summoner) => {
   if(summoner === undefined) {
    <p>Loading...</p>
   }
    return (
        <div className="box has-background-light" style={{height:"180px"}}>
            <article className="media">
                <div className="media-left">
                <figure className="image is-128x128" >
                    <img src={`http://ddragon.leagueoflegends.com/cdn/12.11.1/img/profileicon/${summoner.summoner.profileIconId}.png`} alt="Image" style={{borderRadius:"7px"}}></img>
                </figure>
                </div>
                <div className="media-content">
                <div className="content">
                    <p className='is-size-3'><b>{summoner.summoner.name}</b></p>
                    <p className='is-size-5'>Level {summoner.summoner.summonerLevel}</p>
                </div>
                </div>
            </article>
        </div>
    )
}

export default SummonerNameCard