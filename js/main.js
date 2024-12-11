/*(function () {
    const fizzBuzz = {
        olElement: document.getElementById('fizzbuzz'),
        windowHeight: window.innerHeight,

        start: 1,
        end: 100,


        liElement: document.querySelector('li'),

        init() {
            this.gap = this.end;
            document.documentElement.classList.add('js-enabled');
            this.generateItemElements();
            window.addEventListener('scrollend', this.generateLiNumberElement.bind(this));
        },
        generateLiNumberElement() {
            const bodyHeight = document.body.clientHeight;
            const scroll = window.scrollY;
            console.log(bodyHeight, scroll, this.windowHeight);
            if (scroll + this.windowHeight >= bodyHeight) {
                this.generateItemElements();
            }
        },
        toggleSum(evt) {
            [evt.currentTarget.dataset.sum, evt.currentTarget.textContent] = [evt.currentTarget.textContent, evt.currentTarget.dataset.sum]
            console.log(evt.currentTarget);
        },
        getSum(until) {
            return (until * (until + 1)) / 2;
        },
        generateItemElements() {
            for (; this.start <= this.end; this.start++) {
                if (this.start % 15 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', `<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`)
                } else if (this.start % 5 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', `<li class="buzz">BU<i>zz</i></li>`);
                } else if (this.start % 3 === 0) {
                    this.olElement.insertAdjacentHTML('beforeend', `<li class="fizz">FI<i>zz</i></li>`);
                } else {
                    const liElement = document.createElement('li');
                    liElement.textContent = this.start;
                    liElement.addEventListener('click', this.toggleSum);
                    liElement.dataset.sum = this.getSum(this.start);
                    this.olElement.insertAdjacentElement('beforeend', liElement);
                }
            }

            this.end += this.gap;
        },

    };

    fizzBuzz.init();
})()*/

import {settings as s} from "./settings";

const olElement = createOlElement();
const windowHeight = window.innerHeight;

function createOlElement() {
    const olElement = document.createElement("ol");
    olElement.classList.add(s.olClass);
    olElement.setAttribute("id", s.olID);
    document.body.appendChild(olElement);

    return olElement;
}

function generateLiElement(olElement) {
    for (; s.minValue <= s.maxValue; s.minValue++) {
        if (s.minValue % 3 === 0 && s.minValue % 5 === 0) {
            console.log(`FIZZBUZZ`);
            olElement.insertAdjacentHTML("beforeend", `<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`)
        } else if (s.minValue % 3 === 0) {
            console.log(`FIZZ`);
            olElement.insertAdjacentHTML("beforeend", `<li class="fizz">FI<i>zz</i></li>`);
        } else if (s.minValue % 5 === 0) {
            console.log(`BUZZ`);
            olElement.insertAdjacentHTML("beforeend", `<li class="buzz">BU<i>zz</i></li>`);
        } else {
            console.log(`${s.minValue}`);
            olElement.insertAdjacentHTML("beforeend", `<li>${s.minValue}</li>`);
        }
    }
    let gap = s.maxValue;

    s.maxValue += gap;
}

function generateLiMoreElement() {
    const bodyHeight = document.body.clientHeight;
    const scroll = window.scrollY;
    console.log(bodyHeight, scroll, windowHeight);

    if (scroll + windowHeight >= bodyHeight) {
        generateLiElement(olElement);
    }
}

addEventListener("scrollend", () => {
    generateLiMoreElement();
});

generateLiElement(olElement);

document.documentElement.classList.add("js-enabled");
