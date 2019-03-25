export interface School {
    userId: string,
    id: string;
    title: string;
    body: string;
}

export interface ParkingSpot {
  spotOpen: boolean,
  spotId: string,
  timestamp: string
}

export interface Lesson {
      lessonId: string,
      title: string,
      subtitle: string,
      grade: [],
      ageLimit: [],
      author: string,
      category: string,
      attributes: [],
      datePosted: string,
      featureTitle: string,
      mediaDetails: { },
      url: string,
      views: string,
      duration: string,
  //   menu: { breakfast: string, lunch: string, dinner: string }
}
export interface Bullet {
    bulletHead: string,
    bulletPoints: string[];
    bulletColor: string;
}
