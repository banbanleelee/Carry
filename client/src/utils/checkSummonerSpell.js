export default function checkSummonerSpell(data) {
    if (data===21) {
        return 'SummonerBarrier';
    } else if (data===1) {
        return 'SummonerBoost';
    } else if (data===14) {
        return 'SummonerDot';
    } else if (data===3) {
        return 'SummonerExhaust';
    } else if (data===4) {
        return 'SummonerFlash';
    } else if (data===6) {
        return 'SummonerHaste';
    } else if (data===7) {
        return 'SummonerHeal';
    } else if (data===13) {
        return 'SummonerMana';
    } else if (data===30) {
        return 'SummonerPoroRecall';
    } else if (data===31) {
        return 'SummonerPoroThrow';
    } else if (data===11) {
        return 'SummonerSmite';
    } else if (data===39) {
        return 'SummonerSnowURFSnowball_Mark';
    } else if (data===32) {
        return 'SummonerSnowball';
    } else if (data===12) {
        return 'SummonerTeleport';
    } else if (data===54) {
        return 'Summoner_UltBookPlaceholder';
    } else if (data===55) {
        return 'Summoner_UltBookSmitePlaceholder';
    }
};