import emblems from '../static/rankEmblem.json'

export default function checkRankEmblem (tier) {
    let obj = emblems.find(o => o.tier === tier) ;
    
    return obj.src
}