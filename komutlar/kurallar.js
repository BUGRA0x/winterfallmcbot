const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(RONDOM)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('**WİNTERFALLMC DİSCORD VE MİNECRAFT SUNUCUSU KURALLARI:**\n\n1-Hile, Macro kullanmak yasaktır.\n2-Küfür etmek, argo gelime kullanmak, siyaset ve ırkçılık yapmak yasaktır.\n3-Hile ve bug kullanmak yasaktır.\n4-Kaybolan eşyalarınızdan biz sorumlu değiliz.\n5-Diğer oyunculara güvenmek sizin elinizdedir. Aksi bir olay takdirinde müdahale etmeyiz.\n6-TPA tuzağı yasaktır.\n7-Yetkili taklidi vb. yapmak yasaktır\n8-Reklam yapmak **kesinlikle** yasaktır.\n9-Sunucuya hakaret sebebi mute veya ban sebebidir.\n10-Her çeşit dolandırıcılık yasaktır.\n11-Açık arttırmaya küfür, hakaret içerikli eşyaların konulması yasaktır.\n12-Başka sunucuların ismi kullanmak yasaktır.\n13-Yan hesap veya anlaşmalı bir hesap ile kill kasmak yasaktır.\n14-Size sattığımız edit eşyalar sizin sorumluluğunuzdadır. Kaybolduğu taktirde müdahale etmeyiz.\n15-FPS veya TPS düşüren (lag yapan) sistemler yapmak hem yasaktır, hem de ağır cezalara sebebiyettir. \n\n**Kurallara Uymadığınız Taktirde Gerekli İşlemler Yapılacaktır.**');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'kurallar',
  description: 'Sunucu kurallarını gösterir.',
  usage: 'kurallar'
};
