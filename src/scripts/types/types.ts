
export interface Joke {
    joke: string;
    type: 'chuck' | 'dad';
    id: string
}

export interface ScoredJoke {
    id: string,
    joke: string,
    score: number,
    date: string
}

export interface Weather {
    temperature: number,
    icon: string
    description: string
}