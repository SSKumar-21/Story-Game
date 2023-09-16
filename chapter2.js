const textElement = document.getElementById('text');
const continueBtn = document.getElementById('chapter1');
var textToType = `Umm, it's already morning. What's the time now?`;
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
    if (first) {
        textToType = `Rubbing my eyes, I see the clock; it's already 8 o'clock.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        const audioElement = document.createElement('audio');
        audioElement.autoplay = true;
        const wavSource = document.createElement('source');
        wavSource.src = 'happy.mp3';
        wavSource.type = 'audio/mpeg';
        audioElement.appendChild(wavSource);
        document.body.appendChild(audioElement);

        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("btn");

        button1 = document.createElement("button");
        button1.textContent = "Wake up!";

        button2 = document.createElement("button");
        button2.textContent = "Sleep more";

        centeredDiv.appendChild(button1);
        centeredDiv.appendChild(button2);
        document.body.appendChild(centeredDiv);
        first = false;

        button1.addEventListener("click", function () {
            if (counta == 1) {
                textToType = `It's already 8; I should wake up and find a university, just like yesterday.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 2;
                console.log(counta);
            }


            continueBtn.addEventListener("click", function () {
                if (counta == 2) {
                    textToType = `I woke up and headed to the bathroom, but I heard some noise from the hallway.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    counta = 3;
                } else if (counta == 3) {
                    textToType = `It sounds like I know this voice. Oh yeah, that's my sister and uncle's voices.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    counta = 4;
                } else if (counta == 4) {
                    textToType = `They seem so happy, but why are they so happy at this hour of the morning? Doesn't Uncle have to go to the office today?`;
                    index = 0;
                    textElement.textContent = ``;
                    centeredDiv.remove();
                    typeText();
                    counta = 5;
                } else if (counta == 5) {
                    textToType = `So I went down to the hall to check what's happening.`;
                    index = 0;
                    textElement.textContent = ``;
                    centeredDiv.remove();
                    const audioElement = document.createElement('audio');
                    audioElement.autoplay = true;
                    const wavSource = document.createElement('source');
                    wavSource.src = 'footstep.wav';
                    wavSource.type = 'audio/wav';
                    audioElement.appendChild(wavSource);
                    document.body.appendChild(audioElement);
                    typeText();
                    counta = 6;

                } else if (counta == 6) {
                    document.querySelector('html').style.backgroundImage = 'url("./hall.jpg")';
                    textToType = `When I entered the hall, my little sister hugged me. She was so happy, and there was a big smile on her face. She said, `;
                    index = 0;
                    textElement.textContent = ``;
                    centeredDiv.remove();
                    typeText();
                    counta = 8;
                }

                else if (counta == 8) {
                    textToType = `Lilly: "You did it, brother! You did it!"`;
                    index = 0;
                    textElement.textContent = ``;
                    centeredDiv.remove();
                    typeText();
                    counta = 9;
                } else if (counta == 9) {
                    textToType = `I had no clue what I had done, but seeing her smile made me happy and excited. So, I asked, "What are you talking about?"`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    counta = 10;
                } else if (counta == 10) {
                    textToType = ` From behind, my uncle replied,`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    counta = 11;
                } else if (counta == 11) {
                    textToType = `Uncle: "Did you fill out any admission forms for Cornell University?"`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    counta = 12;
                } else if (counta == 12) {
                    textToType = `And there was a smile on his face and a letter in his hand. I felt so happy that I jumped and replied, "Yes, yes, yes, I have!"`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    counta = 13;
                } else if (counta == 13) {
                    textToType = `Now it's all clear, and I got a letter from one of the best universities in the country.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    counta = 14;
                } else if (counta == 14) {
                    textToType = `He handed over the letter to me. I looked at the letter and then at my uncle and my sister. I said, "So, let's read it!"`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    const imgDiv = document.querySelector(".img");
                    typeText();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./envelop.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    counta = 15;
                } else if (counta == 15) {
                    textToType = `I opened the letter and read it aloud. As I read it, my uncle's and sister's smiles got bigger and bigger.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    const imgDiv = document.querySelector(".img");
                    if (imgDiv) {
                        imgDiv.remove();
                    }

                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("letter");
                    image.src = "./letter.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);

                    counta = 16;
                }
                else if (counta == 16) {
                    textToType = `I said, "Uncle, I did it! I did it at last; I did it!"`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 17;
                } else if (counta == 17) {
                    textToType = `Uncle: "Yeah, I see, my child. At last, your hard work is paying off."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 18;
                } else if (counta == 18) {
                    textToType = `My sister asked me, "But the college is so far away. Are you going to take a room nearby? You won't forget us now, will you? You won't meet me again?" Her smile started to fade.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 20;
                } else if (counta == 20) {
                    textToType = `Listening to this, my uncle got up and walked towards the kitchen. He said, "I'm going to prepare breakfast, and you two get ready quickly for your day."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 21;
                } else if (counta == 21) {
                    textToType = `I replied to my sister, "I'm not going anywhere. I'll be right here, next to your room. Now, go and get ready for school."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 22;
                } else if (counta == 22) {
                    textToType = `She went to her room, and I ran towards the kitchen to see my uncle.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 23;
                } else if (counta == 23) {
                    document.querySelector('html').style.backgroundImage = 'url("./kitchen.webp")';
                    textToType = `I was worried about this; my uncle was searching for a new part-time job to help pay my fees.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 24;
                } else if (counta == 24) {
                    textToType = `I said to my uncle from behind, "Uncle, you don't need to worry about fees. I will manage that on my own by getting a scholarship. And I know if I've made it this far, I can achieve one more step."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 25;
                } else if (counta == 25) {
                    textToType = `My uncle got nervous, hide all the advertisements, and said, "You're not ready yet. Go to your room, my boy."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 26;
                } else if (counta == 26) {
                    textToType = `I replied, "Yeah, I'm going," and then I turned around.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 27;
                } else if (counta == 27) {
                    textToType = `My uncle said, "Thank you," in a very soft voice.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 28;
                }
                else if (counta == 28) {
                    textToType = `I said, "I'm going to be successful and make Mom, Dad, sis, and you proud."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 29;
                } else if (counta == 29) {
                    document.querySelector('html').style.backgroundImage = 'url("./bedroom.png")';
                    const audioElement = document.createElement('audio');
                    audioElement.autoplay = true;
                    const wavSource = document.createElement('source');
                    wavSource.src = 'footstep.wav';
                    wavSource.type = 'audio/wav';
                    audioElement.appendChild(wavSource);
                    document.body.appendChild(audioElement);
                    textToType = `Before tears could come from my eyes and I started crying, I went back to my room.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 30;
                } else if (counta == 30) {
                    textToType = `I completed my online form for formality and then started getting ready to visit my new campus.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 31;
                } else if (counta == 31) {
                    textToType = `After some time, Lilly called me, "Big brother, breakfast is ready."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 32;
                } else if (counta == 32) {
                    textToType = `I replied, "Yeah, Lilly, I'm coming. Just packing my bag."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 34;
                } else if (counta == 34) {
                    document.querySelector('html').style.backgroundImage = 'url("./kitchen.webp")';
                    const audioElement = document.createElement('audio');
                    audioElement.autoplay = true;
                    const wavSource = document.createElement('source');
                    wavSource.src = 'footstep.wav';
                    wavSource.type = 'audio/wav';
                    audioElement.appendChild(wavSource);
                    document.body.appendChild(audioElement);
                    textToType = `Then I went to the kitchen, where the three of us had breakfast and shared some funny moments. Now, I'm ready to go to the university.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 35;
                } else if (counta == 35) {
                    textToType = `And now I feel that "Dreams Do Come True."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    counta = 36;
                } else if (counta == 36) {
                    textToType = ` You have completed this chapter.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("btn");

                    button1 = document.createElement("button");
                    button1.textContent = "HOME";
                    button2 = document.createElement("button");
                    button2.textContent = "Chapter 3";
                    centeredDiv.appendChild(button1);
                    centeredDiv.appendChild(button2);
                    document.body.appendChild(centeredDiv);

                    button1.addEventListener("click", function () {
                        window.location.href = "index.html";
                    });
                    button2.addEventListener("click", function () {
                        window.location.href = "chapter3.html";
                    });
                    typeText();

                }
            });
        });

        button2.addEventListener("click", function () {
            if (countb == 1) {
                textToType = `It's only 8; I can sleep for 30 more minutes and`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                countb = 2;
                console.log(countb);
            }


            continueBtn.addEventListener("click", function () {
                if (countb == 2) {
                    textToType = `I slept late yesterday, and nothing will change if I wake up now.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 3;
                } else if (countb == 3) {
                    textToType = `Ahhhhh, that sound! Who is laughing so loudly?`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 4;
                } else if (countb == 4) {
                    textToType = `I covered my ears and tried to sleep.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 5;
                } else if (countb == 5) {
                    textToType = `"Big brother, you didn't wake up. How much will you sleep? Come down with me, you lazy pig; there's a surprise for you," said my little sister.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 6;
                } else if (countb == 6) {
                    textToType = `ummmm, Lilly, not now. I want to sleep more.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 7;
                } else if (countb == 7) {
                    document.querySelector('html').style.backgroundImage = 'url("./hall.jpg")';
                    textToType = `She pulled me with the blanket to the hall, and I'm feeling sleepy.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 8;
                } else if (countb == 8) {
                    textToType = `I had no clue what was going on, and suddenly I heard my uncle's voice And I stood up like a soldier. `;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 9;
                } else if (countb == 9) {
                    textToType = `My uncle and my sister had big smiles on their faces, and I had a watering mouth because I hadn't brushed yet. `;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 10;
                } else if (countb == 10) {
                    textToType = `  My uncle said,`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 11;
                } else if (countb == 11) {
                    textToType = `"Did you fill out any admission forms for Cornell University?"`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 12;
                } else if (countb == 12) {
                    textToType = `And there was a smile on his face and a letter in his hand. I felt so happy that I jumped and replied, "Yes, yes, yes, I have!"`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 13;
                } else if (countb == 13) {
                    textToType = `Now it's all clear, and I got a letter from one of the best universities in the country. And suddenly my sleepiness was gone.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 14;
                } else if (countb == 14) {
                    textToType = `He handed over the letter to me. I looked at the letter and then at my uncle and my sister. I said, "So, let's read it!"`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    const imgDiv = document.querySelector(".img");
                    typeText();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./envelop.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    countb = 15;
                } else if (countb == 15) {
                    textToType = `I opened the letter and read it aloud. As I read it, my uncle's and sister's smiles got bigger and bigger.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    const imgDiv = document.querySelector(".img");
                    if (imgDiv) {
                        imgDiv.remove();
                    }

                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("letter");
                    image.src = "./letter.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);

                    countb = 16;
                }
                else if (countb == 16) {
                    textToType = `I said, "Uncle, I did it! I did it at last; I did it!"`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 17;
                } else if (countb == 17) {
                    textToType = `Uncle: "Yeah, I see, my child. At last, your hard work is paying off."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 18;
                } else if (countb == 18) {
                    textToType = `My sister asked me, "But the college is so far away. Are you going to take a room nearby? You won't forget us now, will you? You won't meet me again?" Her smile started to fade.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 20;
                } else if (countb == 20) {
                    textToType = `Listening to this, my uncle got up and walked towards the kitchen. He said, "I'm going to prepare breakfast, and you two get ready quickly for your day."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 21;
                } else if (countb == 21) {
                    textToType = `I replied to my sister, "I'm not going anywhere. I'll be right here, next to your room. Now, go and get ready for school."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 22;
                } else if (countb == 22) {
                    textToType = `She went to her room, and I ran towards the kitchen to see my uncle.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 23;
                } else if (countb == 23) {
                    document.querySelector('html').style.backgroundImage = 'url("./kitchen.webp")';
                    textToType = `I was worried about this; my uncle was searching for a new part-time job to help pay my fees.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 24;
                } else if (countb == 24) {
                    textToType = `I said to my uncle from behind, "Uncle, you don't need to worry about fees. I will manage that on my own by getting a scholarship. And I know if I've made it this far, I can achieve one more step."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 25;
                } else if (countb == 25) {
                    textToType = `My uncle got nervous, hide all the advertisements, and said, "You're not ready yet. Go to your room, my boy."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 26;
                } else if (countb == 26) {
                    textToType = `I replied, "Yeah, I'm going," and then I turned around.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 27;
                } else if (countb == 27) {
                    textToType = `My uncle said, "Thank you," in a very soft voice.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 28;
                }
                else if (countb == 28) {
                    textToType = `I said, "I'm going to be successful and make Mom, Dad, sis, and you proud."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 29;
                } else if (countb == 29) {
                    document.querySelector('html').style.backgroundImage = 'url("./bedroom.png")';
                    const audioElement = document.createElement('audio');
                    audioElement.autoplay = true;
                    const wavSource = document.createElement('source');
                    wavSource.src = 'footstep.wav';
                    wavSource.type = 'audio/wav';
                    audioElement.appendChild(wavSource);
                    document.body.appendChild(audioElement);
                    textToType = `Before tears could come from my eyes and I started crying, I grabbed my blanket and went back to my room.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 30;
                } else if (countb == 30) {
                    textToType = `I completed my online form for formality and then started getting ready to visit my new campus.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 31;
                } else if (countb == 31) {
                    textToType = `After some time, Lilly called me, "Big brother, breakfast is ready."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 32;
                } else if (countb == 32) {
                    textToType = `I replied, "Yeah, Lilly, I'm coming. Just packing my bag."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 34;
                } else if (countb == 34) {
                    document.querySelector('html').style.backgroundImage = 'url("./kitchen.webp")';
                    const audioElement = document.createElement('audio');
                    audioElement.autoplay = true;
                    const wavSource = document.createElement('source');
                    wavSource.src = 'footstep.wav';
                    wavSource.type = 'audio/wav';
                    audioElement.appendChild(wavSource);
                    document.body.appendChild(audioElement);
                    textToType = `Then I went to the kitchen, where the three of us had breakfast and shared some funny moments. Now, I'm ready to go to the university.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 35;
                } else if (countb == 35) {
                    textToType = `And now I feel that "Dreams Do Come True."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    centeredDiv.remove();
                    countb = 36;
                } else if (countb == 36) {
                    textToType = ` You have completed this chapter.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("btn");

                    button1 = document.createElement("button");
                    button1.textContent = "HOME";
                    button2 = document.createElement("button");
                    button2.textContent = "Chapter 3";
                    centeredDiv.appendChild(button1);
                    centeredDiv.appendChild(button2);
                    document.body.appendChild(centeredDiv);

                    button1.addEventListener("click", function () {
                        window.location.href = "index.html";
                    });
                    button2.addEventListener("click", function () {
                        window.location.href = "chapter3.html";
                    });
                    typeText();
                    countb = 36;
                }
            })
        });
    }
})