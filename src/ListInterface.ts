export interface ListInterface {

    currentSize: Number;
    list: String[];

    /**
     * Adds a new item to the list
     * @param item the item to be added
     * @return true if the item was added successfully, or false if was not
     */
    add(item: String):boolean;


    /**
     * Removes all the items to the list
     */
    clear():void;

    /**
     * Checks if an item exists
     * @return true if the item is in the list, or false if is not
     */
    contains():boolean;

    /**
     * Gets an element by index
     * @param index
     */
    get(index:Number):String;

    /**
     * Gets the index of a given item
     * @param item a element to search the index
     * @returns the index of the given item or -1 if the item is not in the list
     */
    indexOf(item: String):Number

    /**
     * Removes an item by index
     * @param index the index of the element to delete
     */
    remove(index:Number):String;

    /**
     * Gets the size of the list
     */
    size():Number;
}