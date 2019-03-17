export interface School {
    userId: string,
    id: string;
    title: string;
    body: string;
}

export interface MessMenu {
    id: string,
    dayofweek: string,
    menu: { breakfast: string, lunch: string, dinner: string }
}
export interface Bullet {
    bulletHead: string,
    bulletPoints: string[];
    bulletColor: string;
} 