export interface School {
    userId: string,
    id: string;
    title: string;
    body: string;
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
      weight: string,
      duration: string,
  //   menu: { breakfast: string, lunch: string, dinner: string }
}
export interface Bullet {
    bulletHead: string,
    bulletPoints: string[];
    bulletColor: string;
}
