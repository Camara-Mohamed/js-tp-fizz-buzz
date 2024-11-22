(function () {
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
            window.addEventListener('scrollend', () => {
                this.generateLiNumberElement();
            });
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
})()

