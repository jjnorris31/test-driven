export interface ListInterface {

    currentSize: number;
    list: String[];

    /**
     * Adds a new item to the list
     * @param item the item to be added
     * @return true if the item was added successfully, or false if was not
     */
    add(item: String): boolean;


    /**
     * Removes all the items to the list
     */
    clear(): void;

    /**
     * Checks if an item exists
     * @returns true if the item is in the list or false if it is not
     */
    contains(item: String): boolean;

    /**
     * Gets an element by index
     * @param index the index of the element to be retrieved
     * @returns the item if the item is in the list or null if it is not
     */
    get(index: number): String;

    /**
     * Gets the index of a given item
     * @param item a element to search the index
     * @returns the index of the given item or -1 if the item is not in the list
     */
    indexOf(item: String): number

    /**
     * Removes an item of the list by index
     * @param index the index of the element to delete
     * @returns the item if the item is in the list or null if it is not
     */
    remove(index: number): String;

    /**
     * Gets the size of the list
     * @returns the current size of the list
     */
    size(): number;

    /**
     * Checks if the list is empty
     * @returns true if the list is empty or false if it is not
     */
    isEmpty(): boolean;
}