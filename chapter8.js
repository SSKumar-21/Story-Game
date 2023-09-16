const textElement = document.getElementById('text');
const continueBtn = document.getElementById('chapter1');
var textToType = "In that tense moment, with my heart pounding in my chest, I focused on my sister, Lilly, who was trembling in fear. ";
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
        textToType = "Yuki stood beside me, her expression determined and unwavering.";
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
        textToType = `I yelled out to my uncle, "Uncle, please, put the gun down. There's no need for anyone else to get hurt."`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 3;
    } else if (counta == 3) {
        textToType = `My uncle's eyes darted between us, uncertainty etched on his face.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 4;
    } else if (counta == 4) {
        textToType = 'He hesitated for a moment, torn between his desperation and the love he still had for us deep down.';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 5;
    }


    else if (counta == 5) {
        textToType = 'Haruka, Ren, and Takashi continued to maintain their positions, ready to act if the situation escalated.';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 6;
    }


    else if (counta == 6) {
        textToType = 'Their presence alone was enough to let my uncle know that he was cornered.';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 7;
    }


    else if (counta == 7) {
        textToType = ' Takashi, seized the opportunity and acted on his own. ';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 8;
    }


    else if (counta == 8) {
        textToType = 'With lightning speed, he landed a powerful punch that sent my uncle sprawling to the ground.';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 9;
    }


    else if (counta == 9) {
        textToType = ' It happened so fast that we were all momentarily stunned.';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 10;
    }


    else if (counta == 10) {
        textToType = 'We rushed towards my uncle as he lay on the ground, his consciousness fading. ';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 11;
    }


    else if (counta == 11) {
        textToType = 'He was no longer a threat, and relief washed over us. ';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 12;
    }

    else if (counta == 12) {
        textToType = `We helped him to his feet, and surprisingly, he didn't resist. It was as if that punch had knocked some sense into him.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 13;
    }


    else if (counta == 13) {
        textToType = 'Tears welled up in my eyes as we all came together, realizing that my sister, Lilly, was safe in my arms. ';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 14;
    }


    else if (counta == 14) {
        textToType = 'We embraced each other tightly, our laughter mingling with the tears of relief that flowed freely down our cheeks.';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 15;
    }


    else if (counta == 15) {
        textToType = ' It was a moment of redemption, reconciliation, and an overwhelming flood of emotions that bound us even closer as a family.';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 16;
    }


    else if (counta == 16) {
        textToType = 'The weight of years of pain and confusion seemed to lift in that embrace, and in its place, a profound sense of healing and renewal settled upon us. ';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 17;
    }


    else if (counta == 17) {
        textToType = 'But just when we thought the danger had passed, my uncle revealed a second gun hidden beneath his coat. ';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 18;
    }


    else if (counta == 18) {
        textToType = 'He aimed it at us, his face twisted with anger and desperation. In the blink of an eye, he fired at lilly.';
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 19;
        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("btn");

        button1 = document.createElement("button");
        button1.textContent = "Cover lilly";

        button2 = document.createElement("button");
        button2.textContent = "Hide yourself...";

        centeredDiv.appendChild(button1);
        centeredDiv.appendChild(button2);
        document.body.appendChild(centeredDiv);

        button1.addEventListener("click", function () {
            alert("If you try to cover Lilly, You'll definitely get shot");
            if (counta == 19) {
                textToType = 'Instinctively, I covered my sister, Lilly, with my body, taking the brunt of the bullets on my arms.';
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                const audioElement = document.createElement('audio');
                audioElement.autoplay = true;
                const mp3Source = document.createElement('source');
                mp3Source.src = 'gunshot.mp3';
                mp3Source.type = 'audio/mpeg';
                audioElement.appendChild(mp3Source);
                document.body.appendChild(audioElement);

                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./blood.png";
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);

                typeText();
                counta = 20;
            }

            continueBtn.addEventListener("click", function () {
                if (counta == 20) {
                    textToType = 'I began to feel dazed and weak, my body struggling to cope after being shot. ';
                    index = 0;
                    
                    textElement.textContent = '';
                    typeText();
                    counta = 21;
                } else if (counta == 21) {
                    textToType = 'I got hit by two bullets, and due to blood loss, I fell to the ground.';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 22;
                } else if (counta == 22) {
                    textToType = 'As my blood spread all over the place, I felt a strange sensation. It was as if I were lying in cold, deep water, and I began to lose consciousness.';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 23;
                    if (centeredDiv) {
                        centeredDiv.remove();
                    }
                    
                } else if (counta == 23) {
                    document.querySelector('html').style.backgroundImage = 'url("./hospital.jpg")';
                    textToType = 'The next thing I knew, I was waking up in a hospital bed, my vision hazy. ';
                    index = 0;

                    
                    typeText();
                    counta = 24;
                } else if (counta == 24) {
                    textToType = ' My sister was there, her worried eyes meeting mine.';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 25;
                } else if (counta == 25) {
                    textToType = 'Ren stood nearby, explaining what had happened to police';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 26;
                } else if (counta == 26) {
                    textToType = `With a smile, I reassured Lilly, "Don't worry, I will be fine."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 27;
                } else if (counta == 27) {
                    textToType = '"What happened after I lost consciousness?" I asked Lilly.';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 28;
                } else if (counta == 28) {
                    textToType = 'Before Lilly could answer my question, Ren entered the room with Haruka and Takashi.';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 29;
                } else if (counta == 29) {
                    textToType = `I noticed Yuki wasn't there with them.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 30;
                } else if (counta == 30) {
                    textToType = `Takashi's hand was badly injured, and he had a bandage wrapped around it.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 31;
                }


                else if (counta == 31) {
                    textToType = `I asked, "What happened, Takashi? I'm sorry; I should have let you all come with me."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 32;
                }


                else if (counta == 32) {
                    textToType = `He replied, "You're really a newbie. If we weren't there, you would be dead by now." Then he playfully hit my head with a smile.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 33;
                }


                else if (counta == 33) {
                    textToType = `In return, I smiled and asked, "What happened after I lost consciousness?"`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 34;
                }


                else if (counta == 34) {
                    document.querySelector('html').style.backgroundImage = 'url("./past.jpg")';
                    const audioElement = document.createElement('audio');
                    audioElement.autoplay = true;
                    const mp3Source = document.createElement('source');
                    mp3Source.src = 'gunshot.mp3';
                    mp3Source.type = 'audio/mpeg';
                    audioElement.appendChild(mp3Source);
                    document.body.appendChild(audioElement);
                    textToType = `Ren explained, "After you lost consciousness, Takashi took action," Ren said, his voice filled with admiration. "He used your uncle's first gun to stop him."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 100;
                }
                else if (counta == 100) {
                    document.querySelector('html').style.backgroundImage = 'url("./hospital.jpg")';
                    textToType = 'Ren added, "The police told us that we did a good job, and from now on, they will handle the case. They are going to interrogate your uncle and put him behind bars for murdering your parents."';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 101;
                } else if (counta == 101) {
                    textToType = `Seeing Lilly's upset face, I understood that she was missing our parents, so I changed the topic immediately.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 35;
                }


                else if (counta == 35) {
                    textToType = 'I asked, "So how did his hand get injured?"';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 36;
                }


                else if (counta == 36) {
                    textToType = `Haruka laughed and explained, "He accidentally fell in the bathroom this morning."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 37;
                }


                else if (counta == 37) {
                    textToType = `Everyone started laughing, and Takashi blushed and smiled in response.`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 38;
                }


                else if (counta == 38) {
                    textToType = 'Then there was a knock at the door, and it was Yuki. I smiled with joy and said, "Hello, Yuki!"';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 39;
                }


                else if (counta == 39) {
                    textToType = 'Yuki said, "At last, you woke up."';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 40;
                } else if (counta == 40) {
                    textToType = 'Yuki blushed and shyly said, "Get well soon," as she handed me a bouquet of flowers.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./flower.png";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    counta = 41;
                }


                else if (counta == 41) {
                    textToType = `Haruka said, "Aww... these two lovebirds," and everyone laughed as Yuki and I smiled shyly.`;
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) {
                        centeredDiv.remove();
                    }
                    typeText();
                    counta = 42;
                }


                else if (counta == 42) {
                    textToType = 'Everything was going well, and suddenly, I received a message.';
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 43;
                } else if (counta == 43) {
                    textToType = `So this time you survived, but next time you won't, "BLUE ROSE."`;
                    index = 0;
                    textElement.textContent = '';
                    typeText();
                    counta = 44;
                } else if (counta == 44) {
                    document.querySelector('html').style.backgroundImage = 'url("./jungle.png")';
                    var centerDiv = document.querySelector('.center');
                    if (centerDiv) {
                        centerDiv.remove();
                    }
                    const end1Div = document.createElement("div");
                    end1Div.classList.add("end1");

                    const end2Div = document.createElement("div");
                    end2Div.classList.add("end2");

                    const h1Element = document.createElement("h1");
                    h1Element.textContent = "BLUE ROSE";

                    const pElement = document.createElement("p");
                    pElement.textContent = "To be continued...";

                    end2Div.appendChild(h1Element);
                    end2Div.appendChild(pElement);

                    end1Div.appendChild(end2Div);

                    document.body.appendChild(end1Div);

                    const centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("btn");

                    const button1 = document.createElement("button");
                    button1.textContent = "Home";
                    button1.addEventListener("click", function () {
                        window.location.href = "index.html";
                    });

                    const button2 = document.createElement("button");
                    button2.textContent = "Restart";
                    button2.addEventListener("click", function () {
                        window.location.href = "chapter8.html";
                    });

                    centeredDiv.appendChild(button1);
                    centeredDiv.appendChild(button2);
                    document.body.appendChild(centeredDiv);



                }
            });
        })

        button2.addEventListener("click", function () {
            alert("If you hide yourself, someone else will get shot");
            if (countb == 1) {
                textToType = 'Takashi and Haruka moved forward, taking steps to help save us.';
                index = 0;
                textElement.textContent = '';
                if (centeredDiv) centeredDiv.remove();
                const audioElement = document.createElement('audio');
                audioElement.autoplay = true;
                const mp3Source = document.createElement('source');
                mp3Source.src = 'gunshot.mp3';
                mp3Source.type = 'audio/mpeg';
                audioElement.appendChild(mp3Source);
                document.body.appendChild(audioElement);

                const imageDiv = document.createElement("div");
                imageDiv.classList.add("img");

                const image1 = document.createElement("img");
                image1.src = "./takashidaed.jpg";
                image1.classList.add("dead");

                const image2 = document.createElement("img");
                image2.src = "./harukadead.jpg";
                image2.classList.add("dead");

                imageDiv.appendChild(image1);
                imageDiv.appendChild(image2);

                document.body.appendChild(imageDiv);


                typeText();
                countb = 2;
            }


            continueBtn.addEventListener("click", function () {
                if (countb == 2) {
                    textToType = 'The bullets hit their mark, striking Haruka and Takashi.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 3;
                } else if (countb == 3) {
                    textToType = 'They both fell to the ground, injured and in pain. Panic and shock filled the air as Lilly screamed.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 4;
                } else if (countb == 4) {
                    textToType = 'In that chaotic moment, it became clear that I had made a grave mistake in not taking action to protect Lilly or myself.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 5;
                } else if (countb == 5) {
                    textToType = 'The situation had taken a tragic turn, and there was no way to undo it.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 6;
                } else if (countb == 6) {
                    textToType = 'My uncle, still holding the gun, stood there, a look of madness in his eyes. And then, everything went black.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
                    countb = 7;
                } else if (countb == 7) {
                    textToType = 'You selected the wrong method to deal with the situation. Restarted the chapter again.';
                    index = 0;
                    textElement.textContent = '';
                    if (centeredDiv) centeredDiv.remove();
                    typeText();
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
                        window.location.href = "chapter8.html";
                    });
                }

            });
        })
    }
})