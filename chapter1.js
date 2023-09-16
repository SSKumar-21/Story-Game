const textElement = document.getElementById('text');
const continueBtn = document.getElementById('chapter1');
var textToType = `Ah, today's day was so tiring. After completing my high school, I was searching for a university...
 Click to Continue`;
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
        textToType = `It's 2 AM already in the morning, and I have not slept yet.`;
        index = 0;
        textElement.textContent = '';
        typeText();
        const audioElement = document.createElement('audio');
        audioElement.autoplay = true;
        const wavSource = document.createElement('source');
        wavSource.src = 'soft.mp3';
        wavSource.type = 'audio/mpeg';
        audioElement.appendChild(wavSource);
        document.body.appendChild(audioElement);

        centeredDiv = document.createElement("div");
        centeredDiv.classList.add("btn");

        button1 = document.createElement("button"); 
        button1.textContent = "Think About Past";

        button2 = document.createElement("button"); 
        button2.textContent = "Sleep Now";

        centeredDiv.appendChild(button1);
        centeredDiv.appendChild(button2);
        document.body.appendChild(centeredDiv);
        first = false;

        button1.addEventListener("click", function () {
            if (counta == 1) {
                textToType = `Watching from the window, I saw so many stars.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 2;
                console.log(counta);
            }
        });

        continueBtn.addEventListener("click", function () {
            if (counta == 2) {
                textToType = `Mom, Dad, I miss you so much.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 3;
            } else if (counta == 3) {
                textToType = ` I remember that car accident when I was just 5 years old.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 4;
            } else if (counta == 4) {
                textToType = `It left a lasting impact on me, and even at such a young age, I couldn't help but feel like it was somehow my fault.`;
                index = 0;
                textElement.textContent = ``;
                centeredDiv.remove();
                typeText();
                counta = 5;
            }  else if (counta == 5) {
                textToType = `The memories of that day still haunt me, and I wish I could turn back time and change what happened.`;
                index = 0;
                textElement.textContent = ``;
                centeredDiv.remove();
                typeText();
                counta = 6;
            } else if (counta == 6) {
                textToType = `I wish I hadn't distracted Daddy from driving in heavy rain. it was my fault.`;
                index = 0;
                textElement.textContent = ``;
                centeredDiv.remove();
                typeText();
                counta = 8;
            } 
            else if (counta == 8) {
                textToType = `Sorry, Mom. Sorry, Dad. It's all my fault.`;
                index = 0;
                textElement.textContent = ``;
                centeredDiv.remove();
                typeText();
                counta = 9;
            } else if (counta == 9) {
                textToType = `I promise, Mom and Dad, I will take care of my little sister and make all of you proud....`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 10;
            }else if (counta == 10) {
                textToType = ` and I will take responsibility for everything I've done in my past.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 11;
            } else if (counta == 11) {
                textToType = `A cold breeze of air entered my room, wiping my tears.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 12;
            } else if (counta == 12) {
                textToType = `A photo frame fell.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                counta = 13;
            } else if (counta == 13) {
                textToType = `Oh, that's the photo of my mom and dad. i miss u MOM , I miss u DAD`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();

                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("img");
                const image = document.createElement("img");
                image.src = "./sports.jpg";
                centeredDiv.appendChild(image);
                document.body.appendChild(centeredDiv);

                counta = 14;
            } else if (counta == 14) {
                textToType = `I put the photo back and lie down on my bed, in hopes that I will get admission to the cheap university...`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                const imgDiv = document.querySelector(".img");
                if (imgDiv) {
                    imgDiv.remove();
                }

                typeText();
                counta = 15;
            } else if (counta == 15) {
                textToType = `So I could not be a burden on my uncle. After Mom and Dad, he was the only one because of whom my sister and I are able to live.`;
                index = 0;
                textElement.textContent = '';
                typeText();
                centeredDiv.remove();
                const imgDiv = document.querySelector(".img");
                if (imgDiv) {
                    imgDiv.remove();
                }
                counta = 16;
            } else if (counta == 16) {
                textToType = `Thinking of these things, I don't know when I fell into a deep sleep.`;
                index = 0;
                textElement.textContent = '';
                typeText();
                centeredDiv.remove();
                counta = 17;
            } else if (counta == 17) {
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
                button2.textContent = "Chapter 2";
                centeredDiv.appendChild(button1);
                centeredDiv.appendChild(button2);
                document.body.appendChild(centeredDiv);

                button1.addEventListener("click",function () {
                    window.location.href = "index.html";
                });
                button2.addEventListener("click",function () {
                    window.location.href = "chapter2.html";
                });
                typeText();
                counta = 18;
            }
        });






        button2.addEventListener("click", function () {
            if (countb == 1) {
                textToType = `I'm already so tired today. I hope I shall sleep as soon as possible.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                countb = 2;
                console.log(countb);
            }
        });

        continueBtn.addEventListener("click", function () {
            if (countb == 2) {
                textToType = `I started counting sheep. One sheep, two sheep...`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                countb = 3;
            } else if (countb == 3) {
                textToType = `Thirty-four... sheep... Thirty-five... she..ep...`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                countb = 4;
            } else if (countb == 4) {
                textToType = `I don't know when I fell into a deep sleep.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                typeText();
                countb = 5;
            } else if (countb == 5) {
                textToType = ` You have completed this chapter.`;
                index = 0;
                textElement.textContent = '';
                centeredDiv.remove();
                centeredDiv = document.createElement("div");
                centeredDiv.classList.add("btn");

                button1 = document.createElement("button"); 
                button1.textContent = "HOME";
                button2 = document.createElement("button"); 
                button2.textContent = "Chapter 2";
                centeredDiv.appendChild(button1);
                centeredDiv.appendChild(button2);
                document.body.appendChild(centeredDiv);

                button1.addEventListener("click",function () {
                    window.location.href = "index.html";
                });
                button2.addEventListener("click",function () {
                    window.location.href = "chapter2.html";
                });
                typeText();
                countb = 6;
            }
        })
    }
})