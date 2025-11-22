export async function getRandomJoke() {
    const random = Math.floor(Math.random() * 2)
    console.log(random);
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
        const result = random === 0 ? data.value : data.joke
        return result;
    } catch (error) {
        console.log(error);
    }
}