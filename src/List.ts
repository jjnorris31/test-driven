import {ListInterface} from "./ListInterface";

export class List implements ListInterface {

    currentSize: number;
    list: String[];

    constructor() {
        this.currentSize = 0;
        this.list = [];
    }

    add(item: String): boolean {
        this.list[this.currentSize] = (item);
        this.currentSize++;
        return true;
    }

    clear(): void {
        this.currentSize = 0;
        this.list = [];
    }

    contains(item: String): boolean {
        return this.indexOf(item) !== -1;
    }

    get(index: number): String {
        if (!this.isEmpty() && this.currentSize >= 0 && index < this.currentSize) {
            return this.list[index];
        }
        return null;
    }

    indexOf(item: String): number {
        if (!this.isEmpty()) {
            for (let i = 0; i < this.currentSize; i++) {
                if (this.list[i] === item) {
                    return i;
                }
            }
        }
        return -1;
    }

    remove(index: number): String {
        if (!this.isEmpty() && this.currentSize >= 0 && index < this.currentSize) {
            let itemToReturn = this.list[index];
            this.list[index] = this.list[this.currentSize - 1];
            this.currentSize--;
            return itemToReturn;
        }
        return null;
    }

    size(): number {
        return this.currentSize;
    }

    isEmpty(): boolean {
        return this.currentSize === 0;
    }
}
