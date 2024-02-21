const trailer = document.getElementById('follow');

window.onmousemove = e =>{
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetWidth / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    } // tracer

    trailer.animate(keyframes, {
        duration: 800,
        fill: 'forwards'
    });
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("movereffect").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(iteration >= event.target.dataset.value.length){
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
    document.getElementById('movereffect').innerHTML = 'ACTIONS NOT WORDS';
    // Fix if keeping mouse on text!
}