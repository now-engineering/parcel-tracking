import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_ORDER_BY_ID } from "../../graphql/query/getOrders";
import { Parcel } from "../../tsTypes/Parcel";

const ParcelDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_ORDER_BY_ID, {
    variables: {
      orderId: id,
    },
  });
  const parcel: Parcel = data?.parcel;
  console.log({ data, loading, error });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data</p>;

  const KeyValue = ({ prop, value }: any) => (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white shadow-sm p-2 rounded text-center">
      <span className="font-bold">{prop} </span>
      <h4>{value}</h4>
    </div>
  );

  const Title = ({ title }: { title: string }) => (
    <h1 className="text-center font-bold text-xl mt-6 mb-3 italic text-gray-600 shadow">
      {title}
    </h1>
  );

  return (
    <div className="bg-blue-50 min-h-screen pb-5">
      <div className="lg:container mx-2 lg:mx-auto px-5 xl:px-1 pt-5">
        <h1 className="text-center font-bold text-3xl mb-5 py-2 bg-white shadow text-gray-700 tracking-widest">
          PARCEL DETAILS
        </h1>
        <Title title="Genaral" />
        <div className="grid grid-cols-12 gap-2">
          <KeyValue
            prop="Requested Slot"
            value={new Date(parcel?.requestedSlot)?.toLocaleString()}
          />
          <KeyValue prop="Recipient Name" value={parcel?.customer_name} />
          <KeyValue prop="Recipient Phone" value={parcel?.customer_phone} />
          <KeyValue prop="Recipient Address" value={parcel?.address} />
          <KeyValue
            prop="Created Date"
            value={new Date(parcel?.createdAt).toLocaleString()}
          />
          <KeyValue
            prop="Delivery Rider"
            value={parcel?.deliveryRider?.username}
          />
          <KeyValue prop="Recipient City" value={parcel?.area} />
          <KeyValue prop="Recipient Zone" value={parcel?.zone} />
        </div>
        <Title title="Product Info" />
        <div className="grid grid-cols-12 gap-2">
          <KeyValue prop="Product Type" value={parcel?.parcel_type} />
          <KeyValue prop="Delivery Type" value={parcel?.delivery_type} />
          <KeyValue prop="Weight" value={`${parcel?.weight} kg.`} />
          <KeyValue prop="Amount to Collect" value={parcel?.amount} />
        </div>
        <Title title="Delivary Charge" />
        <div className="grid grid-cols-12 gap-2">
          <KeyValue prop="Delivery Fee" value={parcel?.delivery_charge} />
          <KeyValue prop="COD Fee" />
          <KeyValue prop="Total Amount" value={parcel?.amount} />
        </div>

        <Title title="Timeline" />
        <div className="grid grid-cols-12 gap-2">
          {parcel?.timelines.map((item, key) => (
            <React.Fragment key={key}>
              <KeyValue
                prop={new Date(item.value.date.iso)?.toLocaleString()}
                value={item.value.text}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParcelDetails;
