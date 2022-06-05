export interface Parcel {
  active: boolean;
  address: string;
  amount: number;
  area: string;
  brand: Brand;
  cost_breakdown: CostBreakdown;
  createdAt: string;
  customer_name: string;
  customer_phone: string;
  deliveryRider: DeliveryRider;
  delivery_charge: number;
  delivery_type: string;
  description: string;
  is_express: boolean;
  moid: string;
  notes: any[];
  objectId: string;
  order_id: string;
  paidAt: null;
  parcel_type: string;
  payment_status: string;
  payment_transaction: null;
  pickup_cash: boolean;
  requestedSlot: string;
  return_tracking: null;
  status: string;
  timelines: Timeline[];
  updatedAt: string;
  weight: number;
  zone: string;
  __typename: string;
}

export interface Brand {
  __typename: string;
  objectId: string;
  name: string;
}

export interface DeliveryRider {
  objectId: string;
  username: string;
  __typename: string;
}

export interface CostBreakdown {
  total: number;
  cod: number;
  delivery_charge: number;
}

export interface Timeline {
  value: Value;
}

export interface Value {
  date: DateClass;
  stateChange: boolean;
  text: string;
  __typename: string;
}

export interface DateClass {
  __type: string;
  iso: string;
}
