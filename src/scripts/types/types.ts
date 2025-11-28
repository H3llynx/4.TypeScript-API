
export interface Joke {
    joke: string;
    type: 'chuck' | 'dad';
}

export interface ScoredJoke {
    joke: string,
    score: number,
    date: string
}

export interface Weather {
    temperature: number,
    icon: string
}