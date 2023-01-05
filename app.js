import { Telegraf, Markup } from 'telegraf';
import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config()
const TOKEN_TELEGRAF = "5935151353:AAHBsEmjfmrmPaGv1CUB9_VOojFPL6_9yv4";
const OPEN_AI = "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";


const bot = new Telegraf(process.env.BOT_TOKEN);

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI
});
const openai = new OpenAIApi(configuration);

let onOffOpenAi = false;


bot.command('start', async context => {
    await context.replyWithHTML(`Heyyy🔥🔥🔥 <b>${context.message.chat.first_name}</b> benvenuto nel nostro telegram bot`);
    await context.replyWithHTML('<b>Che svilupatore sei?</b>🔥🔥🔥🔥🔥🔥🔥🔥🔥', Markup.inlineKeyboard([
        [
            Markup.button.callback('Front-end', 'fe')
        ],
        [
            Markup.button.callback('Back-end', 'be')
        ]
    ]))
});


//FRONT END BOT
bot.action('fe', async context => {
    await context.replyWithHTML(`<b>Hey, sono il tuo bot sono qui per aiutarti, scscegli quello che cerchi tra miei proposte, se non trovi quello che cerchi, scrivi tecnologia ricercata per esempio "JavaScript", "React js", "React Native", "npm"</b>`, Markup.inlineKeyboard([

        [
            Markup.button.callback('React js', 'react'),
            Markup.button.callback('React Native', 'react_native')
        ],
        [
            Markup.button.callback('JavaScript', 'js'),
            Markup.button.callback('NPM', 'npm')
        ],
        [
            Markup.button.callback('Redux', 'redux')
        ],
        [
            Markup.button.callback('Prova OpenAi', 'open_ai')
        ]
    ]));

});

//BACK END BOT
bot.action('be', async context => {
    await context.reply('Hey, sono il tuo bot sono qui per aiutarti, scegli quello che cerchi tra miei proposte, se non trovi quello che cerchi, scrivi tecnologia ricercata per esempio "Java", "Sping"', Markup.inlineKeyboard([
        [
            Markup.button.callback('Java', 'java'),
            Markup.button.callback('Spring', 'spring')
        ]
    ]));
});

// ACTION FOR MENU
bot.action('react', async context => {
    await context.replyWithHTML(`
    Link utili per React js \n\n
    React Documentation: https://reactjs.org/docs/getting-started.html \n
    React Hooks: https://reactjs.org/docs/hooks-intro.html \n
    React Routes: https://v5.reactrouter.com/web/guides/quick-start
    `)
});


// openAi CONTROLL ON OFF
bot.command('on_open_ai', async ctx => {
    onOffOpenAi = true;
    await ctx.replyWithHTML(`
        <b>OpenAi chat é stato ativato</b>🔥,\n
        Adesso puoi scrivere qualsiasi cosa,\n
        <b>Per esempio</b>: \n
        "Creami un componente dropdown per react js"
    `);
});
bot.command('off_open_ai', async ctx => {
    onOffOpenAi = false;
    await ctx.replyWithHTML(`
        <b>OpenAi chat é stato disativato</b>🔥
    `);
});

bot.action('open_ai', async ctx => {
    ctx.replyWithHTML(`
        <b>Nel menu sotto trovi delle comande on, off del open ai</b>\n
        Quando lo accedi scrivi qualsiasi messagio, tipo: "Creami un select component per react",
        E aspetta un po perche open ai non ti da subito la risposta, bisogna aspettare,\n
        <b>Divertitit</b>
    `);
});

// THIS IS AMAZINGGGG IWIWIWIIWIWIWIWIWWIIWIWIIIWIW
bot.on('text', async ctx => {
    try {
        if (onOffOpenAi) {
            await ctx.reply('La tua richiesta in elaborazione.....')
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: ctx.message.text,
                max_tokens: 3000,
                temperature: 0.9
            });
            ctx.reply(completion.data.choices[0].text);
        } else if (!onOffOpenAi) {
            ctx.reply('Hmmm, il tuo messagio non vuol dire niente')
        }
    } catch (error) {
        console.log(error);
    }
    // console.log(completion.data);
    console.log(onOffOpenAi);
});

bot.launch();

// process.once('SIGINT', () => bot.stop('SIGINT'));
// process.once('SIGTERM', () => bot.stop('SIGTERM'));