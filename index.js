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
    }
])

let javoblar = [
    {
        abc: [9, 9, 155, "D", 3, 4, "A", "B", 3, "B", "A", "B", 9, 8, "A", "B", "B", "D", "D", "C", "B", "C", "C", "B", "A", "D", "A", "C", "D", "A", "C", "A", "D", 4, "C", "D", "D", "B", "A", "D"]
    },
    {
        abc: ["D", "A", "C", "D", "C", "B", "D", 11, "D", "B", "B", "B", "C", "A", "A", "C", "7/3", 210, "B", "D", "A", "A", "B", "B", "C", "D", "D", "D", "A", 1, "7,8,13", "8", "B", "C", "C", "D", "C", "3/8", "A", "1,4"]
    },
    {
        abc: ["B", "A", 4, "D", "B", "D", "C", "B", "A", "A", "5", "D", "1/4", "D", "C", "D", "3/2", "D", "B", "B", "C", 2, "B", "A", 4, "B", "B", "A", "A", "8/3", "C", 510, "C", "D", "3", "D", 25, "D", 15, "C" ]
    },
    {
        abc: ["D", "C", "A", "D", 8, "B", "A", "D", "B", "B", "B", "2", "B", "C", "C", 23, "C", "D", "B", "A", "C", "B", "D", "C", "B", "D", "A", "A", "B", "C", "B", 6, "C", 7, "C", "C", "D", "4/3", "A", "C" ]
    },
    {
        abc: ["A", "A", "C", "D", "A", "9", "B", "C", "C", "D", "A", "C", "A", "B", 3, 6, "3/2", "C", "D", "C", "A", "E", "C", "D", "D", "D", "B", "D", 11, "C", "C", "B", "D", "4/3", "C", "C", "D", "A", "A", "C"]
    },
    {
        abc: ["B", "C", "B", "C", "B", "C", "C", "D", "D", "C", "C", "B", "D", "D", "5/13", 10.5, "A", "4/5", 25, "C", 12, "5/13", 14, "D", "A", 7, 12.5, "D", "D", "B", 24, 84, "C", "C", "A", "D", "B", "C", "D"]
    },
    {
        abc: ["C", "B", "D", "D", "C", "C", "D", "B", "C", "C", "A", 540, "D", "5", "C", "C", "A", "C", "A", "B", "C", "D", "A", 45, "A", "B", "A", "B", "D", "D", "C", 260, 8, 55, "5/2", "C", "C", "D", "A", "36/5", "C", "B", "B", "C", "C", "A", "D", "C", "C", 6]
    },
    {
        abc: ["B", "C", "C", 240, 4, 70, 112, 25, 27, "C", 120, 5, "D", 108, 3, "C", "C", "21/2", 174, "D", 14, "A", "C", "D", "A", "C", "A", "B", "C", "A", "B", "B", "D", "D", "C", "B", "B", "C", "A", "A", "C", "B", "C", "D", 18, "B", "16/9", 210, "C", 360]
    },
    {
        abc: [38, 9, "C", 6, 81, 32, "D", 90, "D", "B", "C", "A", "B", "D", "C", "A", 14, "B", "C", "A", "D", "B", "D", "A", "C", "1/3", 20, "C", 60, "C", "4,5,6,7", "D", "D", "C", "B", 8, "C", "B", "B", "B", "C", "C", "D", "D", 48, "A", 2, "D", "B", "33/4"]
    },
    {
        abc: ["B", "C", "9/2", "B", "D", "C", "C", "D", "B", "D", "A", "B", "C", "C", 27, 85, "16/3", "B", "C", "D", "65/2", "D", "5/2", "C", "B", "B", "A", "B", "B", "B", "B", "B", "15/4", 152, "B", 142, "A", "9/2", "C", "C", "D", "D", "A", "B", "D"]
    },
    {
        abc: [7, "A", "C", 136, "C", "C", 52, 5, 19, "C", "4/5", "B", "C", "A", "B", "C", "8/5", "A", "A", "C", "D", 74, "A", "C", "1/2", "A", "C", "D", "B", "9", "D", "B", 30, "B", "C", "1/2", "C", "C", "D", 2, 18, 2, "5/4", "B", "D", "C"]
    },
    {
        abc: ["B", "C", 1, "4/3", "D", "A", "D", "C", 3, "C", "C", 6, "C", "A", "C", "C", "D", "9", "D", 8, "9,16", "B", "D", "D", "C", "C", "B", "B", 1220, "A", "6", "A", "D", "D", "1/2", "D", 10, "D", "B", 252, "A", 8, "A", "D", "B"]
    },
    {
        abc: ["B", "C", "B", "B", "C", "C", "B", "B", "B" , "D", "B" , "C" , "B" , "D", "C" , "C" , "D" , "A" , "B", "C", 450 , "C", "B" , "B" , "C" , "D" , "C" , "A" , 30 , "127/5", "C" , "D", "C" , "B" , "C" , "B", "A" , "4,5", "C" , "B"]
    },
    {
        abc: ["A", "B" , "C" , "D", "C" , "A", "D" , "D", "A" , "A" , "A" , "B" , "A" , "B" , 3500 , "A" , "C" , "C" , 15 , "C", "D", "B" , "A" , "A" , "D", "A" , "C" , "A" , "C" , "D" , "D" , "A" , "A" , "C" , "A" , "C" , 8 , "A" , "A" , "B"]
    },
    {
        abc: [12, "D", "C", "D", "B", "A", "C", "D", "C" , "B" , "C" , "B" , "B" , "C" , "D", "B" , "D", "D" , "5" , "A" , "B" , "C" , 60 , "9/2" , "B" , "B" , "D" , "A" , "D" , "D" , "D" , "C" , "A" , "A" , "C" , "A", "B" , "D", "C" , "A"]
    },
    {
        abc: ["D", "C", "C", "D", "A", "24/5", "C", "A", "B" , "B" , "C" , "B" , "C" , "A" , "D" , "B" , "A", "A" , "A" , "D" , "C" , 420, "7/2" , "A" , "B" , "A" , 750, "D" , "D" , "C" , "D", "D" , "C", "D", "5,6,7", "A" , "B" , "B" , "D", "D" , "C" , "C" , "A" , "A" , "B" , "A" , "B" , "A", "A" , "A"]
    },
    {
        abc: ["B", "C", 1996, 80, "D", "A", "D", 25, "B" , "B" , "D" , "C" , "D" , "C" , "B" , "A" , "A" , "C" , "D" , "B" , "A" , "D", 32 , 18 , 5,10 , 18 , "D" , 15, 60 , 7 , 48 , "C" , "D" , "D" , 90 , "B" , "A" , 32 , "B" , "C" , "D" , "C" , "A" , 129 , "B" , "B" , "A" , 50 , "C" , 200]
    },
    {
        abc: ["B", "D", 104, 14, "4,5", 3, "B", 4, 100 , 60 , "D" , "D" , "B", 16 , "A" , "D" , "A" , "A" , "B" , 48 , 19 , "B" , "A" , 27, "A", "B", 28, "D" , 14, 125, "A" , "D" , 14, "B" , "B" , 54, 14 , "B" , "C", "D", "11,12,13", "A" , "A" , 150, 3 , "A" , "B" , "A" , "B", "A"]
    },
    {
        abc: ["D" , 23, "D" , "D" , "B" , "5/12" , "A", "B" , "C" , "D", "C" , "A" , "C" , "C" , "B" , "A" , "B" , "B" , "D" , "25/4" , 3 , 15 , 3 , "D" , "D", "B" , "D" , "B" , "B" , "B" , "D" , 1492, "20,65" , 125 , "C" , "A" , "A" , "D", "B" , "1/2", "37/10", 400 , "11/4" , 102 , "C" , "C", "C", "A" , "D" , "D"]
    },
    {
        abc: ["C" , "B" , "C" , 5000, 75 , "D" , "D" , "D" , "A" , "C" , 80, 218 , "3/2" , "C", "C" , "B" , "D" , "C" , "D" , 684, "17/2" , "B", "A" , "D" , "A", "D" , "C" , "B", "D" , 100 , "B" , "C" , "D" , "C" , "C", "C", "C", "C" , "121/100" , "D" , "C" , "D", "C", "B" , "B" , "B" , "D" , "B", "C" , "D"]
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
        if (bormi) bot.sendMessage(chatId, 'Test natijalarini yuboring. \n Masalan: lesson12*A*B*23.65*24/4*C*D*.....')
        else bot.sendMessage(chatId, 'Ism Familiya kiriting. \n Masalan: Dilshodbek Bahodirov')
    }
    let a = text.split(" ");
    let b = text.slice(0, 6);
    if (a[1] != undefined && b != 'lesson' && !bormi) {
        let ismcha = text.split(" ");
        foydalanuvchi.push({chat_id: chatId, tg_nik: msg.chat.username, ism: ismcha[0], familiya: ismcha[1]})
        console.log(foydalanuvchi);
        bormi = true;
        bot.sendMessage(chatId,  ismcha[0] + ' '+ ismcha[1] +' test javoblaringizni yuboring!\nMasalan: lesson12*A*B*23.65*24/4*C*D*.....')
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
            bot.sendMessage(chatId, "Test javoblarida kamchilik mavjud. \n Masalan: lesson12*A*B*23,65*24/4*C*D*.....\n( Malumot uchun: lesson"+ lesson_number + " -> " + olcham +" ta testdan iborat)");
            
        }
        else {
            let mesta;
            let borliq = true;
            for(let i=1;i<=foydalanuvchi.length;i++){
                if(foydalanuvchi[i-1].chat_id == chatId) mesta = i - 1;
            }
            
            for (let key in foydalanuvchi[mesta]) {
                if(sell[0] == key) {
                    borliq = false;
                }
            }

            if(borliq) {



                let xatolar = [];
                let umumiy=0;
                for(let i=1; i<=olcham;i++){
                if(sell[i]==javoblar[lesson_number-1].abc[i-1] || sell[i] == javoblar[lesson_number-1].abc[i-1].toLowerCase()){ 
                    umumiy++;
                }
                else xatolar.push(i);
                }
            
                if((umumiy/olcham) * 100 >= 75){
                bot.sendMessage(chatId, "Sizning natijangiz:  " + umumiy +"/"+olcham +"\nXatolaringiz: Mavjud emas :)");
                
                foydalanuvchi.forEach(user => {
                    if (user.chat_id == chatId) {
                        
                        switch (lesson_number) {
                            case 1:  user.lesson1 = umumiy +"/"+olcham; break;
                            case 2:  user.lesson2 = umumiy +"/"+olcham; break;
                            case 3:  user.lesson3 = umumiy +"/"+olcham; break;
                            case 4:  user.lesson4 = umumiy +"/"+olcham; break;
                            case 5:  user.lesson5 = umumiy +"/"+olcham; break;
                            case 6:  user.lesson6 = umumiy +"/"+olcham; break;
                            case 7:  user.lesson7 = umumiy +"/"+olcham; break;
                            case 8:  user.lesson8 = umumiy +"/"+olcham; break;
                            case 9:  user.lesson9 = umumiy +"/"+olcham; break;
                            case 10:  user.lesson10 = umumiy +"/"+olcham; break;
                            case 11:  user.lesson11 = umumiy +"/"+olcham; break;
                            case 12:  user.lesson12 = umumiy +"/"+olcham; break;
                            case 13:  user.lesson13 = umumiy +"/"+olcham; break;
                            case 14:  user.lesson14 = umumiy +"/"+olcham; break;
                            case 15:  user.lesson15 = umumiy +"/"+olcham; break;
                            case 16:  user.lesson16 = umumiy +"/"+olcham; break;
                            case 17:  user.lesson17 = umumiy +"/"+olcham; break;
                            case 18:  user.lesson18 = umumiy +"/"+olcham; break;
                            case 19:  user.lesson19 = umumiy +"/"+olcham; break;
                            case 20:  user.lesson20 = umumiy +"/"+olcham; break;
                            case 21:  user.lesson21 = umumiy +"/"+olcham; break;
                            case 22:  user.lesson22 = umumiy +"/"+olcham; break;
                            case 23:  user.lesson23 = umumiy +"/"+olcham; break;
                            case 24:  user.lesson24 = umumiy +"/"+olcham; break;
                        }
                    }
                });



            }
            else bot.sendMessage(chatId, "Sizning natijangiz:  " + umumiy +"/"+olcham +"\nXatolaringiz:"+ xatolar +"\nYana bir bor urinib ko'ring :)");
            

        

        
           
            
            console.log(foydalanuvchi);
            }
            else {
                bot.sendMessage(chatId, "Siz bu Testni ilgari ishlagansiz.\nNatijangiz 75% dan baland bo'lganligi \nsababli qayta topshira olmaysiz!")
            }
        }
    }
    else {
        if (text[0] != '/' && !bormi) {
            bot.sendMessage(chatId, 'Ism Familiyani togri kiriting! \n Namuna: Dilshodbek Bahodirov')
            
        }
        else if(bormi && text[0]=='/') bot.sendMessage(chatId, "Test javoblaringizni to'gri yuboring!\n Masalan: lesson12*A*B*23.65*24/4*C*D*.....");
    }
});

bot.on('polling_error', (error) => {
    console.log(error);
});