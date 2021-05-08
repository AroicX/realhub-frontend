import Empty from "@/components/listings/ListingHeader";
import Form from "@/components/listings/form";
import Lists from "@/components/listings/lists";
import useAuth from "@/hooks/useAuth";

function Listing() {
  return (
    <div>
      {/* <Empty /> */}
      <Form />
      {/* <Lists /> */}
    </div>
  );
}

export default useAuth(Listing);
