import type { OrderItem } from "../types/order";

interface Props {
  onNewOrder: (order: OrderItem) => void;
}

export default function OrderForm({ onNewOrder }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newOrder: OrderItem = {
      id: Date.now(),
      artifact: formData.get("artifact") as string,
      customerName: formData.get("customerName") as string,
      email: formData.get("email") as string,
      quantity: Number(formData.get("quantity")),
      notes: (formData.get("notes") as string) || "",
    };

    onNewOrder(newOrder);
    e.currentTarget.reset();
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background/70 backdrop-blur rounded-lg p-6 shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="artifact"
          placeholder="Artifact"
          className="border p-2 w-full rounded text-body"
        />
        <input
          name="customerName"
          placeholder="Your Name"
          className="border p-2 w-full rounded text-body"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded text-body"
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          className="border p-2 w-full rounded text-body"
        />
        <textarea
          name="notes"
          placeholder="Notes"
          className="border p-2 w-full rounded text-body"
        />
        <button
          type="submit"
          className="bg-accent text-white px-4 py-2 rounded hover:opacity-90"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
