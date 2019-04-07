import Axios from 'axios';

const axios = Axios.create({
    withCredentials: true
})


const _URL = (process.env.NODE_ENV !== 'development')
    ? '/msgs/'
    : 'http://localhost:3000/msgs/';

export default {
    remove,
    addMsg,
    query
}

async function query(filter){
    let query
    if(filter) query = '?filter=' + filter
    else query = ''

    const msgs = await axios.get(`${_URL}${query}`)
    return msgs.data
}

async function addMsg(msg){
    var randomInt = Math.floor(Math.random() * 50)
    msg.img = `https://randomuser.me/api/portraits/men/${randomInt}.jpg`
    msg.createdAt = Date.now()
    
    const addedMsg = await axios.post(`${_URL}`,msg)
    return addedMsg
}
async function remove(msgId){
    var deletedMsg = await axios.delete(`${_URL}${msgId}`)
    return deletedMsg
}

