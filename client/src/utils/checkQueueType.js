import queues from '../static/queues.json'

export default function checkQueueType(id) {

    let obj = queues.find(o => o.queueId === id) ;
    
    return obj.description
}