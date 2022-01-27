const Discord = require('discord.js');
const client = new Discord.client();
const config = require

client.on('ready', () => {
    console.log('Online Shod');
        client.user.setstatus("dnd");
        let targetguild = client.guilds.cache.get
        ("790312889990119424")
        setInterval(function(){
            client.user.setActivity('$
            {targetguild.memberCount} members' , {type:
            "COMPETING" })
    },)   
    
    })
client.login(process.env.token)    