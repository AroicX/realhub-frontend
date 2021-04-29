import React from "react";
import List from "@/components/dashboard/propertylist/list";
import Empty from "@/components/listings/empty";

export default function PropertyList({ lists }) {
  return (
    <div>
      {lists && lists.length > 0 ? (
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-x-8">
          {lists.map((list, id) => (
            <List list={list} key={id} />
          ))}
        </div>
      ) : (
        <Empty />
      )}
      {/* <Empty /> */}
      {/* <List /> */}
    </div>
  );
}
