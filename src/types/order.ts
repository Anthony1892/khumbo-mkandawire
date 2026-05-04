export interface OrderItem {
  id: number;
  artifact: string;
  customerName: string;
  email: string;
  quantity: number;
  notes?: string;
}
