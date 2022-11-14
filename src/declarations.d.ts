import { SerializedError } from "@reduxjs/toolkit";

export interface IStore {
  allData: {
    loading: boolean;
    error: SerializedError;
    data: {
      crew: ICrew[];
      destinations: IDestinations[];
      technology: ITechnology[];
    };
  };
}
export interface ICrew {
  bio: string;
  images: IImage;
  name: string;
  role: string;
}

export interface IDestinations {
  description: string;
  distance: string;
  images: IImage;
  name: string;
  travel: string;
}

export interface ITechnology {
  name: string;
  description: string;
  image: IImage;
}

export interface IImage {
  png: string;
  webp: string;
}
