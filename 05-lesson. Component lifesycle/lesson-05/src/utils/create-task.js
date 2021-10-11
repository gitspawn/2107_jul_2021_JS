import { loremIpsum } from "lorem-ipsum";
import { v4 as uuidv4 } from "uuid";

export default function createTask() {
  return {
    id: uuidv4(),
    text: loremIpsum(),
    completed: false,
  };
}
