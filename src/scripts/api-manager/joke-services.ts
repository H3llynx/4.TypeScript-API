export async function getRandomJoke() {
    const random = Math.floor(Math.random() * 2)
    const URL = random === 0 ? "https://api.chucknorris.io/jokes/random" : "https://icanhazdadjoke.com/"
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Sofa army'
            }
        })
        const data = await response.json();
        const result = {
            joke: random === 0 ? data.value : data.joke,
            type: random === 0 ? "chuck" : "dad"
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}