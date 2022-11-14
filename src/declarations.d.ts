interface IStore {
  allData: {
    loading: boolean;
    error: import("@reduxjs/toolkit").SerializedError;
    data: {
      crew: ICrew[];
      destinations: IDestinations[];
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

interface IDestinations {
  description: string;
  distance: string;
  images: IImage;
  name: string;
  travel: string;
}

interface ITechnology {
  name: string;
  description: string;
  image: IImage;
}

interface IImage {
  png: string;
  webp: string;
}
