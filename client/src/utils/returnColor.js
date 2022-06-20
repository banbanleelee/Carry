export default function returnColor(data) {
    if (data) {
        return `has-background-info-light`
    } else {
        return `has-background-danger-light`
    }
}