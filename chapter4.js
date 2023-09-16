const textElement = document.getElementById('text');
const continueBtn = document.getElementById('chapter1');
var textToType = `"Finally, we reached our hangout place, and we both entered."`;
var index = 0;
var counta = 1;
var countb = 1;
var first = true;
var centeredDiv;
var button1;
var button2;
function typeText() {
    var textSlice = textToType.slice(0, index + 1);
    textElement.textContent = textSlice;
    index++;

    if (index < textToType.length) {
        setTimeout(typeText, 50);
    }
}

typeText();

continueBtn.addEventListener('click', () => {
    if (counta == 1) {
        textToType = `"The place exudes a royal and elegant ambiance."`;
        index = 0;
        textElement.textContent = '';
        const audioElement = document.createElement('audio');
        audioElement.autoplay = true;
        const wavSource = document.createElement('source');
        wavSource.src = 'happy.mp3';
        wavSource.type = 'audio/mpeg';
        audioElement.appendChild(wavSource);
        document.body.appendChild(audioElement);
        typeText();
        counta = 2;
    } else if (counta == 2) {
        textToType = `"I was scanning this beautiful place when a guy called me."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 3;
    } else if (counta == 3) {
        textToType = `"Hey, newbie, come here. What are you staring at?"`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 4;
    } else if (counta == 4) {
        textToType = `"I replied, 'Yeah, I'm coming,' and then I noticed that he was sitting with some people. I walked towards them."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 5;
    }
    else if (counta == 5) {
        textToType = `"I sat next to the boxing guy and noticed that there were a total of five people: the boxing guy, myself, one guy, and two girls."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 6;
    }


    else if (counta == 6) {
        textToType = `"Oh, I've seen that girl at the reception today."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 7;
    }


    else if (counta == 7) {
        textToType = `"I really want to talk to her."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 8;
    }


    else if (counta == 8) {
        textToType = `"Then she started the conversation and asked, 'So, are you also in the first year?'"`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 9;
    }


    else if (counta == 9) {
        textToType = `"I was so nervous that I couldn't even reply."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 10;
    }


    else if (counta == 10) {
        textToType = `"The boxing guy interrupted the conversation and said to everyone, 'Yes, he is in the first year.'"`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 11;
    }


    else if (counta == 11) {
        textToType = `"He put his hand on my shoulder and continued, 'He is also a sportsman and a scholar in high school,' and, most importantly,"`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 12;
    }


    else if (counta == 12) {
        textToType = `"He has a golden A card."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 13;
    }


    else if (counta == 13) {
        textToType = `"Now everyone was staring at me, wanting to see my golden card."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 14;
    }


    else if (counta == 14) {
        textToType = `"The other guy said, 'Hey, that's great! So now we have elite students in our circle.If you don't mind, can you show us your card?'"`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 15;
    }


    else if (counta == 15) {
        textToType = `"I didn't have any other option, as I wanted to be friends with them, so I pulled out the card."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 16;
    }


    else if (counta == 16) {
        textToType = `"And gave it to them."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.classList.add("cardA");
        image.src = "./Acard.jpg";
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        typeText();
        counta = 17;
    }


    else if (counta == 17) {
        textToType = `"Oh, he really does have the Golden A," said the girl.`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.classList.add("cardA");
        image.src = "./Acard.jpg";
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        typeText();
        counta = 18;
    }


    else if (counta == 18) {
        textToType = "What should I do now?";
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 19;

        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("btn");

        button1 = document.createElement("button");
        button1.textContent = `I asked for everyone's introduction.`;

        button2 = document.createElement("button");
        button2.textContent = `Check the menu`;

        centeredDiv.appendChild(button1);
        centeredDiv.appendChild(button2);
        document.body.appendChild(centeredDiv);
    }

    button1.addEventListener("click", function () {
        if (counta == 19) {
            textToType = "Guys, I want to know about you too.";
            index = 0;
            textElement.textContent = '';
            if (centeredDiv) centeredDiv.remove();
            typeText();
            counta = 20;
        }
        continueBtn.addEventListener("click", function () {
            if (counta == 20) {
                textToType = `So, the girls from the reception said, 'Oh yes, we haven't introduced ourselves to you,'`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 21;
            }


            else if (counta == 21) {
                textToType = `"So, I introduced myself first:"`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 22;
            }


            else if (counta == 22) {
                textToType = "Hello, I'm Yuki from the first year, and I have a deep passion for science. My dream is to become a scientist, and I'm excited about the opportunity to assist Haruka in her lab work. I hope we will be good friends.";
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./yuki.jpg";
                image.classList.add("character");
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);
                typeText();
                counta = 25;
            }


            else if (counta == 25) {
                textToType = `Hello, I'm Haruka, a third-year student. I'm excited to continue and build upon a fascinating research project that was left unfinished. Let's be good friends.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./haruka.jpg";
                image.classList.add("character");
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);
                typeText();
                counta = 26;
            }


            else if (counta == 26) {
                textToType = "Hello, I'm Ren, a third-year student with a strong passion for politics. My goal is to join the Japanese government and work towards bringing positive change to our country.";
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./ren.jpg";
                image.classList.add("character");
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);
                typeText();
                counta = 27;
            }


            else if (counta == 27) {
                textToType = "Hi, I'm Takashi, a third-year student. I've spent three years dedicated to the sport of boxing, and I'm also the president of the student council. I'm passionate about both my athletic pursuits and leading our school community.";
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./Takeshi.jpg";
                image.classList.add("character");
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);
                typeText();
                counta = 28;
            }


            else if (counta == 28) {
                textToType = `"Wait, wait, wait, Takashi, you're the council president? So, my first friend in college is the council president!"`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 29;
            }


            else if (counta == 29) {
                textToType = `He smiled, and Ren said, "Ah, is he the president in school? Here, he is our friend," and he playfully punched Takashi's shoulder.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 30;
            }

            else if (counta == 30) {
                textToType = `Yuki folded her hands and said in a childish way, "Ren, it's your turn to handle the bill. I'm hungry!"`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 31;
            }


            else if (counta == 31) {
                textToType = `Ren replied, "I remember, I remember. Go ahead and check the menu and order whatever you want." He said to everyone and added, "The treat is from my side."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 32;
            }


            else if (counta == 32) {
                textToType = `So, everyone picked the menu. Oh, as I guessed, the prices on the menu are quite high. I can't even afford water.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                
                typeText(); counta = 33;
            }


            else if (counta == 33) {
                textToType = `She said her turn, and then I think, "After a few days, my turn is going to come.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                
                typeText();
                counta = 34;
            }


            else if (counta == 34) {
                textToType = ` Instead of that, I should pay today because I'm new, so no one really wants to take a treat from me, and the bill will be lower.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                
                typeText();
                counta = 35;
            }


            else if (counta == 35) {
                textToType = `So, I said, "I will handle the bill. Today's treat is from my side."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                
                typeText();
                counta = 36;
            }


            else if (counta == 36) {
                textToType = `Haruka said, "Sorry, but we can't do that. Only the most senior students can give the treat because they are interns, and first-year students can have that privilege. You can throw a party on your birthday, though, and be ready because we all really love food."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 37;
            }


            else if (counta == 37) {
                textToType = `I asked, "So, Yuki and I don't have to pay the bill at all?"`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 38;
            }


            else if (counta == 38) {
                textToType = `Takashi said, "Yes, but not until you become an intern."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 39;
            }


            else if (counta == 39) {
                textToType = `Everyone laughed, and they placed their orders.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 40;
            }


            else if (counta == 40) {
                textToType = `I ordered fish tacos.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 41;
            }


            else if (counta == 41) {
                textToType = `"Our orders arrived, and we all enjoyed our meal while sharing funny stories and memorable moments."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 42;
            }


            else if (counta == 42) {
                textToType = `During the meal, Haruka's phone rang, and she excused herself to take the call, heading outside.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./phone.jpg";
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);

                const audioElement = document.createElement('audio');
                audioElement.autoplay = true;
                const wavSource = document.createElement('source');
                wavSource.src = 'phone.mp3';
                wavSource.type = 'audio/wav';
                audioElement.appendChild(wavSource);
                document.body.appendChild(audioElement);
                typeText();
                counta = 43;
            }


            else if (counta == 43) {
                textToType = `After some time, she came back, and we all finished our meal together.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 44;
            }


            else if (counta == 44) {
                document.querySelector('html').style.backgroundImage = 'url("./outside.jpg")';
                textToType = `After having dinner, Ren paid the bill, and we left the restaurant.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 45;
            }
            else if (counta == 45) {
                textToType = `Haruka said, "So guys, I'll meet you later. I just got a call that our experiment is in its final stage."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 46;
            }


            else if (counta == 46) {
                textToType = `Then, Haruka and Yuki headed to the university.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 47;
            }


            else if (counta == 47) {
                textToType = `Takashi and Ren returned to their respective homes.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 48;
            }


            else if (counta == 48) {
                textToType = "I took my bicycle and headed towards home. I had to ride it for another 11 kilometers. Oh God, help me.";
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 49;
            } else if (counta == 49) {
                textToType = `Heading home, I thought that the first day was so good, and I had made so many friends. At last, I had those people I could truly call friends.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 50;
            } else if (counta == 50) {
                textToType = ` You have completed this chapter.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("btn");

                button1 = document.createElement("button");
                button1.textContent = "HOME";
                button2 = document.createElement("button");
                button2.textContent = "Chapter 5";
                centeredDiv.appendChild(button1);
                centeredDiv.appendChild(button2);
                document.body.appendChild(centeredDiv);

                button1.addEventListener("click", function () {
                    window.location.href = "index.html";
                });
                button2.addEventListener("click", function () {
                    window.location.href = "chapter5.html";
                });
                typeText();
                counta = 50;
            }
        })

    });
    button2.addEventListener("click", function () {
        if (countb == 1) {
            textToType = "Let's take a look at the menu while they examine my card.";
            index = 0;
            textElement.textContent = '';
            if (centeredDiv) centeredDiv.remove();
            typeText();
            countb = 2;
        } continueBtn.addEventListener("click", function () {
            if (countb == 2) {
                textToType = "So, everyone picked the menu. Oh, as I guessed, the prices on the menu are quite high. I can't even afford water.";
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                
                typeText();
                countb = 3;
            } else if (countb == 3) {
                textToType = ` I think, "After a few days, my turn is going to come.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                
                typeText();
                countb = 4;
            }


            else if (countb == 4) {
                textToType = ` Instead of that, I should pay today because I'm new, so no one really wants to take a treat from me, and the bill will be lower.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 5;
            }


            else if (countb == 5) {
                textToType = `So, I said, "I will handle the bill. Today's treat is from my side."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                
                typeText();
                countb = 6;
            }


            else if (countb == 6) {
                textToType = `A girl said, "Sorry, but we can't do that. Only the most senior students can give the treat because they are interns, and first-year students can have that privilege. You can throw a party on your birthday, though, and be ready because we all really love food."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 7;
            }


            else if (countb == 7) {
                textToType = `I asked, "So, I don't have to pay the bill at all?", I asked`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 8;
            }
            else if (countb == 8) {
                textToType = `boxing guy said, "Yes, but not until you become an intern."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 9;
            }


            else if (countb == 9) {
                textToType = `Everyone laughed, and they placed their orders.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 10;
            }


            else if (countb == 10) {
                textToType = `I ordered fish tacos.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 11;
            }


            else if (countb == 11) {
                textToType = `"So guys, while we wait for our orders, can you all introduce yourselves?"`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 12;
            }


            else if (countb == 12) {
                textToType = `So, the girls from the reception said, 'Oh yes, we haven't introduced ourselves to you'`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 13;
            }


            else if (countb == 13) {
                textToType = `"So, I introduced myself first:"`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 14;
            }


            else if (countb == 14) {
                textToType = `Hello, I'm Yuki from the first year, and I have a deep passion for science. My dream is to become a scientist, and I'm excited about the opportunity to assist Haruka in her lab work. I hope we will be good friends.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./yuki.jpg";
                image.classList.add("character");
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);
                typeText();
                countb = 15;
            }


            else if (countb == 15) {
                textToType = `Hello, I'm Haruka, a third-year student. I'm excited to continue and build upon a fascinating research project that was left unfinished. Let's be good friends.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./haruka.jpg";
                image.classList.add("character");
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);
                typeText();
                countb = 16;
            }


            else if (countb == 16) {
                textToType = `Hello, I'm Ren, a third-year student with a strong passion for politics. My goal is to join the Japanese government and work towards bringing positive change to our country.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./ren.jpg";
                image.classList.add("character");
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);
                typeText();
                countb = 17;
            }


            else if (countb == 17) {
                textToType = `Hi, I'm Takashi, a third-year student. I've spent three years dedicated to the sport of boxing, and I'm also the president of the student council. I'm passionate about both my athletic pursuits and leading our school community.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./Takeshi.jpg";
                image.classList.add("character");
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);
                typeText();
                countb = 18;
            }


            else if (countb == 18) {
                textToType = `"Wait, wait, wait, Takashi, you're the council president? So, my first friend in college is the council president!"`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 19;
            }


            else if (countb == 19) {
                textToType = `He smiled, and Ren said, "Ah, is he the president in school? Here, he is our friend," and he playfully punched Takashi's shoulder.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 20;

            } else if (countb == 20) {
                textToType = "Our orders arrived, and we all enjoyed our meal while sharing funny stories and memorable moments.";
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 21;
            }


            else if (countb == 21) {
                textToType = `During the meal, Haruka's phone rang, and she excused herself to take the call, heading outside.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./phone.jpg";
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);

                const audioElement = document.createElement('audio');
                audioElement.autoplay = true;
                const wavSource = document.createElement('source');
                wavSource.src = 'phone.mp3';
                wavSource.type = 'audio/wav';
                audioElement.appendChild(wavSource);
                document.body.appendChild(audioElement);
                typeText();
                countb = 22;
            }


            else if (countb == 22) {
                textToType = `After some time, she came back, and we all finished our meal together.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 23;
            }


            else if (countb == 23) {
                document.querySelector('html').style.backgroundImage = 'url("./outside.jpg")';
                textToType = `After having dinner, Ren paid the bill, and we left the restaurant.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 24;
            }


            else if (countb == 24) {
                textToType = `Haruka said, "So guys, I'll meet you later. I just got a call that our experiment is in its final stage."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 25;
            }


            else if (countb == 25) {
                textToType = `Then, Haruka and Yuki headed to the university.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 26;
            }


            else if (countb == 26) {
                textToType = `Takashi and Ren returned to their respective homes.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 27;
            }


            else if (countb == 27) {
                textToType = "I took my bicycle and headed towards home. I had to ride it for another 11 kilometers. Oh God, help me.";
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 28;
            }
            else if (countb == 28) {
                textToType = `Heading home, I thought that the first day was so good, and I had made so many friends. At last, I had those people I could truly call friends.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 30;
            
            } else if (countb == 30) {
                textToType = ` You have completed this chapter.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("btn");

                button1 = document.createElement("button");
                button1.textContent = "HOME";
                button2 = document.createElement("button");
                button2.textContent = "Chapter 5";
                centeredDiv.appendChild(button1);
                centeredDiv.appendChild(button2);
                document.body.appendChild(centeredDiv);

                button1.addEventListener("click", function () {
                    window.location.href = "index.html";
                });
                button2.addEventListener("click", function () {
                    window.location.href = "chapter5.html";
                });
                typeText();
                countb = 30;
            }



        })
    })
});