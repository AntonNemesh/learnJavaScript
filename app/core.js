import { moduleOOP } from "./moduleOOP.js"
import { moduleDate } from "./moduleDate.js"
import { moduleDestruct } from "./moduleDestruct.js"
import { moduleJSON } from "./moduleJSON.js"
import { moduleVar } from "./moduleVar.js"
import { modulePrototype } from "./modulePrototype.js"

const hot = module.hot;
if (hot) { hot.accept(); }

console.clear();

// moduleDate();
// moduleOOP();
// moduleDestruct();
// moduleJSON();
// moduleVar();
modulePrototype();