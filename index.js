//load required modules
const fs = require('fs');
const Discord = require('discord.js');
const tools = require('./tools');
const { send } = require('process');

//create a client, the bot itself
const client = new Discord.Client();


//log in to Discord with the bot token in config.json
//go to https://discordapp.com/developers/applications to get your own bot
client.login('NzM5OTM0NDEyMzA4NzQyMzA0.Xyhrnw.HYHwefGhVQDfc6Woq4ULEkWPQzI');
