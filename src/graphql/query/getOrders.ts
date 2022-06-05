import gql from "graphql-tag";

export const GET_ORDER_BY_ID = gql`
  query getOrderDetails($orderId: ID!) {
    parcel(id: $orderId) {
      objectId
      createdAt
      updatedAt
      amount
      address
      zone
      area
      active
      status
      customer_name
      customer_phone
      return_tracking
      order_id
      requestedSlot
      deliveryRider {
        objectId
        username
      }
      brand {
        objectId
        name
      }
      moid
      paidAt
      payment_transaction
      cost_breakdown
      is_express
      description
      notes {
        __typename
        ... on Element {
          value
        }
      }
      weight
      delivery_charge
      delivery_type
      parcel_type
      payment_status
      pickup_cash
      timelines {
        __typename
        ... on Element {
          value
        }
      }
    }
  }
`;
