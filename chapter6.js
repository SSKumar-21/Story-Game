const textElement = document.getElementById('text');
const continueBtn = document.getElementById('chapter1');
var textToType = "SUMMARY: The main character receives a late-night call from Yuki in danger. he and his friends rush to the college with friends and find Yuki safe but in possession of the golden A card. Questions arise about how Yuki acquired it and who frightened her.";
var index = 0;
var counta = 1;
var countb = 1;
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
continueBtn.addEventListener("click", function () {
    if (counta == 1) {
        textToType = "We entered the room and were ready to listen to Yuki's explanation.";
        index = 0;
        textElement.textContent = '';
        const audioElement = document.createElement('audio');
        audioElement.autoplay = true;
        const wavSource = document.createElement('source');
        audioElement.setAttribute('autoplay', true); 
        audioElement.setAttribute('loop', true);     
        wavSource.src = 'moonlight.mp3';
        wavSource.type = 'audio/mpeg';
        audioElement.appendChild(wavSource);
        document.body.appendChild(audioElement);
        typeText();
        counta = 2;
    } else if (counta == 2) {
        textToType = `Before Yuki could say anything, Haruka interrupted, asking, "How did you get his gold card?"`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 3;
    } else if (counta == 3) {
        textToType = `Yuki clarified, "When I asked to see his card and returned it to him, I intentionally gave him my card instead of his. Without checking it, he put my card in his bag."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 4;
    } else if (counta == 4) {
        textToType = `I asked Yuki softly, "Why did you do that?"`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 5;
    } else if (counta == 5) {
        textToType = `Yuki explained, "Haruka, you know our project on cell regeneration that we were working on got interrupted. It's restarting now, and it's our responsibility to complete it."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 6;
    } else if (counta == 6) {
        textToType = "And after 14 years, it's restarted now, and it's our responsibility to complete it.";
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 7;
    } else if (counta == 7) {
        textToType = `Haruka asked, "Yes, I know that, but why are you bringing it up now?"`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 8;
    }


    else if (counta == 8) {
        textToType = `Yuki explained, "I want to find out who initiated that project, why it stopped, and why, after 14 years, they want us to complete it."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 9;
    }


    else if (counta == 9) {
        textToType = `Takashi asked, "So, what did you find?"`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 10;
    }


    else if (counta == 10) {
        textToType = `Yuki explained further, "It's all classified files, and that's why I need the golden A card to access it."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 11;
    }


    else if (counta == 11) {
        textToType = `Because only those with a golden A card are allowed to access these types of files.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 12;
    }


    else if (counta == 12) {
        textToType = `Ren said, "So, therefore, you took his card?"`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 13;
    }


    else if (counta == 13) {
        textToType = `I said, "Yuki, if you asked for it, I didn't deny your request. I gave you my card."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 14;
    }


    else if (counta == 14) {
        textToType = `Yuki said, "Sorry, I acted like this," and tears welled up in her eyes.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 15;
    }

    else if (counta == 15) {
        textToType = `I comforted her, saying, "That's okay, it's all fine now," as I gently wiped away her tears.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 16;
    }


    else if (counta == 16) {
        textToType = `Then Haruka asked, "What did you find out about the experiment?"`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 17;
    }


    else if (counta == 17) {
        textToType = `Yuki explained, "I logged in and made a copy of the file in this drive," as she showed us the drive.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./drive.png";
        image.classList.add("disk");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 18;
    }


    else if (counta == 18) {
        textToType = `Yuki continued, "When the file copying was completed, I heard some noise from the corridor, so I quickly hid under the desk and called you guys."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 19;
    }


    else if (counta == 19) {
        textToType = `Yuki added, "The stranger came in and checked the lab to see who was there and if anyone was accessing the data."`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 20;
    } else if (counta == 20) {
        textToType = "That guy had something like a rod in his hand. He entered the room and formatted the computer I was working on. ";
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 21;
    }


    else if (counta == 21) {
        textToType = `"After that, he went to other rooms, and that's when you guys came," Yuki explain`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 22;

        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("btn");

        button1 = document.createElement("button");
        button1.textContent = "Take action...";

        button2 = document.createElement("button");
        button2.textContent = "Do nothing for now...";

        centeredDiv.appendChild(button1);
        centeredDiv.appendChild(button2);
        document.body.appendChild(centeredDiv);

        button1.addEventListener("click", function () {
            if (counta == 22) {
                textToType = `I ran towards the switchboard, and everyone was shocked to see me running suddenly.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 23
            } continueBtn.addEventListener("click", function () {
                if (counta == 23) {
                    textToType = `I switched off the lights and said, 'Everyone, keep quiet.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 24
                } else if (counta == 24) {
                    textToType = `And, trying to stay close together because the room was full of darkness.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 25;
                }
                else if (counta == 25) {
                    textToType = `I moved closer to them and said, "If the stranger guy is searching for the person who accessed the files, he must still be in this building."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 26;
                } else if (counta == 26) {
                    textToType = `"And if the lights are on, he can easily find us and may harm us," I added.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 27;
                }


                else if (counta == 27) {
                    textToType = `Everyone agreed, and suddenly the sound of footsteps came closer and closer to the room.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 28;
                }

                else if (counta == 28) {
                    textToType = `And a shadow appeared at the door.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 29;
                }


                else if (counta == 29) {
                    textToType = `Takashi and Ren are ready to fight, and I covered the girls from my back, preparing for whatever might come through that door.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 30;
                }


                else if (counta == 30) {
                    textToType = `The shadow moved on without entering the room, and it seemed we were safe for now.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 31;
                }


                else if (counta == 31) {
                    textToType = `I tried to come up with a plan, so I said, "Listen guys, I have a plan."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 32;
                }


                else if (counta == 32) {
                    textToType = `Haruka asked, "What plan?"`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 33;
                }


                else if (counta == 33) {
                    textToType = `I replied to everyone, "Being here for the whole night is not an option. Let's split up into teams. One team will search for that man, and the second team will call for help and try to find out what's in these files."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 34;
                }


                else if (counta == 34) {
                    textToType = `"Exactly," I continued, "everything is happening because of these files, so it's crucial to know what's in them."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 35;
                }


                else if (counta == 35) {
                    textToType = `Takashi agreed, saying, "Okay then, here's the team. You and Ren will go and find the man, while Haruka, Yuki, and I will stay here, contact for help, and try to find out what that file contains."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 36;
                }


                else if (counta == 36) {
                    textToType = `Everyone agreed to the plan, but Yuki appeared visibly upset and kept watching me continuously, as if she were trying to stop me from going.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 37;
                }


                else if (counta == 37) {
                    textToType = `Ren suggested, "Lock the door from the inside. When we come back, we'll knock on the door three times."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 38;
                }


                else if (counta == 38) {
                    document.querySelector('html').style.backgroundImage = 'url("./nighthallway.jpg")';
                    textToType = `We all agreed, and then Ren and I went outside while they locked the door behind us.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 39;
                }


                else if (counta == 39) {
                    textToType = `I asked Ren, "Do you know how to fight, just in case?"`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 40;
                } else if (counta == 40) {
                    textToType = `Ren replied while adjusting his glasses, "Who do you think Takashi, the boxer, practices with?"`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 41;
                }


                else if (counta == 41) {
                    textToType = `I said, "Wow, then let's start searching our college."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 42;
                }
                else if (counta == 42) {
                    textToType = `Ren agreed, and we began searching the college together.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 43;
                }


                else if (counta == 43) {
                    document.querySelector('html').style.backgroundImage = 'url("./nightschool.jpg")';
                    textToType = `Ground looks so beautiful in night`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 44;
                }


                else if (counta == 44) {
                    document.querySelector('html').style.backgroundImage = 'url("./nightreception.jpg")';
                    textToType = `Recption:`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 45;
                }


                else if (counta == 45) {
                    document.querySelector('html').style.backgroundImage = 'url("./nightfootball.jpg")';
                    textToType = `Football Ground:`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 46;
                }


                else if (counta == 46) {
                    document.querySelector('html').style.backgroundImage = 'url("./nightcanteen.jpg")';
                    textToType = `Canteen is so silent today...`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 47;
                }


                else if (counta == 47) {
                    document.querySelector('html').style.backgroundImage = 'url("./nightboxing.jpg")';
                    textToType = `boxing ring looks so cool in night...`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 48;
                }


                else if (counta == 48) {
                    document.querySelector('html').style.backgroundImage = 'url("./nightbb.jpg")';
                    textToType = `BasketBall Court: `;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 49;
                }


                else if (counta == 49) {
                    document.querySelector('html').style.backgroundImage = 'url("./nighthallway.jpg")';
                    textToType = `We both searched the entire college. We returned from our search without finding anyone. I think the guy must have left. That's the good news.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 50;
                }


                else if (counta == 50) {
                    document.querySelector('html').style.backgroundImage = 'url("./nightcs.jpg")';
                    textToType = `We knocked on the door three times, and Takashi opened it with a sad expression on his face.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 51;
                }


                else if (counta == 51) {
                    textToType = `We explained, "The guy left the college, but why do you all look so sad? Did something happen?"`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 52;
                }


                else if (counta == 52) {
                    textToType = `Yuki started crying, Haruka was holding back her tears, and Takashi said, "Newbie, don't overreact. We don't know how to say this, but you're the BLUE ROSE."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 53;
                }


                else if (counta == 53) {
                    textToType = `I replied while laughing, "Takashi, what are you saying? I'm your friend, not a flower or something."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 54;
                }


                else if (counta == 54) {
                    textToType = `Haruka said, "Come here and check out these files."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 55;
                }


                else if (counta == 55) {
                    textToType = `You have completed this chapter.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("btn");

                    button1 = document.createElement("button");
                    button1.textContent = "HOME";
                    button2 = document.createElement("button");
                    button2.textContent = "Chapter 7";
                    centeredDiv.appendChild(button1);
                    centeredDiv.appendChild(button2);
                    document.body.appendChild(centeredDiv);

                    button1.addEventListener("click", function () {
                        window.location.href = "index.html";
                    });
                    button2.addEventListener("click", function () {
                        window.location.href = "chapter7.html";
                    });
                    countb = 38;

                }
            })
        });
        button2.addEventListener("click", function () {
            if (countb == 1) {
                textToType = `As we continue listening to Yuki's explanation, she describes her actions in detail.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 2;
            } continueBtn.addEventListener("click", function () {
                if (countb == 2) {
                    textToType = `I and my friends remain focused on her account of the events, trying to make sense of the situation and determine the best course of action.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 3;
                } else if (countb == 3) {
                    textToType = `And suddenly, as Yuki describes the stranger's movements in the corridor, the lab door bursts open, and the stranger rushes inside with a menacing expression. `;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 4;
                }


                else if (countb == 4) {
                    textToType = `Without a second thought, I step forward, putting yourself between Yuki and the stranger, determined to protect her.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 5;
                }


                else if (countb == 5) {
                    textToType = `In the ensuing struggle, the stranger reveals a concealed weapon, and a fatal blow is struck.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 6;
                }


                else if (countb == 6) {
                    textToType = `With your last breath, I manage to push the stranger away, ensuring Yuki's safety.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 7;
                }


                else if (countb == 7) {
                    textToType = `As I collapse to the floor, your vision blurs, and I can hear Yuki's frantic cries as darkness envelops you.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 8;
                }


                else if (countb == 8) {
                    textToType = 'You selected the wrong method to deal with the situation" Restarted the chapter again.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 8;

                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("btn");

                    buttonaa = document.createElement("button");
                    buttonaa.textContent = "HOME";
                    buttonbb = document.createElement("button");
                    buttonbb.textContent = "Restart";
                    centeredDiv.appendChild(buttonaa);
                    centeredDiv.appendChild(buttonbb);
                    document.body.appendChild(centeredDiv);

                    buttonaa.addEventListener("click", function () {
                        window.location.href = "index.html";
                    });

                    buttonbb.addEventListener("click", function () {
                        window.location.href = "chapter6.html";
                    });
                }
            });
        });
    }
});