

import OrdersContainer from "@/components/OrdersContainer";
import OrdersTable from "@/components/OrdersTable";

export default function Home() {
  return (
    <main className="m-4 mt-4 border border-3 border-bottom-0 p-3 rounded-2">
      <OrdersContainer/>
      <OrdersTable />
    </main>
  );
}
