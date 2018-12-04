const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('= Komut Listesi =

[Komut hakkında bilgi için /yardım <komut adı>]

/sor             :: Sihirli 8ball sorularınızı cevaplar
/bilgi           :: Bot ile ilgili bilgi verir.
/davet           :: Botun davet linkini gönderir.
/kullanıcıbilgim :: Komutu kullanan kişi hakkında bilgi verir.
/load            :: Yeni eklenen komutu yükler.
/duyur           :: Yazdığınız şeyi bota duyurtur.
/reload          :: İstediğiniz bir komutu yeniden başlatır.
/stresçarkı      :: Sizin için bir stres çarkı çevirir.
/sunucubilgi     :: Sunucu hakkında bilgi verir.
/sustur          :: İstediğiniz kişiyi  susturur.
/temizle         :: Belirlenen miktar mesajı siler.
/yardım          :: Tüm komutları gösterir.
/                :: Bu komut yasaklanmış.');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
