import { ISong, Song } from "../models/song";
import { faker } from "@faker-js/faker";

export const songMockCreator = (): ISong =>
  new Song({
    name: faker.random.words(5),
    duration: parseInt(faker.random.numeric(4)),
    image: faker.random.words(10),
    artist: faker.random.words(15),
  });
