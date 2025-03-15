const { Client, GatewayIntentBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, PermissionsBitField } = require('discord.js');
const express = require('express');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

const TOKEN = process.env.TOKEN;

const RUOLO_AUTORIZZATO = '1324815872124129370';

app.get('/', (req, res) => {
  res.send('<h1>Vivo</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

client.on('ready', () => {
  console.log(`Bot avviato correttamente come ${client.user.tag}!`);
});

async function createMainMessage(channel) {
  const embed = new EmbedBuilder()
    .setTitle('Tutto quello c\'è da sapere sul Server di Poldo 🔴🟡')
    .setDescription('Schiaccia 👇 il bottone sull\'argomento che vuoi espandere e ti comparirá tutto quello che ti puó interessare su un determinato argomento relativo al Sacro Romano Impero Poldiano 🦆')
    .setColor(15844367)
    .setFooter({ text: 'Ringraziamo Jesgran per l\'aver reso il tutto visibilmente appetibile, cosa che si traduce in ore di programmazione incessante, e tutti i moderatori che hanno partecipato a innumerevoli iterazioni di scrittura che hanno portato a questo risultato, aggiornato a Marzo 2025' });

  const row1 = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('server_btn')
      .setLabel('Server')
      .setEmoji('💻')
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId('ruoli_btn')
      .setLabel('Ruoli‎ㅤ')
      .setEmoji('👥')
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId('canali_btn')
      .setLabel('Canali')
      .setEmoji('🗃️')
      .setStyle(ButtonStyle.Primary)
  );

  const row2 = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('regole_btn')
      .setLabel('Regole')
      .setEmoji('📖')
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId('format_btn')
      .setLabel('Format')
      .setEmoji('📄')
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId('twitch_btn')
      .setLabel('Twitch')
      .setEmoji({ id: '1173339970484842517', name: 'YFTwitch' })
      .setStyle(ButtonStyle.Success)
  );

  await channel.send({ embeds: [embed], components: [row1, row2] });
}

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  const ruoliEmbeds = [
    new EmbedBuilder()
      .setTitle('RUOLI')
      .setDescription("### <@&937708517601718322>\nMetallino che si crede di abitare al Nord (quando è chiaro che l'Emilia Romagna non sta a Nord). Utilizza il server per contenuti sporadici in cui interagisce la community. La sua volontà di portare cose insieme alla community è direttamente proporzionale all'impegno delle persone a fornirgli un qualcosa di divertente (cosa che a parte per pochi individui accade di rado, ecco spiegato perché ho utilizzato il termine sporadici, colpa vostra). Pingarlo comporta la non più possibilità di fare la conga e l'esclusione immediata dai festeggiamenti dell'Ascanio Day. POLDO LORE!\n### <@&718080199069270017>\nStronzi, beceri, amanti delle bassezze più infami per ridurre al minimo l'autostima degli utenti base del server. Sebbene possa sembrare strano, nonostante l'immaginario comune possa far pensare diversamente, questi hanno tutti un fisico migliore di Henry Cavill. Sono anche responsabili di scrivere le regole del server oltre che all'applicarle, cosa che nell'ordinamento di un qualsiasi paese democratico è diviso tra due organi se non di più. Siete avvisati.\n### <@&719595246740176917>\nPersone che hanno ricevuto il sigillo presidenziale direttamente da Poldo, il loro Habitat naturale sono le tundre della bassa Russia, ambiente in cui sono riusciti a sviluppare una relazione di tipo mutuale e/o simbiotica con i Moderamod in cui in cambio della protezione che essi forniscono, loro ricambiano con della pasta da gaming per le mani in comodo formato per il viaggio.\n### <@&937707316902498324>\nAltri creator di contenuti digitali, il fatto di generare visual è origine del fatto che loro vengono da un pianeta alieno in cui i suoi abitanti preferiscono le torte al gelato. Il successo si paga, ma quanto vale questo successo?  Io preferisco non arrivare a fine mese come umano ma apprezzare l'incredibile cremosità dell'artigianato dolciario migliore di tutti, che vivere come uno sceicco... Anche se ammetto di vacillare un pochino.\n### <@&1324815872124129370>\nGestiscono gli eventi del server, non hanno capacità di moderazione di alcun tipo, hanno la possibilità di aprire palchi e di fare quasi tutto quello che li pare e piace nel server. Sono esperti strateghi in quanto si sono guadagnati il ruolo scambiando servizi di natura politico-economica con i Moderamod per ottenere delle posizioni favoreggiate una volta che essi hanno ottenuto la poltrona. Giocano con il deck \"Pietra Bianca della Leggenda-Drago Bianco Occhi Blu\" perché odiano perdere e preferiscono rovinare il gameplay all'avversario che essere moralmente corretti.\n### Amici del Server\nPersone fighe che sono amici principalmente dei Moderamod e di Poldo, sono persone talmente fighe che dargli un ruolo per i villici è un insulto alla loro persona, pertanto ognuno di loro c'ha un ruolo personale, bardato di mille orpelli come si deve ai re. Posseggono una statura degna di  un re, per alcuni degna di un dio, tanto  che alcune iscrizioni del Medio Egitto li raffigurano in compagna del dio Anubis mentre giocano con lui a Ghost of Tsushima.\n### <@&1328783377238855803>\nIl ruolo determina la disponibilità di un utente ad essere interessato a quello che propongono tutto quello che possono proporre gli Helper. Indubbiamente il ruolo piú figo di tutti per un semplice motivo, viene accompagnato da una foto del Pocket Monster Quagsire, che è una fonte indiscussa di serotonina. Nel gioco una delle sue abilità è Unaware che tradotta letteralmente in italiano significa Ignorante, così come è ignorante la stragrande maggioranza di persone che ancora non sa che questo ruolo si ottiene senza disturbare nessuno nella sezione Canali e Ruoli del Server (se non la trovate aprite gli occhi)")
      .setColor(14358555),
    new EmbedBuilder()
      .setDescription("### Update Settimanali\nRuolo adatto a chi invece di uscire fuori, mettendosi in gioco socialmente con la possibilità di trovare l'amore della propria vita ha la testa incollata al computer/tablet/telefono, e in particolar modo su Poldo. Se non ti piace perdere una sua singola live/video in modo tale da carpire ogni singola informazione sulla sua persona per poi venire in fiera per poi spaventarlo, facendogli l'estratto della sua vita davanti ai suoi occhi che hanno quell'espressione di chi sa di guardare uno stalker, questo è il tuo ruolo.\n### Cittadino Poldiano\nRuolo base del Server che abbiamo introdotto per quelle persone che nel Server piangevano se non avevano neanche un ruolo. Lo togliamo regolarmente per poi riaggiungerlo per far piangere quella determinata persona a intervalli regolari, penso seriamente che il 97% del server non abbia altri ruoli sopracitati oltre questo. Si gode.")
      .setColor(14358555)
  ];
  
  const buttonResponses = {
    'server_btn': {
      embeds: [
        new EmbedBuilder()
          .setDescription('# SERVER\nQuesto è il server del Sacro Romano Impero Poldiano, a cui fa capo il creatore di contenuti digitali **Poldo**. \nNonostante quest\'ultimo sia il proprietario del server, oltre che il motivo principale per cui puoi essere entrato qui dentro, **Poldo NON GESTISCE QUOTIDIAMENTE IL SERVER** ma ciò è fatto principalmente dai <@&718080199069270017> e da tutte quelle persone che a prescindere dal ruolo si impegnano a mantenere un ambiente in cui è possibile rispettare tutti quanti.')
          .setColor(3447003)
      ]
    },
    'ruoli_btn': {
      embeds: ruoliEmbeds
    },
    'canali_btn': {
      embeds: [
        new EmbedBuilder()
          .setDescription('# I Canali Testuali\n### <#552878610210619393>\nCanale generale di testo, nulla di più, nulla di meno, ma è il canale più utilizzato del server proprio perché è semplice e diretto.\n### <#552885361458675745>\nCanali adatti (chi l’avrebbe mai detto) alla condivisione di meme.\n### <#1231619994488668282>\nPost in cui è possibile mandare idee per migliorare il server, di qualsiasi mole e tipo.\n### <#816973271651844147>\nCanale molto generico in cui si parla di tutto quello che comprende la cultura pop.\n### <#738487112227356723>\nCanale in cui si può mandare Black Humor, a differenza degli altri canali dove è severamente vietato. Essendoci un canale apposito per esso è chiaro (o perlomeno ci si aspetta che si sappia) che qualsiasi cosa "oltre" al Black Humor non vada bene.\n### https://discord.com/channels/552875745530347520/1307374853032116294\nCanale Post in cui è possibile condividere foto e materiale di animali nel loro habitat naturale. Tecnicamente gli umani sono animali peró se non siete divertenti con le vostre condivisioni vi banniamo seduta stante.\n### https://discord.com/channels/552875745530347520/1269982292999274526\nCanale Post atto alla condivisione di musica tramite link.\n# I Canali Vocali\n### Stanze pubbliche\nStanze vocali come Just Chatting in cui possono entrare tutti quando vogliono.\n### Stanze private su richiesta\nStanze vocali che si possono richiedere su disponibilità nel caso si possegga un gruppo di amici a cui piace bazzicare nel server, e si vuole avere una stanza tutta per sé e per loro in cui stare. La gestione dei permessi della stanza è della sola persona che ne fa richiesta, almeno che essa non voglia diversamente.\n### Stanze private\nStanze a cui tutti possono accedere fino a un numero fissato di elementi incluso nel nome della stanza, ottime per incontri in cui non si vuole essere disturbati. Tuttavia i Moderamod hanno eventualmente il potere di accedere a queste stanza scavalcando il limite di utenti nel caso riscontrassero delle attività che violano le regole del server.\n### Teatro Poldiano\nStanza Particolare in cui è possibile fare eventi. Gestita principalmente dagli Helper.\n# Una Raccomandazione sui Canali\n\n**UN USO IMPROPRIO DEI CANALI SIA TESTUALI CHE VOCALI VERRÀ SEVERAMENTE PUNITO, A DISCREZIONE DEL MOD E DEL SUO STATO EMOTIVO IN QUEL MOMENTO. POSSA LA FORTUNA ESSERE DALLA VOSTRA PARTE.**')
          .setColor(1752220)
      ]
    },
    'regole_btn': {
      embeds: [
        new EmbedBuilder()
          .setDescription('# Le Regole\nPrima di tutto:\n### **1.** Mostra un atteggiamento rispettoso verso tutti gli utenti del server.\n- Non sono permessi atteggiamenti razzisti, xenofobi, omofobi, transfobici, qualsiasi atteggiamento volto a odiare un certo gruppo di persone. Seriamente, non siamo su Instagram e questa roba non fa ridere.\n- Non condividere idee di violenza/odio verso un certo gruppo di persone.\n- Non offendere la fede degli altri membri (tradotto: niente bestemmie.)\n- Evita l\'utilizzo delle Parole Bannate™ che tutti conoscete (come le famose N-Word ed F-Word)\n### **2.** Non eseguire autopromozione di nessun tipo.\n- Non è permesso inviare link di invito a server Discord esterni, sia nelle chat del server che nei messaggi diretti.\n- Senza autorizzazione esplicita da un moderatore, non è permesso condividere il proprio account di un qualsiasi social network chiedendo follow o interazioni.\n### **3.** Non condividere contenuti espliciti e/o sensibili (NSFW).\n- Non condividere contenuti raffiguranti gore, violenza estrema, immagini disturbanti.\n- Non condividere contenuti sessualmente espliciti, pornografici (Rule 34 inclusa).\n- Non condividere questi contenuti neanche se censurati.\n### **4.** Non trattare argomenti di natura politica.\nQuesto non è il luogo adatto per parlare di politica, mi dispiace.\n### **5.** Non intasare le chat testuali con messaggi ripetuti.\nCioè, non intasare le chat con copypasta, sticker, emote, ASCII art e qualsiasi altra roba possa venirvi in mente.\n### **6.** Non inviare contenuti che sfruttano exploit dell\'applicazione.\nDetto in parole più dettagliate, non inviate immagini/video/GIF che possano far crashare il client di Discord di un utente o addirittura il server stesso.\n### **7.** Non abusare dei comandi dei bot.\nMEE6 adora yappare di cavolate e non sappiamo come zittirlo quindi ignoratelo vi prego\n### **8.** NON TAGGATE POLDO O ALTRI CREATOR.\nAltrimenti vi veniamo a cercare. (per motivi legali questo è uno scherzo)\n### **9.** Non organizzare e/o partecipare a raid nei server.\nNon fa ridere.\n# Le Sanzioni\nNel caso un utente infranga una delle regole elencate verrà **ammonito (warn) e mutato per 24 ore**. Se l\'utente è nuovo si riduce a un\'ora.\n\nAl raggiungimento del terzo warn, scatta **un mute di 7 giorni**.\nAl raggiungimento del quarto, scatta il **permaban** e tanti saluti.\n\nSe una delle regole infrante riguardi la regola 2 (autopromozione) o la regola 3 (NSFW), scatta **il permaban**.')
          .setColor(10181046)
      ]
    },
    'format_btn': {
      embeds: [
        new EmbedBuilder()
          .setDescription('# FORMAT\n# Le Regole dei Format\nRegole per i Format di Poldo su discord:\n- Inviate solo contenuti originali e appropriati. (se l\'Internet è intasato di un contenuto specifico, Poldo ne è al corrente)\n- Evitate battute scontate o materiale provocatorio.\n- Seguite gli annunci e preparate i contributi in anticipo, in modo tale da non arrivare all\'ultimo. Idee pensate ed elaborate nell\'arco di 10 minuti non sono spesso originali e apprezzabili.\n- **La futura esistenza di content legati al server (come il "Confessionale" o le "FormsNight") dipende primariamente dalla bravura degli utenti nel non mandare contenuti scadenti.**\n- Spendete almeno 2 minuti sul capire la bontà del proprio elaborato/contenuto, vi disincentiviamo dal mandare materiale che non ritenete valido.\n- Dato che la moderazione può essere destabilizzata dalle necessità temporali del video o della live che Poldo sta facendo, si può ricevere una punizione del server molto peggiore di quanto scritto nella sezione delle regole. Pertanto vi consigliamo di **NON ROMPERE NESSUNA REGOLA DURANTE I FORMAT e di non tentare la fortuna nello stato emotivo dei Moderamod**.')
          .setColor(6323595)
      ]
    },
    'twitch_btn': {
      embeds: [
        new EmbedBuilder()
          .setDescription('# TWITCH\n\nÈ possibile collegare il proprio account di Twitch con il proprio account di Discord per ottenere il ruolo Habbo-nati, che dà la possibilità di avere una stanza vocale di discord. Per fare ció bisogna andare nella sezione "Collegamenti" nelle impostazioni del proprio account, per poi fare l\'accesso tramite un integrazione apposita. Nel caso si sia abbonati al canale Twitch di Poldo in automatico vi verrà assegnato il ruolo e non appena la vostra sub finirà vi verrà tolto in automatico il ruolo fino a che non vi resubberete di nuovo')
          .setColor(7947978)
      ]
    }
  };

  const response = buttonResponses[interaction.customId];
  if (response) {
    try {
      await interaction.reply({ embeds: response.embeds, ephemeral: true });
    } catch (error) {
      console.error(`Errore nell'invio della risposta: ${error.message}`);
    }
  }
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  
  if (message.content === '!besugociao123') {
    const isAdmin = message.member.permissions.has(PermissionsBitField.Flags.Administrator);
    const hasRole = message.member.roles.cache.has(RUOLO_AUTORIZZATO);
    
    if (isAdmin || hasRole) {
      await createMainMessage(message.channel);
      try {
        await message.delete();
      } catch (deleteError) {
        console.error(`Errore nell'eliminazione del messaggio: ${deleteError.message}`);
      }
    } else {
      const reply = await message.reply({ content: 'Non hai il permesso di utilizzare questo comando!' });
      
      setTimeout(async () => {
        try {
          await reply.delete();
        } catch (deleteError) {
          console.error(`Errore nell'eliminazione del messaggio di errore: ${deleteError.message}`);
        }
      }, 5000);
    }
  }
});

client.login(TOKEN).catch(error => {
  console.error(`Errore durante il login: ${error.message}`);
  process.exit(1);
});
