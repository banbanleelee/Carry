import runes from '../static/runes.json'

export default function checkSummonerRune(id) {
    let obj = runes.find(o => o.id === id) ;
    // console.log(obj.icon.toLowerCase());
    return obj.icon.toLowerCase();
}