const trailer = document.getElementById("follow");

window.onmousemove = (event) => {
    const animationProperties = {
        transform: `translate(${event.clientX - trailer.offsetWidth / 2}px, ${event.clientY - trailer.offsetWidth / 2}px)`
    };
    trailer.animate(animationProperties, { duration: 800, fill: "forwards" });
};

const getApi = async (userPassword) => {
    try {
        const response = await fetch(`https://ablyv-dev.azurewebsites.net/game/api`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const requirements = await response.json();
        loopedCheck(requirements, userPassword);
    } catch (error) {
        alert('Error fetching API:', error.message);
    }
};

const loopedCheck = (requirements, userPassword) => {
    const reqElem = document.getElementById('reqs');
    reqElem.innerHTML = ''; // Clear previous content

    requirements.forEach(requirement => {
        if (requirement && requirement.solutions) {
            const match = requirement.solutions.some(v => userPassword.includes(v));
            if (match) {
                console.log(`Match for ${requirement.err || 'Unknown Requirement'}!`);
            } else {
                console.log(`${requirement.err || 'Unknown Requirement'}.`);
                const missedReq = document.createElement('p');
                missedReq.innerHTML = `${requirement.err || 'Unknown Requirement'}.`;
                reqElem.appendChild(missedReq);
            }
        }
    });
};

const elem = document.getElementById('input');
elem.addEventListener('input', () => {
    getApi(elem.value);
});
