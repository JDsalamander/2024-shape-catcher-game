//@ts-check
import { collectableItem } from "./collectables-base";

class SimpleGoodItem extends collectableItem {
    constructor(x = 0, y = 0) {
        super(x, y);
        
    }
}