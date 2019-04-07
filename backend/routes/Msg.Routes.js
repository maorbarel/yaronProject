const msgService = require('../services/Msg.Service');

function addMsgRoute(app){
    app.get('/msgs', async (req, res) => {
        var filter = req.query.filter
        var msgs = await msgService.query(filter)
        res.json(msgs)
    })
    app.post('/msgs', async (req,res)=> {
        var msg = req.body;
        const addedMsg = await msgService.add(msg)
        res.json(addedMsg)
    })
    app.delete('/msgs/:msgId', async (req,res)=> {
        const msgId = req.params.msgId;
        const deletedMsg = await msgService.remove(msgId)
        res.json(deletedMsg)  
    })
}

module.exports = addMsgRoute
