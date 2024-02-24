const onload = () => {
    async function createCards() {
        const response = await fetch(`https://ablyv-dev.azurewebsites.net/lumina/api/extemp/prompts/`);
        const data = await response.json();

        // Assuming there is only one object in the array
        const promptsArray = data.length > 0 ? data[0].prompts : [];

        for (let i = 0; i < promptsArray.length; i++) {
            let newCard = document.createElement("div");
            let newCardContent = document.createElement("p");
            document.getElementById('card-container').appendChild(newCard);
            newCard.appendChild(newCardContent);

            newCardContent.innerHTML = promptsArray[i] + "<a href='/#' class='fa-solid fa-arrow-right'></a>" || 'No text available';
        }
    }
    createCards();
}