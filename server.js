const express = require('express');
const jsonData = require('./data.json');
const app = express();

app.use(express.json());

app.get("/client/:id", function(req, res){
    const {id} = req.params 
    const client = jsonData.find(userClient => userClient.id == id)

    if (!client) return res.status(204).json()

    res.json(client);
});
app.post("/client", function(req, res){
    const {name, username, email} = req.body;

    res.json({name, username, email})
})
app.put("/client/:id", function(req, res){
    const {id} = req.params;

    const client = jsonData.find(clientUser => clientUser.id == id);

    if (!client) return res.status(204).json()

    const {name, username, email} = req.body  

    client.name = name
    client.username = username
    client.email = email 

    res.json(client)

})
app.delete("/client/:id", function(req, res){
    const {id} = req.params 
    const deleteUser = jsonData.filter(filterUser => filterUser.id != id)

    res.json(deleteUser)

})

app.listen(3000, function(){
    console.log('Server is running!')
})