export interface Invoice {
  key: string;
  title: string;
  recipientEmail: string;
  issueDate: string;
  dueDate: string;
  recurring: boolean;
  itemsList: ItemsList[];
  additionalNotes: string;
  status: string;
  createdAt: string;
  attributes: Invoice;
}

export interface ItemsList {
  item: string;
  quantity: number;
  price: number;
  total: number;
}
