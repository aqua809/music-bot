const { Command } = require('discord.js-commando');
//MADE BY ANBG
module.exports = class LoopCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'loop',
      group: 'music',
      memberName: 'loop',
      guildOnly: true,
      description: 'Loop the current playing song'
    });
  }

  run(message) {
    if (!message.guild.musicData.isPlaying) {
      return message.say('There is no song playing right now! | CTK');
    } else if (
      message.guild.musicData.isPlaying &&
      message.guild.triviaData.isTriviaRunning
    ) {
      return message.say('You cannot loop over a trivia! | CTK');
    }

    message.channel.send(
      `${message.guild.musicData.nowPlaying.title} added to queue`
    );
    message.guild.musicData.queue.unshift(message.guild.musicData.nowPlaying);
    return;
  }
};
