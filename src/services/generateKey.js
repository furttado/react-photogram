import { v4 as uuidv4 } from "uuid";

const generateKey = () => {
  return uuidv4();
};

export default generateKey;
