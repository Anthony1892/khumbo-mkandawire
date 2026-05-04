import { useState } from "react";
import OrderForm from "./OrderForm";
import type { OrderItem } from "../types/order";

export default function Orders() {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  return (
    <section className="min-h-screen flex flex-col items-center px-6 md:px-16 py-16">
      {/* Form wrapper */}
      <div className="w-full max-w-md bg-background/70 backdrop-blur rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-heading">Place an Order</h2>
        <OrderForm
          onNewOrder={(order) => {
            setOrders((prev) => [...prev, order]);
          }}
        />
      </div>

      {/* Orders list wrapper */}
      <div className="w-full max-w-md mt-10 bg-background/50 backdrop-blur rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-subheading">Submitted Orders</h3>
        {orders.length === 0 ? (
          <p className="text-sm italic text-body">No orders yet.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((order) => (
              <li key={order.id} className="border-b pb-2">
                <p className="font-medium text-body">
                  {order.artifact} (Qty: {order.quantity})
                </p>
                <p className="text-sm text-readable">
                  By {order.customerName} ({order.email})
                </p>
                {order.notes && (
                  <p className="text-sm italic text-body">Notes: {order.notes}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
