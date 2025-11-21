const URL = "https://icanhazdadjoke.com/";

export async function getRandomJoke() {
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Helene'
            }
        })
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}