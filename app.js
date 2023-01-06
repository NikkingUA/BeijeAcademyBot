import { Telegraf, Markup } from 'telegraf';
import { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';

dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN);

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI
});
const openai = new OpenAIApi(configuration);

let onOffOpenAi = false;

bot.command('start', async context => {
    await context.replyWithHTML(`Heyyy👋🏼👋🏼🔥 <b>${context.message.chat.first_name}</b> benvenuto nel nostro telegram bot`);
    await context.replyWithHTML(' 🥷 🥷 🥷<b> Che svilupatore sei?</b> 🥷 🥷 🥷', Markup.inlineKeyboard([
        [
            Markup.button.callback('Front-end', 'fe')
        ],
        [
            Markup.button.callback('Back-end', 'be')
        ]
    ]))
});

bot.command('help', ctx => {
    ctx.reply('I tryyyyy!')
});

//FRONT END BOT
bot.action('fe', async context => {
    await context.replyWithHTML(`<b>Hey 🏆, sono il tuo bot sono qui per aiutarti, scegli quello che cerchi tra miei proposte</b>`, Markup.inlineKeyboard([

        [
            Markup.button.callback('React js 👾', 'react'),
            Markup.button.callback('React Native', 'react_native'),
            Markup.button.callback('Redux', 'redux')
        ],
        [
            Markup.button.callback('JavaScript', 'js'),
            Markup.button.callback('Librerie JS', 'libraes')
        ],
        [
            Markup.button.callback('Video tuttorial 🏄‍♀️ ', 'video_tuttorial')
        ],
        [
            Markup.button.callback('Prova OpenAi(BETA) 🦾', 'open_ai')
        ],
        [
            Markup.button.callback('About creator of this bot 🇺🇦', 'my_info')
        ]
    ]));

});

//BACK END BOT
bot.action('be', async context => {
    await context.reply('Hey, sono il tuo bot sono qui per aiutarti, scegli quello che cerchi tra miei proposte', Markup.inlineKeyboard([
        [
            Markup.button.callback('Java', 'java'),
            Markup.button.callback('Spring', 'spring'),
            Markup.button.callback('NodeJS', 'node_js')
        ],
        [
            Markup.button.callback('PHP', 'php'),
            Markup.button.callback('Laravel', 'laravel')
        ],
        [
            Markup.button.callback('Video tuttorial 🏄‍♀️ ', 'video_tuttorial')
        ],
        [
            Markup.button.callback('Prova OpenAi(BETA) 🦾', 'open_ai')
        ],
        [
            Markup.button.callback('About creator of this bot 🇺🇦', 'my_info')
        ]

    ]));
});

// MY INFO 
bot.action('my_info', ctx => {
    ctx.replyWithHTML(`
        <b>Hello, my name is Mykyta</b> 👨🏻‍💻
    `);
});

// ACTION FOR BACK END
bot.action('php', ctx => {
    ctx.replyWithHTML(`
        <b>PHP link utili</b>\n
        PHP Doc: https://www.php.net/docs.php
    `);
});

bot.action('java', ctx => {
    ctx.replyWithHTML(`
        <b>Java link utili</b>\n
        Java Doc: https://docs.oracle.com/en/java
    `);
});

bot.action('node_js', ctx => {
    ctx.replyWithHTML(`
        <b>Node js link utili</b>\n
        Node js Doc: https://nodejs.org/en/docs\n
        Node js install: https://phoenixnap.com/kb/install-node-js-npm-on-windows
    `);
});

bot.action('laravel', ctx => {
    ctx.replyWithHTML(`
        <b>Laravel link utili</b>\n
        Laravel Doc: https://laravel.com/docs/9.x/installation
    `);
});

bot.action('spring', ctx => {
    ctx.replyWithHTML(`
        <b>Spring link utili</b>\n
        Spring Doc: https://spring.io
    `);
})


// openAi CONTROLL ON OFF
bot.command('on_open_ai', async ctx => {
    onOffOpenAi = true;
    await ctx.replyWithHTML(`
        <b>OpenAi 🤖 chat é stato ativato</b>🔥,\n
        Adesso puoi scrivere qualsiasi cosa,\n
        <b>Per esempio</b>: \n
        "Creami un componente dropdown per react js"
    `);
});
bot.command('off_open_ai', async ctx => {
    onOffOpenAi = false;
    await ctx.replyWithHTML(`
        <b>OpenAi 🤖 chat é stato disativato</b>🔥
    `);
});

bot.action('open_ai', async ctx => {
    ctx.replyWithHTML(`
        <b> 🤖 🤖 🤖 Nel menu sotto trovi delle comande on, off del open ai 🤖 🤖 🤖</b>\n
        Quando lo accedi scrivi qualsiasi messagio, tipo: "Creami un select component per react",
        E aspetta un po perche open ai non ti da subito la risposta, bisogna aspettare,\n
        <b>DIVERTITI</b>
    `);
});

// ALL ACTION FOR MENU FRONT END
bot.action('react', async context => {
    await context.replyWithHTML(`
    <b>Link utili per React js</b>\n
    React Documentation: https://reactjs.org/docs/getting-started.html \n
    React Hooks: https://reactjs.org/docs/hooks-intro.html \n
    React Routes: https://v5.reactrouter.com/web/guides/quick-start
    `)
});

bot.action('libraes', ctx => {
    ctx.replyWithHTML(`
    <b>Librerie consigliate</b>\n
    Axios: https://axios-http.com/docs/intro,\n
    Leaflet: https://www.npmjs.com/package/leaflet,\n
    Moment: https://www.npmjs.com/package/moment
    `);
});

bot.action('react_native', ctx => {
    ctx.replyWithHTML(`
    <b>React Native link consigliati</b>\n
    React Native Doc: https://reactnative.dev,\n
    React Native Routes: https://reactnative.dev/docs/navigation
    `);
});

bot.action('redux', ctx => {
    ctx.replyWithHTML(`
        <b>Redux link utili</b>\n
        Redux: https://redux.js.org,\n
        Redux Saga: https://redux-saga.js.org,\n
        Redux Toolkit: https://redux-toolkit.js.org
    `);
});

bot.action('js', ctx => {
    ctx.replyWithHTML(`
        <b>JavaScript link utili</b>\n
        JavaScrip Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript,\n
        Tuttoria JavaScript W3Schools: https://www.w3schools.com/js
    `);
});


bot.action('video_tuttorial', ctx => {
    ctx.replyWithHTML('<b>Seleziona un tutorial</b>', Markup.inlineKeyboard([
        [
            Markup.button.callback('JavaScript', 'js_video'),
            Markup.button.callback('ReactJs', 'react_video'),
            Markup.button.callback('ReactNative', 'react_native_video')
        ],
        [
            Markup.button.callback('NodeJs', 'node_video'),
            Markup.button.callback('PHP', 'php_video'),
            Markup.button.callback('Laravel', 'laravel_video')
        ],
        [
            Markup.button.callback('Java', 'java_video'),
            Markup.button.callback('Spring', 'spring_video')
        ]
    ]));
});

// VIDEO ACTION
bot.action('js_video', ctx => {
    ctx.replyWithHTML(`<b>Tuttorial JavaScript: https://youtu.be/84TYC44ezIU</b>`);
});

bot.action('react_video', ctx => {
    ctx.replyWithHTML(`<b>Tuttorial ReactJs: https://youtu.be/bMknfKXIFA8</b>`);
});

bot.action('react_native_video', ctx => {
    ctx.replyWithHTML(`<b>Tuttorial ReactNative EN: https://youtu.be/VozPNrt-LfE</b>`);
});

bot.action('node_video', ctx => {
    ctx.replyWithHTML(`<b>Tuttorial NodeJs: https://youtu.be/ee4HEKX3Ud8</b>`);
});

bot.action('php_video', ctx => {
    ctx.replyWithHTML(`<b>Tuttorial PHP: https://youtu.be/sVbEyFZKgqk</b>`);
});

bot.action('laravel_video', ctx => {
    ctx.replyWithHTML(`<b>Tuttorial Laravel(PHP): https://youtu.be/MYyJ4PuL4pY</b>`);
});

bot.action('java_video', ctx => {
    ctx.replyWithHTML(`<b>Tuttorial Java: https://youtu.be/A74TOX803D0</b>`);
});

bot.action('spring_video', ctx => {
    ctx.replyWithHTML(`<b>Tuttorial Spring(Java): https://youtu.be/9SGDpanrc8U</b>`);
});

// THIS IS AMAZINGGGG IWIWIWIIWIWIWIWIWWIIWIWIIIWIW
bot.on('text', async ctx => {
    try {
        if (onOffOpenAi) {
            await ctx.reply('La tua richiesta in elaborazione.....')
            const completion = await openai.createCompletion({
                model: "text-ada-003",
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
});


bot.launch();