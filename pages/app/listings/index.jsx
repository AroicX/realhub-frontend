import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/layout";
import ListingHeader from "@/components/listings/ListingHeader";
import Tours from "@/components/listings/Tours";
import ListingPayment from "@/components/listings/ListingPayment";
import PropertyList from "@/components/dashboard/propertylist";
import api from "@/services/api";
import useAuth from "@/hooks/useAuth";

function AppListing({}) {
  const [tab, setTab] = useState("property-list");
  const [list, setList] = useState([]);
  const getListings = async () => {
    const { data } = await api.get("/listings/user");
    setList(data.data);
  };

  useEffect(() => {
    getListings();
  }, []);
  return (
    <Layout>
      <ListingHeader selectedTab={tab} handleTab={(e) => setTab(e)} />
      {tab === "property-list" && <PropertyList lists={list} />}
      {tab === "tours" && <Tours />}
      {tab === "payments" && <ListingPayment />}
    </Layout>
  );
}
export default useAuth(AppListing);
