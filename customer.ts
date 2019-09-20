// tslint:disable-next-line: import-spacing

import {Items} from  './Items';

export class Customer {
    id: number;
    name: string;
    items: Items[];
    item: Items;

    quantity: number;  
    active: boolean;
    itemname: string;

}
