export async function getData(url: string, headers: {}) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headers
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Fetch/validation error:', error);
        throw (error);
    }
}