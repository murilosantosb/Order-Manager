import { OrdersProps, OrdersResponse } from "@/interfaces/OrdersProps";

interface useFetchProps {
    page: number,
    date?: string,
    search?: string,
    status?: string,
}

export default async function useFetch({ page, search, status, date }: useFetchProps): Promise<OrdersProps[]> {

    let url = "https://apis.codante.io/api/orders-api/orders?";

    try {

        const params = new URLSearchParams();

        if (page) params.append("page", page.toString());
        if (search) params.append("search", search);
        if (status) params.append("status", status);
        if (date) params.append("date", date);

        url += params.toString()

        const response = await fetch(
            url,{
                cache: "force-cache",
            })

        if(!response.ok) {
            throw new Error(`Erro ao buscar os dados: ${response.statusText}`)
        }    
    
        const data: OrdersResponse = await response.json();

        return data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

// `https://apis.codante.io/api/orders-api/orders?page=${page}&search=${search || ""}&status=${status || ""}&date=${date || ""}`