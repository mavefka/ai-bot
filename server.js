const { Client } = require("discord.js");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
const x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Konuşmaya hazırım! Umut tarafından kodlandım.");
  client.user.setActivity(`Adanalı Yapay Zeka!`)
});

client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  message.content = message.content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.reply(
      `**:x: Lütfen beni etiketleme artık! 😭**`
    );
  }
  
  message.channel.startTyping();
  if (!message.content)
    return message.channel.send("Sadece reply olmuş text mesajlarına cevap verebilirim.");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "umut",
    user: message.author.id,
    language: "tr"
  }).then(reply => {
    message.reply(`${reply}`);
  });
  message.channel.stopTyping();
});
client.login(process.env.TOKEN); //login using the token
