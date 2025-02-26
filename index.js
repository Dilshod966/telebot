const TelegramBot = require('node-telegram-bot-api');
const { abort } = require('process');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7215925249:AAEcxB9YsedcELMpNwlTsvBNBLMOYmpM3ak';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



bot.setMyCommands([
    {
        command: '/start',
        description: 'Bot ni qayta ishga tushirish',
    },
    {
        command: '/info',
        description: 'Bot haqida malumot',
    },
    {
        command: '/ism',
        description: 'Ism Familiya kirish'
    }
])

let javoblar = [
    {
        abc: [9, 9, 155, "D", 3, 4, "A", "B", 3, "B", "A", "B", 9, 8, "A", "B", "B", "D", "D", "C", "B", "C", "C", "B", "A", "D", "A", "C", "D", "A", "C", "A", "D", 4, "C", "D", "D", "B", "A", "D"]
    },
    {
        abc: ["D", "A", "C", "D", "C", "B", "D", 11, "D", "B", "B", "B", "C", "A", "A", "C", 7/3, 210, "B", "D", "A", "A", "B", "B", "C", "D", "D", "D", "A", 1, "7,8,13", "8", "B", "C", "C", "D", "C", 3/8, "A", "1,4"]
    },
    {
        abc: ["B", "A", 4, "D", "B", "D", "C", "B", "A", "A", "5", "D", 1/4, "D", "C", "D", 3/2, "D", "B", "B", "C", 2, "B", "A", 4, "B", "B", "A", "A", 8/3, "C", 510, "C", "D", "3", "D", 25, "D", 15, "C" ]
    },
    {
        abc: ["D", "C", "A", "D", 8, "B", "A", "D", "B", "B", "B", "2", "B", "C", "C", 23, "C", "D", "B", "A", "C", "B", "D", "C", "B", "D", "A", "A", "B", "C", "B", 6, "C", 7, "C", "C", "D", 4/3, "A", "C" ]
    },
    {
        abc: ["A", "A", "C", "D", "A", "9", "B", "C", "C", "D", "A", "C", "A", "B", 3, 6, 3/2, "C", "D", "C", "A", "E", "C", "D", "D", "D", "B", "D", 11, "C", "C", "B", "D", 4/3, "C", "C", "D", "A", "A", "C"]
    },
    {
        abc: ["B", "C", "B", "C", "B", "C", "C", "D", "D", "C", "C", "B", "D", "D", 5/13, 10.5, "A", 4/5, 25, "C", 12, 5/13, 14, "D", "A", 7, 12.5, "D", "D", "B", 24, 84, "C", "C", "A", "D", "B", "C", "D"]
    },
    {
        abc: ["C", "B", "D", "D", "C", "C", "D", "B", "C", "C", "A", 540, "D", "5", "C", "C", "A", "C", "A", "B", "C", "D", "A", 45, "A", "B", "A", "B", "D", "D", "C", 260, 8, 55, 5/2, "C", "C", "D", "A", 36/5, "C", "B", "B", "C", "C", "A", "D", "C", "C", 6]
    },
    {

    }
]




let foydalanuvchi = [];








bot.on('message', (msg) => {
    let bormi = false;
    let index;
    const chatId = msg.chat.id;
    const text = msg.text;
    if (!bormi) {
        for(let i=1; i<=foydalanuvchi.length; i++) {
            if(foydalanuvchi[i-1].chat_id == chatId) {bormi = true; index = i-1;}
        }
    }
    if (text == '/start') {
        if (bormi) bot.sendMessage(chatId, 'Test natijalarini yuboring. \n Masalan: lesson12*a*b*b*b*b*.....')
        else bot.sendMessage(chatId, 'Ism Familiya kiritingss \n Masalan: Dilshodbek Bahodirov')
    }
    let a = text.split(" ");
    let b = text.slice(0, 6);
    if (a[1] != undefined && b != 'lesson' && !bormi) {
        let ismcha = text.split(" ");
        foydalanuvchi.push({ism: ismcha[0], familiya: ismcha[1], chat_id: chatId, })
        console.log(foydalanuvchi);
        bormi = true;
        bot.sendMessage(chatId, 'Ism Familiya qabul qilindi. \nTest javoblaringizni yuboring!\n Masalan: lesson12*a*b*b*b*b*.....')
    }
    else {
        if (bormi &&  b != 'lesson')  bot.sendMessage(chatId, 'Test kalitlarini bugun yuborasizmi??');
    }
    if (b == 'lesson' && bormi) {
        let less = text.slice(6,8);
        let sell = text.split("*");
        let lesson_number = 0;
        let olcham = 40;
        if(less[1]=="*"){
            lesson_number = Number(less[0]);
        }
        else lesson_number = Number(less);
        if ((lesson_number > 6 && lesson_number < 13) || lesson_number > 15) olcham = 50;
        if (lesson_number==0 || lesson_number > 24 || sell.length != olcham + 1) {
            bot.sendMessage(chatId, "Test javoblarida kamchilik mavjud. \n Masalan: lesson12*a*b*b*b*b*.....\n( Malumot uchun: lesson"+ lesson_number + " -> " + olcham +" ta testdan iborat)");
            
        }
        else {
            let xatolar = [];
            let umumiy=0;
            for(let i=1; i<=olcham;i++){
                if(sell[i]==javoblar[lesson_number-1].abc[i-1]){ 
                    umumiy++;
                }
                else xatolar.push(i);
            }
            bot.sendMessage(chatId, "Sizning natijangiz:  " + umumiy +"/"+olcham +"\nXatolaringiz:"+ xatolar);

        }
    }
    else {
        if (text[0] != '/' && !bormi) {
            bot.sendMessage(chatId, 'Ism Familiyani togri kiriting! \n Namuna: Dilshodbek Bahodirov')
            
        }
        else if(bormi && text[0]=='/') bot.sendMessage(chatId, "Test javoblaringizni to'gri yuboring!\n Masalan: lesson12*a*b*b*b*b*.....");
    }





    


 
});

