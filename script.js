

let up = document.querySelector(".up");
window.onscroll = function () {

    if (this.scrollY >= 1000) {
        up.classList.add('show')
    } else {
        up.classList.remove('show')

    }

}

up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
};


document.addEventListener("click", function () {

    const menuBtn = document.querySelector('.menu-btn');
    const contentRight = document.querySelector('.content-right');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        contentRight.classList.toggle('active');

    });
});

let contentImg = document.querySelector(".cont-img");

let imgArray = ['cont1.jpg', '01.webp', '02.webp', '03.jpg', '04.jpg', 'phto.jpg'];

setInterval(() => {

    let randomNumber = Math.floor(Math.random() * imgArray.length);

    contentImg.style.backgroundImage = 'url("img/' + imgArray[randomNumber] + '")';

}, 10000);

// ouer Gallary

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        let overlay = document.createElement("div");

        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay);


        let popupBox = document.createElement("div");

        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            let imgHiden = document.createElement('h3');

            let imgText = document.createTextNode(img.alt);

            imgHiden.appendChild(imgText);

            popupBox.appendChild(imgHiden);

        }

        let popupImg = document.createElement("img");

        popupImg.src = img.src;

        popupBox.appendChild(popupImg);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeText = document.createTextNode("X");

        closeButton.appendChild(closeText)

        closeButton.className = 'close-button';

        popupBox.appendChild(closeButton);

    })
});

// close button

document.addEventListener("click", (e) => {

    if (e.target.classList.contains('close-button')) {

        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();

    }

})

let container = document.querySelectorAll(".switcher-imgs li");
let myContainer = Array.from(container);
let content = document.querySelectorAll(".content-gallery > div");

myContainer.forEach((ele) => {
    ele.addEventListener('click', function (e) {
        // console.log(ele)
        myContainer.forEach((ele) => {
            ele.classList.remove('activ')
        })
        e.currentTarget.classList.add('activ')
        content.forEach((ele) => {
            ele.style.display = 'none';
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'block';
    })
})

let ourOfSetTop = document.querySelector(".Our-SKILLS");

window.onscroll = function () {

    let skillsOffsetTop = ourOfSetTop.offsetTop;

    let skillsOffsetHeight = ourOfSetTop.offsetHeight;

    let windowHeight = this.innerHeight;

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)) {

        let skills = document.querySelectorAll(".skill-box .skill-prorams span");

        skills.forEach(skils => {

            skils.style.width = skils.dataset.progres;

        })
    }

}


let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".number");
let started = false;

window.addEventListener('scroll', function () {
    if (!started && isElementInViewport(section)) {
        nums.forEach(num => startCount(num));
        started = true;
    }
});

function startCount(el) {
    let goal = parseInt(el.dataset.goal);
    let currentValue = 0;
    let interval = setInterval(function () {
        currentValue++;
        el.textContent = currentValue;
        if (currentValue === goal) {
            clearInterval(interval);
        }
    }, 2000 / goal);
}

function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


