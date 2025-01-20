"use client"

// Hooks
import useFetch from "@/lib/useFetch";
import { useOrdersContext } from "@/context/OrdersContext";

// Components
import OrdersContainer from "@/components/OrdersContainer";
import OrdersTable from "@/components/OrdersTable";
import { OrdersProps } from "@/interfaces/OrdersProps";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce"

export default function Home() {

  const { page,search,status } = useOrdersContext();

  const [data, setData] = useState<OrdersProps[]>([]);

  const [ debounceSearch ] = useDebounce(search, 800)

  useEffect(() => {
    async function fetchData() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const fetchedData = await useFetch({ page, search, status })
      setData(fetchedData);
      console.log(fetchedData)
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, debounceSearch, status])



  return (
    <main className="vh-100 m-5 mt-4 border border-3 border-bottom-0 p-3 rounded-2">
      <OrdersContainer/>
      <OrdersTable data={data}/>
    </main>
  );
}
