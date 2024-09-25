import { useState } from "react";
import type { OrderItem } from '../types';

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    //const [total, setTotal] = useState(0);
   // const [auth, setAuth] = useState(false);

    const addItem = () =>{
        console.log('agregando....')
    }
    return {
        addItem
    }
}