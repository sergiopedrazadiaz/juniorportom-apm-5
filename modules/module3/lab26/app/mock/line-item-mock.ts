import {LineItem} from "../model/line-item";
import {PRODUCTS} from "../mock/product-mock";


export const LINEITEMS: LineItem[] = [
    {
        lineNumber: 102030,
        purchasePrice: 5000000,
        product: [PRODUCTS[0], PRODUCTS[1]]
    },
    {
        lineNumber: 204060,
        purchasePrice: 25000000,
        product: [PRODUCTS[1], PRODUCTS[2]]
    },
    {
        lineNumber: 306090,
        purchasePrice: 15000000,
        product: [PRODUCTS[0], PRODUCTS[2]]
    }
];

  