
export interface OrdersProps {
        id: number,
        customer_name: string,
        customer_email: string,
        order_date: string,
        amount_in_cents: number,
        status: string,
}

export interface OrdersResponse {
    data: OrdersProps[];
}

