import { cnetwork } from "../Common";
import { Result } from "../Search/tvmaze";

type Maze = {
    data: Result[];
}
  

  export type MazeState = Maze & cnetwork;