export default function computeTimeDifference(time) {
    const date = new Date();
    // get total seconds between the times
    var delta = Math.abs(date - time) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(delta % 60);

    if (days>1) {
        return `${days} days ago`
    } else if (days===1) {
        return `1 day ago`
    } else {
        if (hours>1) {
            return `${hours} hours ago`
        } else if (hours===1) {
            return `1 hour ago`
        } else {
            if (minutes>1) {
                return `${minutes} minutes ago`
            } else if (minutes===1) {
                return `1 minute ago`
            } else {
                if (seconds>1) {
                    return `${seconds} seconds ago`
                } else if (seconds===1) {
                    return `1 second ago`
                } else {
                    return `error, data invalid`
                }
            }
        }
    }
}