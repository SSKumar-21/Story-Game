const textElement = document.getElementById('text');
const continueBtn = document.getElementById('chapter1');
var textToType = `At last, I reached my destination.`;
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
        textToType = `I'm thinking I have that much potential to cycle 11 km every day to reach my college.`;
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
        console.log("Inside counta == 2");
        textToType = `Oh, I have to cycle 11 km again to go home... Ahh, it sucks.`;
        index = 0;
        textElement.textContent = '';
        counta = 3;
        typeText();
    } else if (counta == 3) {
        console.log("Inside counta == 3");
        textToType = `Thinking about all these things, I stepped inside the university.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        counta = 4;

        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("btn");

        button1 = document.createElement("button");
        button1.textContent = "Let's do the final registration first.";

        button2 = document.createElement("button");
        button2.textContent = "Visit and explore the university.";

        centeredDiv.appendChild(button1);
        centeredDiv.appendChild(button2);
        document.body.appendChild(centeredDiv);

        button1.addEventListener("click", function () {
            if (counta == 4) {
                textToType = `I don't want to take any risks now, at least for now. Therefore, I will register myself first.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 5;
                console.log(counta);
            }
        });
        continueBtn.addEventListener("click", function () {
            if (counta == 5) {
                textToType = `So I am searching for the reception, and suddenly someone pushes me.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 6;
            } else if (counta == 6) {
                textToType = `I don't know who he is, but because of him, I'm on the floor.`;
                index = 0;
                textElement.textContent = ``;
                centeredDiv.remove();
                typeText();
                counta = 7;
            } else if (counta == 7) {
                textToType = `That's not a good start.`;
                index = 0;
                textElement.textContent = ``;
                centeredDiv.remove();
                typeText();
                counta = 8;
            }
            else if (counta == 8) {
                textToType = `The guy rudely said, 'Hey, can't you see?'`;
                index = 0;
                textElement.textContent = ``;
                centeredDiv.remove();
                typeText();
                counta = 9;

                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("btn");

                buttona = document.createElement("button");
                buttona.textContent = "Pick a fight";

                buttonb = document.createElement("button");
                buttonb.textContent = "Apologize and ignore him.";

                centeredDiv.appendChild(buttona);
                centeredDiv.appendChild(buttonb);
                document.body.appendChild(centeredDiv);


                buttona.addEventListener("click", function () {
                    if (counta == 9) {
                        textToType = `"Hey, can't you see I'm standing here, you junk? And now I'm on the floor because of you."`;
                        index = 0;
                        textElement.textContent = '';
                        centeredDiv.remove();
                        typeText();
                        counta = 10;
                        console.log(counta);
                    }

                    continueBtn.addEventListener("click", function () {
                        if (counta == 10) {
                            textToType = `He replied, "Do you even know to whom you're talking?" and added, "And who are you calling a junk, you @#$%?"`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 11;
                        } else if (counta == 11) {
                            textToType = `"I'm really pissed off now, and I just want to beat the crap out of you," I said. "So, you want to pick a fight? Come on, let's do it right now, you and me, right here."`;
                            index = 0;
                            textElement.textContent = ``;
                            centeredDiv.remove();
                            typeText();
                            counta = 12;
                        } else if (counta == 12) {
                            textToType = `He continued to punch me in the face until my nose started bleeding.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 13;
                        } else if (counta == 13) {
                            textToType = `He said, "You newbies are really the irritating ones," and he also added, "I'm a three-time boxing champion," then just left me on the floor and walked away.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 14;
                        } else if (counta == 14) {
                            textToType = `"You selected the wrong method to deal with the situation" Restarted the chapter again.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 15;

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
                                window.location.href = "chapter3.html";
                            });
                            typeText();
                        };
                    });
                });

                buttonb.addEventListener("click", function () {
                    if (counta == 9) {
                        textToType = `"I just don't want to pick a fight, so I just apologize."`;
                        index = 0;
                        textElement.textContent = '';
                        centeredDiv.remove();
                        typeText();
                        counta = 10;
                        console.log(counta);
                    }

                    continueBtn.addEventListener("click", function () {
                        if (counta == 10) {
                            textToType = `"HEY WHAT, WATCH YOUR WAY" rudely said by that guy `;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 11;
                        } else if (counta == 11) {
                            textToType = "Oh, sorry, sir. I will make sure for next time. Can you tell me where the reception is?";
                            index = 0;
                            textElement.textContent = ``;
                            centeredDiv.remove();
                            typeText();
                            counta = 12;
                        } else if (counta == 12) {
                            textToType = `He replied, "Oh, so you're a newbie. Oh, come on, I will take you to the reception."`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 13;
                        } else if (counta == 13) {
                            textToType = `"I don't know why, but suddenly that arrogant brat changed into the guy that I want to be friends with."`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 14;
                        } else if (counta == 14) {
                            document.querySelector('html').style.backgroundImage = 'url("./reception.jpg")';
                            textToType = `We reached the reception, and he gave his number to me. What's with this guy? But I think at least we're friends now. A weird friendship start, but it's something.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 15;
                        }
                        else if (counta == 15) {
                            textToType = `In reception, there is a cute girl. I first saw her, and it feels like I'm seeing my girlfriend.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 16;
                        }
                        else if (counta == 16) {
                            textToType = ' But then I remember my little sister, Lilly, and my uncle.';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 17;
                        }
                        else if (counta == 17) {
                            textToType = `Don't dwell on these thoughts. I need to focus on getting a scholarship and supporting my family.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 18;
                        }
                        else if (counta == 18) {
                            textToType = `"That girl said, 'Yeah, so let's meet up in the evening,'" and she walked away.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 19;
                        }
                        else if (counta == 19) {
                            textToType = `So, ignoring all these thoughts, I said, "I want to do the final registration. This is the letter from the University`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            centeredDiv = document.createElement("div");
                            centeredDiv.classList.add("img");
                            const image = document.createElement("img");
                            image.src = "./envelop.jpg";
                            centeredDiv.appendChild(image);
                            document.body.appendChild(centeredDiv);
                            counta = 20;
                        }
                        else if (counta == 20) {
                            textToType = 'The receptionist gave me the form and said to fill it out and return it to her as soon as possible.';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            const imgDiv = document.querySelector(".img");
                            if (imgDiv) {
                                imgDiv.remove();
                            }
                            typeText();
                            counta = 21;
                        }
                        else if (counta == 21) {
                            textToType = 'I took the form and started filling it out. It was quite different, almost fancy.';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 22;
                        }
                        else if (counta == 22) {
                            textToType = 'I filled out the form and submitted it at the reception.';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 23;
                        }
                        else if (counta == 23) {
                            textToType = `The receptionist gave me a card; I didn't know what it was, but I took it and moved forward to the playground`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 24;
                        }
                        else if (counta == 24) {
                            document.querySelector('html').style.backgroundImage = 'url("./ground.webp")';
                            textToType = 'I read that card that is:';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            centeredDiv = document.createElement("div");
                            centeredDiv.classList.add("img");
                            const image = document.createElement("img");
                            image.classList.add("cardA");
                            image.src = "./Acard.jpg";
                            centeredDiv.appendChild(image);
                            document.body.appendChild(centeredDiv);
                            typeText();
                            counta = 25;
                        }
                        else if (counta == 25) {
                            textToType = `"I don't know the meaning of this golden 'A' with other stuff.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 26;
                        }
                        else if (counta == 26) {
                            textToType = 'Ah, whatever, now I can explore the whole college. I have plenty of time left.';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();

                            counta = 27;
                        }
                        else if (counta == 27) {
                            textToType = `Where can I start? Yeah, I know, from the canteen. I'm so hungry.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 28;
                        }
                        else if (counta == 28) {
                            document.querySelector('html').style.backgroundImage = 'url("./canteen.webp")';
                            textToType = '"So I visit the canteen; there are so many students. I think I can make friends with them, and for now, spaghetti is my only friend."';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 29;
                        }
                        else if (counta == 29) {
                            textToType = 'I had taken the first bite when suddenly, someone called me from behind.';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 30;
                        }
                        else if (counta == 30) {
                            textToType = 'I turn and see that the guy who is calling me is the one I met this morning.';
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 31;
                        }
                        else if (counta == 31) {
                            textToType = `I'm eating at a table, and he comes up to me, saying, 'So, newbie, did you register yourself?`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 32;
                        }
                        else if (counta == 32) {
                            textToType = `I said, 'Yes, I did,' and those forms are really fancy.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 33;
                        }
                        else if (counta == 33) {
                            textToType = `He said, 'Yeah, those forms have your high school ID and other stuff. So, how's the food here?`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 34;
                        }
                        else if (counta == 34) {
                            textToType = `I said, 'I like it though, but it's not that great.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 35;
                        }
                        else if (counta == 35) {
                            textToType = `He laughed and put his hand on my shoulder.`;
                            index = 0;
                            textElement.textContent = '';
                            centeredDiv.remove();
                            typeText();
                            counta = 36;

                            centeredDiv = document.createElement("div");
                            centeredDiv.classList.add("btn");

                            buttonx = document.createElement("button");
                            buttonx.textContent = "Asked about the card.";

                            buttony = document.createElement("button");
                            buttony.textContent = "Asked to have a tour of the college.";

                            centeredDiv.appendChild(buttonx);
                            centeredDiv.appendChild(buttony);
                            document.body.appendChild(centeredDiv);

                            buttonx.addEventListener("click", function () {
                                if (counta == 36) {
                                    textToType = `"Hey, I have a question. I didn't understand one thing in registration - what was that card with capital letters?"`;
                                    index = 0;
                                    textElement.textContent = '';
                                    centeredDiv.remove();
                                    typeText();
                                    counta = 37;
                                    console.log(counta);
                                }

                                continueBtn.addEventListener("click", function () {
                                    if (counta == 37) {
                                        textToType = `Oh, this one? This is a card given by the council to a student, which allows the student to access everything in the college.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardB");
                                        image.src = "./Bcard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 38;
                                    } else if (counta == 38) {
                                        textToType = `Hey you have B.`;
                                        index = 0;
                                        textElement.textContent = ``;
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardB");
                                        image.src = "./Bcard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 39;
                                    } else if (counta == 39) {
                                        textToType = `"So, you paid for this food, right, newbie? Now it's time to show your card and get anything, and of course, that will depend on your ranking."`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardB");
                                        image.src = "./Bcard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 40;
                                    } else if (counta == 40) {
                                        textToType = `Show me your card newbie`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 41;
                                    }
                                    else if (counta == 41) {
                                        textToType = '"So, here I go," and I showed him my card.';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardA");
                                        image.src = "./Acard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 42;
                                    }
                                    else if (counta == 42) {
                                        textToType = `He shouted, "You have a golden 'A'!"`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardA");
                                        image.src = "./Acard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 43;
                                    }
                                    else if (counta == 43) {
                                        textToType = 'Everyone started staring at me because I have a golden A.';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardA");
                                        image.src = "./Acard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 44;
                                    }
                                    else if (counta == 44) {
                                        textToType = 'Listen, do you know how to use it?';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardA");
                                        image.src = "./Acard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 45;
                                    }
                                    else if (counta == 45) {
                                        textToType = `See, there are three letters which show your smartness according to your marks: A, B, and C. And their colors show you're good in certain areas, like blue for sports, green for music. But gold shows you're exceptional in everything. And you have an A with gold, so you're an elite student.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 46;
                                    }
                                    else if (counta == 46) {
                                        textToType = 'And the first line is your username, and the second line is your password. You can access anything with this.';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 47;
                                    }
                                    else if (counta == 47) {
                                        textToType = 'Oh, I see, but I still understand nothing," I replied';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 48;
                                    }
                                    else if (counta == 48) {
                                        textToType = `Oh, leave it. Come, I'll show you around our college.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 49;
                                    }
                                    else if (counta == 49) {
                                        textToType = `I replied, "I'm glad."`
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 50;
                                    }
                                    else if (counta == 50) {
                                        textToType = `"So, let's go. What are we waiting for?"`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 51;
                                    }
                                    else if (counta == 51) {
                                        document.querySelector('html').style.backgroundImage = 'url("./ground.webp")';
                                        textToType = `This is our school's main building and our sports ground`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 52;
                                    }
                                    else if (counta == 52) {
                                        document.querySelector('html').style.backgroundImage = 'url("./football.webp")';
                                        textToType = '"And here we are in the soccer ground," he pointed out.';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 53;
                                    }
                                    else if (counta == 53) {
                                        document.querySelector('html').style.backgroundImage = 'url("./basketball.jpg")';
                                        textToType = `"That's the basketball court," he mentioned as we walked by.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 54;
                                    }
                                    else if (counta == 54) {
                                        document.querySelector('html').style.backgroundImage = 'url("./hallway.jpg")';
                                        textToType = `"And now, we're heading to my favorite place," he said with a smile.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 55;
                                    }
                                    else if (counta == 55) {
                                        document.querySelector('html').style.backgroundImage = 'url("./boxing.jpg")';
                                        textToType = `He proudly stated, "This is the boxing ring, and I'm the three-year champion here."`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 56;
                                    }
                                    else if (counta == 56) {
                                        document.querySelector('html').style.backgroundImage = 'url("./evening.jpg")';
                                        textToType = `"And here, we've completed our trip," he said as we finished exploring the college. "Did you enjoy it?" he asked.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 57;
                                    }
                                    else if (counta == 57) {
                                        textToType = `Oh, it's already 5.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 58;
                                    }
                                    else if (counta == 58) {
                                        textToType = `"Hey, newbie, do you want to join me and my friends for today's hangout? There's one more newbie in our group," he suggested, just like you," he added.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 59;
                                    }
                                    else if (counta == 59) {
                                        textToType = '"I thought this would be a great opportunity to make new friends," so I nodded my head in agreement and said, "Yes."';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 60;
                                    } else if (counta == 60) {
                                        textToType = `So now I've made my senior my first friend and I'm heading to have some fun with him`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 61;
                                    } else if (counta == 61) {
                                        textToType = ` You have completed this chapter.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("btn");

                                        button1 = document.createElement("button");
                                        button1.textContent = "HOME";
                                        button2 = document.createElement("button");
                                        button2.textContent = "Chapter 4";
                                        centeredDiv.appendChild(button1);
                                        centeredDiv.appendChild(button2);
                                        document.body.appendChild(centeredDiv);

                                        button1.addEventListener("click", function () {
                                            window.location.href = "index.html";
                                        });
                                        button2.addEventListener("click", function () {
                                            window.location.href = "chapter4.html";
                                        });
                                        typeText();
                                        counta = 62;
                                    }
                                });

                            })

                            buttony.addEventListener("click", function () {
                                if (counta == 36) {
                                    textToType = `"Hey, can you give me a tour of the college?", I asked`;
                                    index = 0;
                                    textElement.textContent = '';
                                    centeredDiv.remove();
                                    typeText();
                                    counta = 37;
                                    console.log(counta);
                                }
                                continueBtn.addEventListener("click", function () {
                                    if (counta == 37) {
                                        textToType = `"Oh, so you want a tour? Okay, come on, newbie."`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 38;
                                    }
                                    else if (counta == 38) {
                                        textToType = `I replied, "I'm glad."`
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 39;
                                    }
                                    else if (counta == 39) {
                                        textToType = `"So, let's go. What are we waiting for?"`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 40;
                                    }
                                    else if (counta == 40) {
                                        document.querySelector('html').style.backgroundImage = 'url("./ground.webp")';
                                        textToType = `This is our school's main building and our sports ground`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 42;
                                    }
                                    else if (counta == 42) {
                                        document.querySelector('html').style.backgroundImage = 'url("./football.webp")';
                                        textToType = '"And here we are in the soccer ground," he pointed out.';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 43;
                                    }
                                    else if (counta == 43) {
                                        document.querySelector('html').style.backgroundImage = 'url("./basketball.jpg")';
                                        textToType = `"That's the basketball court," he mentioned as we walked by.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 54;
                                    }
                                    else if (counta == 54) {
                                        document.querySelector('html').style.backgroundImage = 'url("./hallway.jpg")';
                                        textToType = `"And now, we're heading to my favorite place," he said with a smile.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 101;
                                    } else if (counta == 101) {
                                        textToType = `"Hey, I have a question. I didn't understand one thing in registration - what was that card with capital letters?"`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 100;
                                    } if (counta == 100) {
                                        textToType = `Oh, this one? This is a card given by the council to a student, which allows the student to access everything in the college.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardB");
                                        image.src = "./Bcard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 57;
                                    } else if (counta == 57) {
                                        textToType = `Hey you have B.`;
                                        index = 0;
                                        textElement.textContent = ``;
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardB");
                                        image.src = "./Bcard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 58;
                                    } else if (counta == 58) {
                                        textToType = `"So, you paid for that food, right, newbie? Next time show your card and get anything, and of course, that will depend on your ranking."`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardB");
                                        image.src = "./Bcard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 59;
                                    } else if (counta == 59) {
                                        textToType = `"He asked, 'Show me your card.'"`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 60;
                                    }
                                    else if (counta == 60) {
                                        textToType = '"So, here I go," and I showed him my card.';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardA");
                                        image.src = "./Acard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 61;
                                    }
                                    else if (counta == 61) {
                                        textToType = `He shouted, "You have a golden 'A'!"`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardA");
                                        image.src = "./Acard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 62;
                                    }
                                    else if (counta == 62) {
                                        textToType = 'Everyone started staring at me because I have a golden A.';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardA");
                                        image.src = "./Acard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 63;
                                    }
                                    else if (counta == 63) {
                                        textToType = 'Listen, do you know how to use it?';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("img");
                                        const image = document.createElement("img");
                                        image.classList.add("cardA");
                                        image.src = "./Acard.jpg";
                                        centeredDiv.appendChild(image);
                                        document.body.appendChild(centeredDiv);
                                        typeText();
                                        counta = 64;
                                    }
                                    else if (counta == 64) {
                                        textToType = `See, there are three letters which show your smartness according to your marks: A, B, and C. And their colors show you're good in certain areas, like blue for sports, green for music. But gold shows you're exceptional in everything. And you have an A with gold, so you're an elite student.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 65;
                                    }
                                    else if (counta == 65) {
                                        textToType = 'And the first line is your username, and the second line is your password. You can access anything with this.';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 66;
                                    }
                                    else if (counta == 66) {
                                        textToType = 'Oh, I see, but I still understand nothing," I replied';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 67;
                                    } else if (counta == 67) {
                                        document.querySelector('html').style.backgroundImage = 'url("./boxing.jpg")';
                                        textToType = `Oh leave it, lets go to next place, then He proudly stated, "This is the boxing ring, and I'm the three-year champion here."`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 68;
                                    }
                                    else if (counta == 68) {
                                        document.querySelector('html').style.backgroundImage = 'url("./evening.jpg")';
                                        textToType = `"And here, we've completed our trip," he said as we finished exploring the college. "Did you enjoy it?" he asked.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 69;
                                    }
                                    else if (counta == 69) {
                                        textToType = `Oh, it's already 5.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 70;
                                    }
                                    else if (counta == 70) {
                                        textToType = `"Hey, newbie, do you want to join me and my friends for today's hangout? There's one more newbie in our group," he suggested, just like you," he added.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 71;
                                    }
                                    else if (counta == 71) {
                                        textToType = '"I thought this would be a great opportunity to make new friends," so I nodded my head in agreement and said, "Yes."';
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 72;
                                    } else if (counta == 72) {
                                        textToType = `So now I've made my senior my first friend and I'm heading to have some fun with him`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        typeText();
                                        counta = 73;
                                    } else if (counta == 73) {
                                        textToType = ` You have completed this chapter.`;
                                        index = 0;
                                        textElement.textContent = '';
                                        centeredDiv.remove();
                                        centeredDiv = document.createElement("div");
                                        centeredDiv.classList.add("btn");

                                        button1 = document.createElement("button");
                                        button1.textContent = "HOME";
                                        button2 = document.createElement("button");
                                        button2.textContent = "Chapter 4";
                                        centeredDiv.appendChild(button1);
                                        centeredDiv.appendChild(button2);
                                        document.body.appendChild(centeredDiv);

                                        button1.addEventListener("click", function () {
                                            window.location.href = "index.html";
                                        });
                                        button2.addEventListener("click", function () {
                                            window.location.href = "chapter4.html";
                                        });
                                        typeText();
                                        counta = 74;
                                    }
                                });
                            })
                        }

                    });

                })

            }
        });

        button2.addEventListener("click", function () {
            if (countb == 1) {
                textToType = `I have plenty of time for final registration; I'll explore the college first`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                countb = 2;
            } continueBtn.addEventListener("click", function () {
                if (countb == 2) {
                    textToType = `Okay, so let's go inside`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 3;
                } else if (countb == 3) {
                    document.querySelector('html').style.backgroundImage = 'url("./ground.webp")';
                    textToType = 'We have the ground and the main building:';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 4;
                } else if (countb == 4) {
                    document.querySelector('html').style.backgroundImage = 'url("./canteen.webp")';
                    textToType = 'Canteen:';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 5;
                } else if (countb == 5) {
                    document.querySelector('html').style.backgroundImage = 'url("./BasketBall.jpg")';
                    textToType = 'BasketBall Court:';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 100;
                } else if (countb == 100) {
                    document.querySelector('html').style.backgroundImage = 'url("./football.webp")';
                    textToType = 'FootBall Ground::';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 6;
                } else if (countb == 6) {
                    document.querySelector('html').style.backgroundImage = 'url("./boxing.jpg")';
                    textToType = 'Boxing-Rings';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 7;
                } else if (countb == 7) {
                    textToType = 'As I was coming out, I noticed a guy with a perfect physique that caught my attention.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 8;
                } else if (countb == 8) {
                    textToType = 'He noticed that I was staring at him.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 9;
                } else if (countb == 9) {
                    textToType = 'He called me over and asked if I was a new admission?';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 10;
                } else if (countb == 10) {
                    textToType = 'I replied, "Yes, I am."';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 11;
                } else if (countb == 11) {
                    textToType = 'He asked if I needed any help.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 12;
                } else if (countb == 12) {
                    textToType = `I thought that getting help from someone who has already gone through the registration process would be a lot easier, so I said, "Yes, if you're free, I can use some help."`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 13;
                } else if (countb == 13) {
                    textToType = 'He started packing his bag and asked, "So, what do you want from me?"';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 14;
                } else if (countb == 14) {
                    textToType = `I replied, "If you're free and don't have any plans, could you help me with the final registration?"`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 15;
                } else if (countb == 15) {
                    textToType = 'He replied, "Okay, newbie, come with me.I started following him as he led the way."';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 16;
                } else if (countb == 16) {
                    document.querySelector('html').style.backgroundImage = 'url("./hallway.jpg")';
                    textToType = 'He asked me when I received the letter from the university.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 17;
                } else if (countb == 17) {
                    textToType = 'I replied, "I received it this morning."';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 18;
                }
                else if (countb == 18) {
                    document.querySelector('html').style.backgroundImage = 'url("./reception.jpg")';
                    textToType = `We reached the reception, and he gave his number to me. What's with this guy? But I think at least we're friends now. A weird friendship start, but it's something.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 19;
                }
                else if (countb == 19) {
                    textToType = `In reception, there is a cute girl. I first saw her, and it feels like I'm seeing my girlfriend.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 20;
                }
                else if (countb == 20) {
                    textToType = ' But then I remember my little sister, Lilly, and my uncle.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 21;
                }
                else if (countb == 21) {
                    textToType = `Don't dwell on these thoughts. I need to focus on getting a scholarship and supporting my family.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 22;
                }
                else if (countb == 22) {
                    textToType = `"That girl said, 'Yeah, so let's meet up in the evening,'" and she walked away.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 23;
                }
                else if (countb == 23) {
                    textToType = `So, ignoring all these thoughts, I said, "I want to do the final registration. This is the letter from the University`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.src = "./envelop.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    countb = 24;
                }
                else if (countb == 24) {
                    textToType = 'The receptionist gave me the form and said to fill it out and return it to her as soon as possible.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    const imgDiv = document.querySelector(".img");
                    if (imgDiv) {
                        imgDiv.remove();
                    }
                    typeText();
                    countb = 25;
                }
                else if (countb == 25) {
                    textToType = 'I took the form and started filling it out. It was quite different, almost fancy.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 26;
                }
                else if (countb == 26) {
                    textToType = 'I filled out the form and submitted it at the reception.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 27;
                }
                else if (countb == 27) {
                    textToType = `The receptionist gave me a card; I didn't know what it was, but I took it and moved forward to the playground`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 28;
                }
                else if (countb == 28) {
                    document.querySelector('html').style.backgroundImage = 'url("./evening.jpg")';
                    textToType = 'I encountered that boxing guy again on the ground.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 29;
                }
                else if (countb == 29) {
                    textToType = 'He asked, "So, newbie, did you register yourself?"';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 30;
                }
                else if (countb == 30) {
                    textToType = `I replied, "Yes, but I don't know what to do with this card."`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("cardA");
                    image.src = "./Acard.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    countb = 31;
                }
                else if (countb == 31) {
                    textToType = 'He shouted, "You have a golden "A" !';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("cardA");
                    image.src = "./Acard.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    countb = 32;
                }
                else if (countb == 32) {
                    textToType = 'Everyone started staring at me because I had a golden A, and I felt so embarrassed because of the attention.';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("cardA");
                    image.src = "./Acard.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    countb = 33;
                }
                else if (countb == 33) {
                    textToType = 'Listen, do you know how to use it?';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("cardA");
                    image.src = "./Acard.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    countb = 34;
                }
                else if (countb == 34) {
                    textToType = `I replied, "No, I don't know how to use this card." So He showed his card and said...`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("cardB");
                    image.src = "./Bcard.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    countb = 35;
                }
                else if (countb == 35) {
                    textToType = `See, there are three letters which show your smartness according to your marks: A, B, and C. And their colors show you're good in certain areas, like blue for sports, green for music. But gold shows you're exceptional in everything. And you have an A with gold, so you're an elite student.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("cardB");
                    image.src = "./Bcard.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    countb = 36;
                }
                else if (countb == 36) {
                    textToType = 'And the first line is your username, and the second line is your password. You can access anything with this card';
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("img");
                    const image = document.createElement("img");
                    image.classList.add("cardB");
                    image.src = "./Bcard.jpg";
                    centeredDiv.appendChild(image);
                    document.body.appendChild(centeredDiv);
                    typeText();
                    countb = 37;
                }
                else if (countb == 37) {
                    textToType = `Oh, I see, but I still understand nothing," I replied.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 38;
                }
                else if (countb == 38) {
                    textToType = `"Oh, leave it," he laughed out loud. `;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 39;
                }
                else if (countb == 39) {
                    textToType = `"Hey, newbie, do you want to join me and my friends for today's hangout? There's one more newbie in our group," he suggested, just like you," he added.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 40;
                }
                else if (countb == 40) {
                    textToType = `"I thought this would be a great opportunity to make new friends," so I nodded my head in agreement and said, "Yes."`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 41;
                }
                else if (countb == 41) {
                    textToType = `So now I've made my senior my first friend and I'm heading to have some fun with him`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    typeText();
                    countb = 42;
                }
                else if (countb == 42) {
                    textToType = ` You have completed this chapter.`;
                    index = 0;
                    textElement.textContent = '';
                    centeredDiv.remove();
                    centeredDiv = document.createElement("div");
                    centeredDiv.classList.add("btn");

                    button1 = document.createElement("button");
                    button1.textContent = "HOME";
                    button2 = document.createElement("button");
                    button2.textContent = "Chapter 4";
                    centeredDiv.appendChild(button1);
                    centeredDiv.appendChild(button2);
                    document.body.appendChild(centeredDiv);

                    button1.addEventListener("click", function () {
                        window.location.href = "index.html";
                    });
                    button2.addEventListener("click", function () {
                        window.location.href = "chapter4.html";
                    });
                    typeText();
                }
            })
        });
    }
});
