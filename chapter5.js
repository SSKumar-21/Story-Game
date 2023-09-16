const textElement = document.getElementById('text');
const continueBtn = document.getElementById('chapter1');
var textToType = "At last, I'm home now. What's the time?";
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
        textToType = "I checked my phone to see the time.";
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
        textToType = "I should go to bed; it's already 12:30. I also need to wake up early for college.";
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 3;
    } else if (counta == 3) {
        textToType = "I think Lilly and my uncle are asleep, so I won't disturb them. I head straight to my room to change and go to bed.";
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 4;
    } else if (counta == 4) {
        document.querySelector('html').style.backgroundImage = 'url("./nightbedroom.jpg")';
        textToType = "When I entered my room, everything was messed up. Oh, I need to clean up all that mess!";
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 5;
    } else if (counta == 5) {
        textToType = "I cleaned my room, changed my clothes, and lay in bed to sleep. I fell into a deep sleep.";
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 6;
    } else if (counta == 6) {
        textToType = "After some time, around 3 AM...";
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 7;
    } else if (counta == 7) {
        textToType = "My Phone rang...";
        index = 0;
        textElement.textContent = '';
        typeText();

        imageDiv = document.createElement("div");
        imageDiv.classList.add("img");
        const image = document.createElement("img");
        image.src = "./myphone.png";
        imageDiv.appendChild(image);
        document.body.appendChild(imageDiv);

        const audioElement = document.createElement('audio');
        audioElement.autoplay = true;
        const wavSource = document.createElement('source');
        wavSource.src = 'phone.mp3';
        wavSource.type = 'audio/wav';
        audioElement.appendChild(wavSource);
        document.body.appendChild(audioElement);

        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("btn");

        button1 = document.createElement("button");
        button1.textContent = "Ignore the call";

        button2 = document.createElement("button");
        button2.textContent = "Pick up the phone";

        centeredDiv.appendChild(button1);
        centeredDiv.appendChild(button2);
        document.body.appendChild(centeredDiv);

        counta = 8;

        button1.addEventListener("click", function () {
            if (counta == 8) {
                textToType = "I'm feeling really tired today and don't want to talk to anyone.";
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                if (imageDiv) {
                    imageDiv.remove();
                }
                typeText();
                counta = 9;
            } continueBtn.addEventListener("click", function () {
                if (counta == 9) {
                    textToType = "So I ignored the call and curled up in my blanket to sleep.";
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    counta = 10;
                } else if (counta == 10) {
                    textToType = "When I woke up, I checked my phone and saw that I had 18 missed calls from Yuki.";
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 11;
                } else if (counta == 11) {
                    textToType = "I tried calling Yuki several times, but she didn't pick up, so I called Ren.";
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 12;
                }


                else if (counta == 12) {
                    textToType = "He answered his phone and said, 'So you're awake. Listen, don't come to college. I asked Ren what happened, and why Yuki isn't answering her calls.'";
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 13;
                }


                else if (counta == 13) {
                    textToType = 'Ren said, "Yuki is dead. Someone murdered her in the computer lab after Haruka left for home."';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./deadyuki.jpg";
                    image.classList.add("dead");
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    counta = 14;
                }


                else if (counta == 14) {
                    textToType = '"And because you were the last person Yuki called, everyone, including the police, is looking for you."';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./deadyuki.jpg";
                    image.classList.add("dead");
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    counta = 15;
                }


                else if (counta == 15) {
                    textToType = 'You selected the wrong method to deal with the situation" Restarted the chapter again.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    counta = 16;

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
                        window.location.href = "chapter5.html";
                    });
                }
            });
        });

        button2.addEventListener("click", function () {
            if (countb == 1) {
                textToType = "It's late at night, and I can't ignore the call. It could be important, or someone might need my help.";
                index = 0;
                textElement.textContent = '';
                typeText();
                if (centeredDiv) centeredDiv.remove();
                countb = 2;
                continueBtn.addEventListener("click", function () {
                    if (countb == 2) {
                        textToType = "I picked up the phone. It was Yuki's call, and it must be something important since she wouldn't call me this late at night.";
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 3;
                    } else if (countb == 3) {
                        textToType = "Before I could say anything, Yuki said, 'It's important. There's a stranger watching me, and I'm hiding. Come to the college computer lab quickly!";
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 4;
                    } else if (countb == 4) {
                        textToType = "And then she hung up the call.";
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        if (imageDiv) {
                            imageDiv.remove();
                        }
                        typeText();
                        countb = 5;
                    } else if (countb == 5) {
                        document.querySelector('html').style.backgroundImage = 'url("./taxi.jpg")';
                        textToType = "I was in shock. I quickly got up, hailed a taxi, and tried to reach the college as soon as possible.";
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 6;
                    }
                    else if (countb == 6) {
                        textToType = "I also called Takashi, the boxer. If something was wrong, I knew he could handle it.";
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 7;
                    }


                    else if (countb == 7) {
                        textToType = `Takashi said, "Okay, I'll be there in 2 minutes.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 8;
                    }
                    else if (countb == 8) {
                        document.querySelector('html').style.backgroundImage = 'url("./nightschool.jpg")';
                        textToType = "I reached the college in just 10 minutes and ran inside.";
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 9;
                    }


                    else if (countb == 9) {
                        document.querySelector('html').style.backgroundImage = 'url("./nightcs.jpg")';
                        textToType = "I rushed towards the computer lab, entered, and saw Ren, Takashi, and Haruka were already there.";
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 10;
                    }


                    else if (countb == 10) {
                        textToType = `Ren said, "If you're this late, something must have definitely happened`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 11;
                    }


                    else if (countb == 11) {
                        textToType = `"Where is Yuki? Is she okay?" I ignored Ren's comment and immediately started looking for Yuki.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 12;
                    }


                    else if (countb == 12) {
                        textToType = `Seeing Yuki sitting on the chair, crying, I hugged her tightly. "Oh, you're fine," I said, tears welling up in my eyes.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 13;
                    }


                    else if (countb == 13) {
                        textToType = `I asked Yuki, "What happened?"`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 14;
                    }


                    else if (countb == 14) {
                        textToType = `Haruka pointed to something and said, "First, tell me what this is."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 15;
                    }


                    else if (countb == 15) {
                        textToType = `She showed me a golden A card, and I replied, "Wait, didn't I already take my card from you?"`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        centeredDiv = document.createElement("div");
                        centeredDiv.classList.add("img");
                        const image = document.createElement("img");
                        image.src = "./Acard.jpg";
                        image.classList.add("cardA")
                        centeredDiv.appendChild(image);
                        document.body.appendChild(centeredDiv);
                        typeText();
                        countb = 16;
                    }


                    else if (countb == 16) {
                        textToType = `Yuki said, "I'll explain everything, just give me some time."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 17;
                    }


                    else if (countb == 17) {
                        document.querySelector('html').style.backgroundImage = 'url("./nighthallway.jpg")';
                        textToType = `Takashi asked Haruka, Ren, and me to step outside for a moment, and we all followed him.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 18;
                    }


                    else if (countb == 18) {
                        textToType = `Takashi said, "I have two questions for you, newbie."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 19;
                    }


                    else if (countb == 19) {
                        textToType = `Takashi asked, "First, how did your card end up with Yuki?"`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 20;
                    } else if (countb == 20) {
                        textToType = `I replied, "I don't know. I'm sure I put my card in my bag."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 21;
                    }


                    else if (countb == 21) {
                        textToType = `Ren said, "Okay, we trust you." Haruka added, "Then Yuki will tell us how she got your card."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 22;
                    }


                    else if (countb == 22) {
                        textToType = `Takashi said, "My second question is, when are you going to propose to Yuki?" and he smiled.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 23;
                    }


                    else if (countb == 23) {
                        textToType = `Ren looked shocked, and Haruka got excited at the question.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 25;
                    }


                    else if (countb == 25) {
                        textToType = `Haruka chimed in, saying, "Come on, Ren. Anyone can tell he loved Yuki from the very beginning. Just remember how nervous he got when Yuki talked to him and how he hugged her..."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText(); countb = 26;
                    }


                    else if (countb == 26) {
                        textToType = `Haruka added, "Aww, look at these two little love birds."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 27;
                    }


                    else if (countb == 27) {
                        textToType = `Takashi with a smile, trying to ease the tension in the air.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 28;
                    }


                    else if (countb == 28) {
                        textToType = `"Of course," I think, "he knows how to handle the situation, especially considering he's the council president."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 29;
                    }


                    else if (countb == 29) {
                        textToType = `Haruka blushed and teasingly said, "Yeah, yeah,you are just friends with Yuki, the lovebirds."`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 30;
                    }


                    else if (countb == 30) {
                        textToType = `Yuki called us back into the room, signaling that she was ready to explain everything.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 31;
                    }


                    else if (countb == 31) {
                        document.querySelector('html').style.backgroundImage = 'url("./nightcs.jpg")';
                        textToType = `"We went inside, and Takashi said, 'By the way, your night suit is cute, newbie.'"`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 32;
                    }


                    else if (countb == 32) {
                        textToType = `In my hurry, I forgot that I was still wearing my night suit when I came here.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 33;
                    }


                    else if (countb == 33) {
                        textToType = "Everyone started laughing at me.";
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 34;
                    }


                    else if (countb == 34) {
                        textToType = `Haruka said, 'Those bears on your suit suit you, lovey bird.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 35;
                    }


                    else if (countb == 35) {
                        textToType = `Listening to this, everyone laughed, including Yuki. Seeing her like this made me feel good.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 36;
                    }


                    else if (countb == 36) {
                        textToType = `So for now, everything is tension-free until Yuki explains what happened.`;
                        index = 0;
                        textElement.textContent = '';
                        if (centeredDiv) centeredDiv.remove();
                        typeText();
                        countb = 37;
                    }


                    else if (countb == 37) {
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
                        button2.textContent = "Chapter 6";
                        centeredDiv.appendChild(button1);
                        centeredDiv.appendChild(button2);
                        document.body.appendChild(centeredDiv);

                        button1.addEventListener("click", function () {
                            window.location.href = "index.html";
                        });
                        button2.addEventListener("click", function () {
                            window.location.href = "chapter6.html";
                        });
                        countb = 38;
                    }



                })
            }
        });
    }

});
