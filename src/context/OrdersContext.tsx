'use client'

import React, { createContext, use, useState } from "react";

interface OrdersContextProps {
    page: number;
    search: string;
    status: string;
    setPage: (page: number) => void;
    setSearch: (search: string) => void;
    setStatus: (status: "pending" | "completed" | "") => void;
}


const OrdersContext = createContext<OrdersContextProps | undefined>(undefined);

export const OrdersProvider : React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");

    return(
        <OrdersContext.Provider value={{page,search,status,setPage,setSearch,setStatus}}>
            {children}
        </OrdersContext.Provider>
    )
}


export const useOrdersContext = () => {
    const context = use(OrdersContext);

    if(!context) {
        throw new Error("Contexto não válido!");
    }

    return context;
}