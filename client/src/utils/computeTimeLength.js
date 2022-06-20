export default function computeTimeLength(time) {
    // this function takes time in second, not millisecond!

    var days = Math.floor(time / 86400);
    time -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(time / 3600) % 24;
    time -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(time / 60) % 60;
    time -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(time % 60);

    if (days>1) {
        return `${days} days`
    } else if (days===1) {
        return `1 day`
    } else {
        if (hours>1) {
            return `${hours} hours`
        } else if (hours===1) {
            return `1 hour`
        } else {
            if (minutes>1) {
                return `${minutes} minutes`
            } else if (minutes===1) {
                return `1 minute`
            } else {
                if (seconds>1) {
                    return `${seconds} seconds`
                } else if (seconds===1) {
                    return `1 second`
                } else {
                    return `error, data invalid`
                }
            }
        }
    }
}