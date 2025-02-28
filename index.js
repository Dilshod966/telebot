const TelegramBot = require('node-telegram-bot-api');
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");
const { abort } = require('process');
const { text } = require('stream/consumers');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7215925249:AAFrqzF_q-nCqQ07KYJ6tHwlbNyuay0-hm0';

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
        abc: ["B", "C", "B", "C", "B", "C", "C", "D", "D", "C", "C", "B", "D", "D", "5/13", 9, "10.5", "A", "4/5", 25, "C", 12, "5/13", 14, "D", "A", 7, "12.5", "D", "D", "B", 24, 84, "C", "C", "A", "D", "B", "C", "D"]
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
        abc: ["B", "C", "9/2", "B", "D", "C", "C", "D", "B", "D", "A", "B", "D","C", "C", 27, 85, "16/3", "B", "C", "D", "65/2", "D", "5/2", "C", "D","B","C", "B","B","B", "A", "B", "B", "B", "B", "B", "15/4", 152, "B", 142, "A", "9/2", "C", "C", "D", "D", "A", "B", "D"]
    },
    {
        abc: [7, "A", "C", 136, "C", "C", 52, 5, 19, "C", "4/5", "B", "C", "A","C","D", "B", "C", "8/5", "A", "A", "C", "D", "D", 74, "A", "C", "1/2", "A", "C", "D", "B", "9", "D", "B", 30, "B", "C", "1/2", "C", "C", "D", 2, 2, 18, 2, "5/4", "B", "D", "C"]
    },
    {
        abc: ["B", "C", 1, "4/3", "D", "A", "D", "C", 3, "C", "C", 6, "C", "A", "C", "C", "D", "9", "C","D", 8, "9,16", "B", "D", "D", "C", "C", "B", "C", "B", 1220, "A", "6", "A", "D", "D", "1/2","B", "D", 10, "D", "B", 252, "A", 8, "A", "A", "B","D", "B"]
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
        abc: ["B", "C", 1996, 80, "D", "A", "D", 25, "B" , "B" , "D" , "C" , "D" , "C" , "B" , "A" , "A" , "C" , "D" , "B" , "A" , "D", 32 , 18 , "5,10" , 18 , "D" , 15, 60 , 7 , 48 , "C" , "D" , "D" , 90 , "B" , "A" , 32 , "B" , "C" , "D" , "C" , "A" , 129 , "B" , "B" , "A" , 50 , "C" , 200]
    },
    {
        abc: ["B", "D", 104, 14, "4,5", 3, "B", 4, 100 , 60 , "D" , "D" , "B", 16 , "A" , "D" , "A" , "A" , "B" , 48 , 19 , "B" , "A" , 27, "A", "B", 28, "D" , 14, 125, "A" , "D" , 14, "B" , "B" , 54, 14 , "B" , "C", "D", "11,12,13", "A" , "A" , 150, 3 , "A" , "B" , "A" , "B", "A"]
    },
    {
        abc: ["D" , 23, "D" , "D" , "B" , "5/12" , "A", "B" , "C" , "D", "C" , "A" , "C" , "C" , "B" , "A" , "B" , "B" , "D" , "25/4" , 3 , 15 , 3 , "D" , "D", "B" , "D" , "B" , "B" , "B" , "D" , 1492, "20,65" , 125 , "C" , "A" , "A" , "D", "B" , "1/2", "37/10", 400 , "11/4" , 102 , "C" , "C", "C", "A" , "D" , "D"]
    },
    {
        abc: ["C" , "B" , "C" , 5000, 75 , "D" , "D" , "D" , "A" , "C" , 80, 218 , "3/2" , "C", "C" , "B" , "D" , "C" , "D" , 684, "17/2" , "B", "A" , "D" , "A", "D" , "C" , "B", "D" , 100 , "B" , "C" , "D" , "C" , "C", "C", "C", "C" , "121/100" , "D" , "C" , "D", "C", "B" , "B" , "B" , "D" , "B", "C" , "D"]
    },
    {
        abc: ["B", "D", "C", 1, "3/5", "C", 24, "7/4", "109/100", "C" , "B" , "A", 2500, "B" , "C" , "C" , "B" , "D" , "B" , 67 , "A" , "A" , "D", "C" , "B" , "B" , "D" , "B" , "B", "A", "C", 5 , "B" , "B" , "D", 1 , "C" , "C", "B", "C" , "C" , "D" , 3 , "3/4", "C" , "C" , "A" , "8,9,10", "C" , 6]
    },
    {
        abc: ["B", "D", "D", "B", "A", 150, "C", "C", "A", "B", "D", "B", "B", "D", "A", "A", "C", "C", "A", 3, "A", "A", "A", "D", "A", 5, "B", "A", "A", "C", "A", 6, "D", "D", "D", "C", 6, "D", "C", "A"]
    },
    {
        abc: []
    },
    {
        abc: []
    },
    {
        abc: ["D" , "C" , "D", "B" , "D" , 1 , "C" , "A" , "C" , "4" , "C" , "D" , "B", "B" , "C" , "A" , "D" , "A" , "C" , "C" , "5/13" , "B" , "C" , "A" , "5/2" , "C" , "B" , 18 , "D" , "A" , "D" , "D" , "B" , "B" , "C" , "15/4" , "C" , "D" , "C" , 18 , "D" , "D" , "D" , "C"]
    }

]



const tanlash = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'Lesson 1',
                    callback_data: 1,
                },
                {
                    text: 'Lesson 2',
                    callback_data: 2,
                },
                {
                    text: 'Lesson 3',
                    callback_data: 3,
                },
                
            ],
            [
                {
                    text: 'Lesson 4',
                    callback_data: 4,
                },
                {
                    text: 'Lesson 5',
                    callback_data: 5,
                },
                {
                    text: 'Lesson 6',
                    callback_data: 6,
                },
                
            ],
            [

                {
                    text: 'Lesson 7',
                    callback_data: 7,
                },
                {
                    text: 'Lesson 8',
                    callback_data: 8,
                },
                {
                    text: 'Lesson 9',
                    callback_data: 9,
                },
                
            ],
            [
                {
                    text: 'Lesson 10',
                    callback_data: 10,
                },
                {
                    text: 'Lesson 11',
                    callback_data: 11,
                },
                {
                    text: 'Lesson 12',
                    callback_data: 12,
                },
                
            ],
            [
                {
                    text: 'PRACTICE TEST',
                    callback_data: 25,
                },
                
            ],
            [   
                {
                    text: 'Lesson 13',
                    callback_data: 13,
                },
                {
                    text: 'Lesson 14',
                    callback_data: 14,
                },
                {
                    text: 'Lesson 15',
                    callback_data: 15,
                },
                
            ],
            [
                {
                    text: 'Lesson 16',
                    callback_data: 16,
                },
                {
                    text: 'Lesson 17',
                    callback_data: 17,
                },
                {
                    text: 'Lesson 18',
                    callback_data: 18,
                },
                
            ],
            [
                {
                    text: 'Lesson 19',
                    callback_data: 19,
                },
                {
                    text: 'Lesson 20',
                    callback_data: 20,
                },
                {
                    text: 'Lesson 21',
                    callback_data: 21,
                },
                
            ],
            [
                {
                    text: 'Lesson 22',
                    callback_data: 22,
                },
                {
                    text: 'Lesson 23',
                    callback_data: 23,
                },
                {
                    text: 'Lesson 24',
                    callback_data: 24,
                },
            ]
            
        ]
    }
}


bot.on('callback_query', msg => {
    let ishlajak_testi;
    let chatId = msg.message.chat.id;
    let index = 0;
    for(let i=1;i<=foydalanuvchi.length;i++){
        if (foydalanuvchi[i-1].chat_id == chatId) {
            index = foydalanuvchi[i-1].id;
            foydalanuvchi[index-1].ishlajak_testi = msg.data;
            
        };
    }
    
    
    
    
    ishlajak_testi = msg.data;
    let borliq1 = false;
    let muom = ishlajak_testi - 1;
    let soni = javoblar[muom].abc.length;
    
        for (let key in foydalanuvchi[index - 1]) 
        {   
            
            
            
            if( 'lesson'+ ishlajak_testi == key) {
                bot.sendMessage(chatId, '📌 Siz ushbu testga javob bergansiz.\nQayta javob bera olmaysiz');
                borliq1 = true;
                }
        } 

        if (!borliq1) {
            if(ishlajak_testi != 25) bot.sendMessage(chatId, `📌 Lesson-` + ishlajak_testi + ` testining javoblarini bir chekkadan\nyozib jo'nating. Har bir javobni yangi\nyangi qatordan yozing.\n\nMasalan: 👇\nA\nB\nd\n12.35\n12/6\n...\n Javoblar soni ` + soni + ` ta bo'lishi kerak. Omad 🤞`);
            else bot.sendMessage(chatId, `📌 PRACTICE testining javoblarini bir chekkadan\nyozib jo'nating. Har bir javobni yangi\nyangi qatordan yozing.\n\nMasalan: 👇\nA\nB\nd\n12.35\n12/6\n...\n\n Javoblar soni ` + soni + ` ta bo'lishi kerak. Omad 🤞`);
        }

     
     
}
);



let foydalanuvchi = [];
let iddd = 1;






bot.on('message', (msg) => {

    

    if(msg.text != '/natija'){




        let borliq = false;
        let index = 0

    
    let text = msg.text;
    let chatId = msg.chat.id;
    let sell  = text.split(" ");
    let javoblar1 = text.split('\n');
    
    let xatolar = [];
    let umumiy = 0;
    let lesson_ishlajak2 = false;
    let ishlajak_testi;
    
    for(let i=1;i<=foydalanuvchi.length;i++){
        if (foydalanuvchi[i-1].chat_id == chatId) {
            borliq = true;
            index = foydalanuvchi[i-1].id;
            ishlajak_testi = foydalanuvchi[index-1].ishlajak_testi;
        };
    }





    if(sell.length == 2 && !borliq) {
        
        foydalanuvchi.push({chat_id: chatId, id: iddd, tg_nik: msg.chat.username, ism: sell[0], familiya: sell[1], ishlajak_testi: 0})
        iddd++;
        borliq = true;
        bot.sendMessage(chatId, text +`🙂 \nJavob bermoqchi bo'lgan testingizni tanlang`, tanlash);
    }
    else{
        if(borliq && ishlajak_testi == 0 && lesson_ishlajak2) {
            bot.sendMessage(chatId, `↪️ Iltimos javob bermoqchi bo'lgan\n testni tanlang`, tanlash);
        }
    }






    console.log(ishlajak_testi);

    if(ishlajak_testi != 0 && ishlajak_testi != undefined) {
        let lesson_ishlajak;
        let muom = ishlajak_testi - 1;
        let soni = javoblar[muom].abc.length;
        lesson_ishlajak = 'lesson' + ishlajak_testi;
        

        
        for (let key in foydalanuvchi[index - 1]) 
            {
                if( lesson_ishlajak == key && text != '/start') {
                    
                    
                    bot.sendMessage(chatId, '📌 Siz ushbu testga javob bergansiz.\nQayta javob bera olmaysiz');
                    lesson_ishlajak2 = true;
                    }

            } 


        if(!lesson_ishlajak2 && text != '/start'){
        if(javoblar1.length != soni ) {

            if(ishlajak_testi != 25) bot.sendMessage(chatId, 'Javobingizda kamchilik mavjud 😒\nLesson-' + ishlajak_testi + ' ' + soni + 'ta testdan iborat!!!');
            else bot.sendMessage(chatId, 'Javobingizda kamchilik mavjud 😒\nPRACTICE TEST ' + soni + ' ta testdan iborat!!!');


        }
            
            
            
        else {
            
            for(let i=1;i<=soni;i++) {
                if(javoblar1[i-1] == javoblar[muom].abc[i-1] || javoblar1[i-1].toUpperCase == javoblar[muom].abc[i-1]) {
                    umumiy++;
                    xatolar.push('   ' + i + ' ✅ ')

                }
                else xatolar.push('   ' + i + ' ❌ ')
            }

            if(umumiy/soni >= 0.75) {
                bot.sendMessage(chatId, 'Sizning natijangiz:  ' + ((umumiy*100)/soni).toFixed(1) + '% 😁\nNatijangiz qabul qilindi✅\nBoshqa lessonlarni teshkirish uchun 👉 /start');


                let sana = formatDate(msg.date);

                foydalanuvchi.forEach(user => {
                                        if (user.chat_id == chatId) {
                                            
                                            switch (Number(ishlajak_testi)) {
                                                case 1:  user.lesson1 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 2:  user.lesson2 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 3:  user.lesson3 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 4:  user.lesson4 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 5:  user.lesson5 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 6:  user.lesson6 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 7:  user.lesson7 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 8:  user.lesson8 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 9:  user.lesson9 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 10:  user.lesson10 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 11:  user.lesson11 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 12:  user.lesson12 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 13:  user.lesson13 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 14:  user.lesson14 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 15:  user.lesson15 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 16:  user.lesson16 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 17:  user.lesson17 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 18:  user.lesson18 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 19:  user.lesson19 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 20:  user.lesson20 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 21:  user.lesson21 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 22:  user.lesson22 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 23:  user.lesson23 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 24:  user.lesson24 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                                case 25:  user.lesson25 = (umumiy*100/soni).toFixed(1) + "% (" + sana + ")"; break;
                                            }
                                        }
                                    });
                    
                ishlajak_testi = 0;
                
            }
            else {
                bot.sendMessage(chatId, 'Sizning natijangiz:  ' + (umumiy*100/soni).toFixed(1) + '% 😔\n'+ xatolar + '\nYana bir bor urunib koring.  👉 /start');
                
            }
        }
    }
    }

   


    

    
    


    
    if(text == '/start'){
        
        if(borliq) bot.sendMessage(chatId, `📌 Javob bermoqchi bo'lgan testingizni\ntanlang`, tanlash);
        else bot.sendMessage(chatId, 'Assalomu alaykum 😊 \n\nIsm Familiya kiriting!.\n🔔 Elsatma kiritilgan Ism Familiyani \nozgartirishni iloji yuq. Masalan: 👇\nDilshodbek Bahodirov\n\n⚠️ Etiborliroq boling.');
    }
    else {
        if (!borliq) bot.sendMessage(chatId, '🫵 Ism Familiya kiritmasangiz botdan \nfoydala olmaysiz. Masalan: 👇\nDilshodbek Bahodirov)');
    }
    



    }
});










bot.on("polling_error", (error) => {
    console.error("❌ Polling xatosi yuz berdi!");
    console.error("➡️ Xato kodi:", error.code || "Noma'lum");
    console.error("➡️ HTTP Status:", error.response?.statusCode || "Noma'lum");
    console.error("➡️ Xabar:", error.message || "Yo‘q");
    console.error("➡️ Xato obyekti:", JSON.stringify(error, null, 2));
});


function formatDate(a) {
    // Vaqtni millisekundlarga o'tkazish
    const date = new Date(a * 1000);

    // Sana va vaqtni chiqarish
    const yil = date.getFullYear();
    const oy = String(date.getMonth() + 1).padStart(2, "0"); // Oy 0 dan boshlanadi
    const kun = String(date.getDate()).padStart(2, "0");
    const soat = String(date.getHours()).padStart(2, "0");
    const minut = String(date.getMinutes()).padStart(2, "0");
    

    return `${yil}-${oy}-${kun} ${soat}:${minut}`;
}















bot.on('message', (msg) => {


    if(msg.text == '/natija'){

        // Fayl nomi
        const filePath = "Natijalar.xlsx";
        
        // Faylni o'chirish
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error("❌ Faylni o‘chirishda xatolik:", err);
            } else {
                console.log("✅ Fayl muvaffaqiyatli o‘chirildi!");
            }
        });
        
        

        async function createExcel() {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Natijalar");

        // 1️⃣ Ustunlarni belgilash
        worksheet.columns = [
            
            { header: "№", key: "id", width:5},
            { header: "Ism", key: "ism", width: 25},
            { header: "Familiya", key: "familiya", width: 25 },
            { header: "Telegram Nick", key: "tg_nik", width: 22 },
            { header: "Lesson 1", key: "lesson1", width: 22 },
            { header: "Lesson 2", key: "lesson2", width: 22 },
            { header: "Lesson 3", key: "lesson3", width: 22 },
            { header: "Lesson 4", key: "lesson4", width: 22 },
            { header: "Lesson 5", key: "lesson5", width: 22 },
            { header: "Lesson 6", key: "lesson6", width: 22 },
            { header: "Lesson 7", key: "lesson7", width: 22 },
            { header: "Lesson 8", key: "lesson8", width: 22 },
            { header: "Lesson 9", key: "lesson9", width: 22 },
            { header: "Lesson 10", key: "lesson10", width: 22 },
            { header: "Lesson 11", key: "lesson11", width: 22 },
            { header: "Lesson 12", key: "lesson12", width: 22 },
            { header: "Practice Test", key: "lesson25", width: 22 },
            { header: "Lesson 13", key: "lesson13", width: 22 },
            { header: "Lesson 14", key: "lesson14", width: 22 },
            { header: "Lesson 15", key: "lesson15", width: 22 },
            { header: "Lesson 16", key: "lesson16", width: 22 },
            { header: "Lesson 17", key: "lesson17", width: 22 },
            { header: "Lesson 18", key: "lesson18", width: 22 },
            { header: "Lesson 19", key: "lesson19", width: 22 },
            { header: "Lesson 20", key: "lesson20", width: 22 },
            { header: "Lesson 21", key: "lesson21", width: 22 },
            { header: "Lesson 22", key: "lesson22", width: 22 },
            { header: "Lesson 23", key: "lesson23", width: 22 },
            { header: "Lesson 24", key: "lesson24", width: 22 }
            
            
        ];


        worksheet.getRow(1).eachCell((cell) => {
            cell.font = { bold: true, color: { argb: "FFFFFF" }, size: 14 }; // Oq rang
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "808080" } // Moviy fon
            };
            cell.alignment = { horizontal: "center" };
            cell.border = {
                top: { style: "thin" },
                left: { style: "thin" },
                bottom: { style: "thin" },
                right: { style: "thin" }
            };
        });
    // 2️⃣ Ma'lumotlar
        

            // 3️⃣ Har bir obyektni qo‘shish
            foydalanuvchi.forEach((row) => {
                worksheet.addRow(row);
            });

            // 4️⃣ Faylni saqlash
            await workbook.xlsx.writeFile("Natijalar.xlsx");
            
        }


            createExcel();






            function yuborish() {


                
                const chatId = msg.chat.id;

                
                const filePath2 = path.join(__dirname, "Natijalar.xlsx");

                // Faylni yuborish
                bot.sendDocument(chatId, fs.createReadStream(filePath2),{
                    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                })
                    .then(() => {
                        console.log("✅ Fayl yuborildi!");
                    })
                    .catch((err) => {
                        console.error("❌ Xatolik yuz berdi333333:", err);
                    });

            }

            setTimeout(yuborish, 2000);
          
            
            

            
           



    }
})