import { ISong } from "../models/song";
import { songMockCreator } from "../utils/songCreator";

export interface ISongRepository {
  getAll: (limit: number) => ISong[];
}

export class SongRepository implements ISongRepository {
  getAll(limit: number) {
    return Array.from({ length: limit }, songMockCreator);
  }
}
