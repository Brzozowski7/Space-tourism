interface IStore {
  allData: {
    loading: boolean;
    error: import("@reduxjs/toolkit").SerializedError;
    data: {
      crew: ICrew[];
      destinations: IDestination[];
      technology: ITechnology[];
    };
  };
}

interface ICrew {
  bio: string;
  images: IImage;
  name: string;
  role: string;
}

interface IDestination {
  description: string;
  distance: string;
  images: IImage;
  name: string;
  travel: string;
}

interface ITechnology {
  name: string;
  description: string;
  images: ITechImages;
}

interface IImage {
  png: string;
  webp: string;
}

interface ITechImages {
  portrait: string;
  landscape: string;
}
