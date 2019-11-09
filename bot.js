const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot made by: Swofty`);
});
const prefix = 'f!';
client.login(auth.token);

// Prefix-Replys   
client.on('message', message => {
  if (message.content === 'f!avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.on('message', message => {
  if (message.content === 'f!help') {
   message.channel.send('**Commands** \n !help - *Helps you with the commands* \n !avatar - *Gives you your avatar* \n !kick - *Kicks the designated player* \n !ban - *Bans the designated player*');
 }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('f!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply('Successfully kicked ${user.tag}.');
        }).catch(err => {
          message.reply('I was unable to kick the member.');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('f!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply('Successfully banned ${user.tag}.');
        }).catch(err => {
          message.reply('I was unable to ban the member.');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});

// Auto-Replys
client.on('message', message=> {
    if (message.isMentioned(client.users.get('579108689852760087'))) {
    message.reply('Do not ping Furious!');
    message.delete(1000);
  }
});



// Other
client.on('message', message => {
        if (message.channel.id === '642324102178275328') {
              message.react("👍");
              setTimeout(function() {
                }, 10000);
              message.react("👎");
             }
});