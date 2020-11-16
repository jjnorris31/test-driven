import {ListInterface} from "./ListInterface";

export class List implements ListInterface {

    currentSize: Number;
    list: String[];

    constructor() {
        this.currentSize = 0;
        this.list = [];
    }

    add(item: String): boolean {
        return false;
    }

    clear(): void {
    }

    contains(): boolean {
        return false;
    }

    get(index: Number): String {
        return "";
    }

    indexOf(item: String): Number {
        return -1;
    }

    remove(index: Number): String {
        return "";
    }

    size(): Number {
        return 0;
    }
}