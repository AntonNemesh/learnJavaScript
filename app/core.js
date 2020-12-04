import { moduleOOP } from "./moduleOOP.js"
import { moduleDate } from "./moduleDate.js"
import { moduleDestruct } from "./moduleDestruct.js"

const hot = module.hot;
if (hot) { hot.accept(); }

console.clear();

moduleDate();
moduleOOP();
moduleDestruct();