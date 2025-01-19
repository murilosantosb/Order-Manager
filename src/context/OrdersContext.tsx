'use client'

import React, { createContext, use, useState } from "react";

interface OrdersContextProps {
    page: number;
    search: string;
    status: string;
    date: string;
    setPage: (page: number) => void;
    setSearch: (search: string) => void;
    setStatus: (status: "pending" | "completed" | "") => void;
    setDate: (date: string, order?: "asc" | "desc" | "") => void; 
}


const OrdersContext = createContext<OrdersContextProps | undefined>(undefined);

export const OrdersProvider : React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("")
    const [date, setDate] = useState("")

    return(
        <OrdersContext.Provider value={{page,search,status,date,setPage,setSearch,setStatus,setDate}}>
            {children}
        </OrdersContext.Provider>
    )
}


export const useOrdersContext = () => {
    const context = use(OrdersContext)

    if(!context) {
        throw new Error("Contexto não válido!")
    }

    return context
}


// page, search, status, date