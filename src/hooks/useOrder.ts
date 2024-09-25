import { useState } from "react";
import type { menuItem, OrderItem } from '../types';


export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    //const [total, setTotal] = useState(0);
   // const [auth, setAuth] = useState(false);

    const addItem = (item: menuItem) =>{
        console.log(item)
    }
    return {
        addItem
    }
}