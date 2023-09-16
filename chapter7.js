const textElement = document.getElementById('text');
const continueBtn = document.getElementById('chapter1');
var textToType = "As Haruka suggested checking the files, I walked towards the PC, sat on the chair, and Ren turned on the light. With no one else around, we felt safer as to on the light.";
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
        textToType = "I opened the file on the PC, and it appeared to be someone's diary.";
        index = 0;
        const audioElement = document.createElement('audio');
        audioElement.autoplay = true;
        const wavSource = document.createElement('source');
        audioElement.setAttribute('autoplay', true); 
        audioElement.setAttribute('loop', true);     
        wavSource.src = 'moonlight.mp3';
        wavSource.type = 'audio/mpeg';
        audioElement.appendChild(wavSource);
        document.body.appendChild(audioElement);
        textElement.textContent = '';
        typeText();
        counta = 2;
    } else if (counta == 2) {
        textToType = `Yuki advised, "Just be quiet and read it carefully."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 3;
    } else if (counta == 3) {
        textToType = `I replied, "Okay, okay." Ren sat on the chair beside me, and we both started reading the diary together.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 4;
    } else if (counta == 4) {
        textToType = `The diary entry began with "19 January 2009..."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 5;
    } else if (counta == 5) {
        textToType = `19th January 2009...`;
        index = 0;
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./j19.jpg";
        image.classList.add("letter");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 6;
    } else if (counta == 6) {
        textToType = "20th January 2009...";
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./j20.jpg";
        image.classList.add("letter");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 7;
    } else if (counta == 7) {
        textToType = `21st January 2009...`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./j21.jpg";
        image.classList.add("letter");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 8;
    }


    else if (counta == 8) {
        textToType = `22nd January 2009...`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./j22.jpg";
        image.classList.add("letter");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 9;
    }


    else if (counta == 9) {
        textToType = `23rd January 2009...`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./j23.jpg";
        image.classList.add("letter");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 10;
    }


    else if (counta == 10) {
        textToType = `All the pages from the 24th to the 28th are empty. What could it be?`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./empty.png";
        image.classList.add("letter");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 11;
    }


    else if (counta == 11) {
        textToType = `29th January 2009...`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./j29.jpg";
        image.classList.add("letter");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 12;
    }


    else if (counta == 12) {
        textToType = `"There is a second folder as well. Oh, it contains a photo labeled 'brother and his wife,'" I said.`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        counta = 13;
    }


    else if (counta == 13) {
        textToType = `"Wait, what? Those are my mom and dad but how...?" I exclaimed in shock and confusion.`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./true.jpg";
        image.classList.add("letter");
        centeredDiv.appendChild(image);
        document.body.appendChild(centeredDiv);
        counta = 14;
    }


    else if (counta == 14) {
        textToType = `"So that means my uncle killed my parents for revenge?" I asked with a heavy heart.`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        counta = 15;
    }

    else if (counta == 15) {
        textToType = `Everyone came to me, hugged me, and I started to cry.`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        counta = 16;
    }


    else if (counta == 16) {
        textToType = `After some time, I asked, "What else did you find?" Haruka replied, "We found one more thing. This person, I mean your uncle, killed the chairman and became the chairman."`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        counta = 17;
    }


    else if (counta == 17) {
        textToType = `I said, "But why didn't he admit that he's the chairman? He told me he works in a supermarket."`;
        index = 0;
        if (centeredDiv) centeredDiv.remove();
        textElement.textContent = '';
        typeText();
        counta = 18;
    }


    else if (counta == 18) {
        textToType = `Takeshi regrettably chimed in, 'Maybe he didn't want you to know anything about the story, not even his present position, so he could...`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 19;
    }


    else if (counta == 19) {
        textToType = `Suddenly, my phone rang from an unknown number. Should I answer it?`;
        index = 0;
        textElement.textContent = '';
        if (centeredDiv) centeredDiv.remove();
        typeText();
        counta = 20;

        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("btn");

        button1 = document.createElement("button");
        button1.textContent = "Pick the Phone...";

        button2 = document.createElement("button");
        button2.textContent = "Ignore the Call";

        centeredDiv.appendChild(button1);
        centeredDiv.appendChild(button2);
        document.body.appendChild(centeredDiv);

        button1.addEventListener("click", function () {
            if (counta == 20) {
                textToType = `I picked up the call, and someone said, "So you and your friends know all about me. This is not over yet."`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                counta = 21;
            } continueBtn.addEventListener("click", function () {
                if (counta == 21) {
                    textToType = `I recognized that voice; it was my uncle. I said, "Uncle, why did you do that?"`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 22;
                } else if (counta == 22) {
                    textToType = `He replied, "If you want your sister, come to me at the cave where we used to go when you were a kid."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 23;
                } else if (counta == 23) {
                    textToType = `Then he hung up the call abruptly.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 24;
                }


                else if (counta == 24) {
                    textToType = `My phone was on speaker, so everyone heard the conversation, and I was in distress with tears not stopping.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 25;
                }


                else if (counta == 25) {
                    textToType = `Takashi punched me and said, "You're not the crybaby here. Your sister needs your help. You're her big brother, aren't you?"`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 26;
                }


                else if (counta == 26) {
                    textToType = `I listened to his motivating words and managed to stop crying. `;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 27;
                }


                else if (counta == 27) {
                    textToType = `Ren asked, "Where is that cave that your uncle mentioned?"`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 28;
                }


                else if (counta == 28) {
                    textToType = `I opened the map on the computer and showed location to them.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 29;
                }


                else if (counta == 29) {
                    textToType = `Haruka said, "That's not far away. Let's not waste time and leave as soon as possible. I have a car outside this building. Let's go now or never."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 30;
                }


                else if (counta == 30) {
                    textToType = `Yuki wiped away my tears, held my hand, and said, "Let's go."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 31;
                }


                else if (counta == 31) {
                    document.querySelector('html').style.backgroundImage = 'url("./taxi.jpg")';
                    textToType = `While on the way to the cave, I received another message from an unknown number. Since my phone was with Yuki, she read the message and shared it with us.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 32;
                }


                else if (counta == 32) {
                    textToType = `She explained, "His uncle wants him to come to the cave by 12 PM."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 33;
                }


                else if (counta == 33) {
                    textToType = `Haruka reassured me, "Don't worry, we will save your sister," as she drove with determination.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 34;
                }


                else if (counta == 34) {
                    textToType = `We made a plan on how to approach the situation.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 35;
                }
                else if (counta == 35) {
                    document.querySelector('html').style.backgroundImage = 'url("./jungle.png")';
                    textToType = `We reached our destination, and everyone spread out according to the plan. Yuki stayed with me.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 36;
                }


                else if (counta == 36) {
                    textToType = `I met my uncle, who was pointing a gun at my sister's head, and she was crying.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 37;
                }


                else if (counta == 37) {
                    textToType = `I shouted, "Don't worry, Lilly, I'm here. I will save you." Lilly replied, crying, "Brother, please save me."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 38;
                }


                else if (counta == 38) {
                    textToType = 'You selected the wrong method to deal with the situation" Restarted the chapter again.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 38;

                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("btn");

                    buttonaa = document.createElement("button");
                    buttonaa.textContent = "HOME";
                    buttonbb = document.createElement("button");
                    buttonbb.textContent = "Chapter 8";
                    centeredDiv.appendChild(buttonaa);
                    centeredDiv.appendChild(buttonbb);
                    document.body.appendChild(centeredDiv);

                    buttonaa.addEventListener("click", function () {
                        window.location.href = "index.html";
                    });

                    buttonbb.addEventListener("click", function () {
                        window.location.href = "chapter8.html";
                    });
                }
            });
        });


        button2.addEventListener("click", function () {
            if (countb == 1) {
                textToType = `I took my phone and checked who was calling me. It was an unknown number.`;
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                typeText();
                countb = 2;
            } continueBtn.addEventListener("click", function () {
                if (countb == 2) {
                    textToType = `"I don't want to talk to any unknown person right now, not even to known people," I thought to myself as I left my phone face-down on the table.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 3;
                } else if (countb == 3) {
                    textToType = `"After some time, I received a photo on my phone, and it showed my sister Lilly had been killed."`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./lillydead.jpg";
                    image.classList.add("dead");
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);

                    countb = 4;
                } else if (countb == 4) {
                    textToType = `I received a call from the same number again.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./lillydead.jpg";
                    image.classList.add("dead");
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    countb = 5;
                }


                else if (countb == 5) {
                    textToType = `I picked up the call, and someone said, "ITs only because of you she is dead now"`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./lillydead.jpg";
                    image.classList.add("dead");
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    countb= 6;
                }


                else if (countb == 6) {
                    textToType = 'You selected the wrong method to deal with the situation" Restarted the chapter again.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 6;

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
                        window.location.href = "chapter7.html";
                    });
                }


            });
        })
    }
});