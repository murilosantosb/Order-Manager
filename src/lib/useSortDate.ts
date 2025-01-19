import { useOrdersContext } from "@/context/OrdersContext";

export default function useSortDate(date: string, order: "asc" | "desc" | ""): number[] {
    const { setDate } = useOrdersContext();

    const dates: number[] = [];

    dates.push(parseInt(date));

    return dates.sort((a, b) => {
        const dateA = new Date(a).getTime();
        const dateB = new Date(b).getTime();

        if (order === "asc") {
            setDate(date, "asc")
            return dateA - dateB;
        }else{
            setDate(date, "desc")
            return dateB - dateA;
        }
        
    })
   
}