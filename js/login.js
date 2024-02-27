// html 요소 찾아서 매칭시켜주고 시작하기
// #은 각 요소의 id로 찾겠다는 뜻임. 무조건 붙여줘야함
const inputId = document.querySelector("#id");
const inputPassword = document.querySelector("#password");
// .은 각 요소의 class로 찾겠다는 뜻임
const button = document.querySelector(".btn");

const fadingImage = document.getElementById("fading-image");

let pictures = ["images/insta1.png", "images/insta2.png", "images/insta3.png", "images/insta4.png"];
let idx = 0;

let fadeInComplete = false;
let fadeOutComplete = false;

function fadeIn() {
    fadingImage.style.opacity = "1";
    fadeInComplete = true;
}

function fadeOut() {
    fadingImage.style.opacity = "0";
    fadeOutComplete = true;
}

function changePic() {
    if (fadeInComplete && fadeOutComplete) {
        idx++;
        fadingImage.src = pictures[idx%4];
        fadeInComplete = false; // Reset flag for next cycle
        fadeOutComplete = false; // Reset flag for next cycle
    }
}

function alternateFade() {
    fadeIn();
    // 2초 후에 setTimeout 실행
    // 근데 이 setTimeout에 전달하는 함수는 또 2초 후에 fadeOut 실행
    setTimeout(() => {
        fadeOut();
        setTimeout(alternateFade, 2000); // Call alternateFade again after fadeOut
    }, 2000); // Wait for 2 seconds before fading out
    changePic();
}

alternateFade();

function loginBtn() {
    let idValue = inputId.value;
    let passwordValue = inputPassword.value;

    if (idValue.length > 0 && passwordValue.length > 0) {
        button.disabled = false;
        // 둘 다 입력되었으면 색깔바뀌고 clickable
        button.style.cursor = "pointer";
        button.style.backgroundColor = "#1c7ed6";
    } else {
        button.disabled = true;
        button.style.cursor = "default";
        button.style.backgroundColor = "#bfdffd";
    }
}

inputId.addEventListener('keyup', loginBtn);
inputPassword.addEventListener('keyup', loginBtn);