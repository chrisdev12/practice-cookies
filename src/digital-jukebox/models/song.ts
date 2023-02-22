import { randomUUID } from "crypto";

export interface ISong {
  id: string;
  name: string;
  duration: number; //in seconds
  image: string;
  artist: string;
}

export class Song implements ISong {
  #id: string;
  #name: string;
  #duration: number;
  #image: string;
  #artist: string;

  constructor({ name, duration, image, artist }: Omit<ISong, "id">) {
    this.#id = randomUUID();
    this.#name = name;
    this.#duration = duration;
    this.#image = image;
    this.#artist = artist;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get duration() {
    return this.#duration;
  }
  get image() {
    return this.#image;
  }
  get artist() {
    return this.#artist;
  }
}
