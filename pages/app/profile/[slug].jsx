import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import List from "@/components/listings/list";
import Nav from "@/components/nav/nav";
import api from "@/services/api";
import useAuth from "@/hooks/useAuth";

const Profile = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [user, setUser] = useState({});
  const getUserData = async (slug) => {
    const { data } = await api.get(`/users/${slug}/profile`);
    setUser(data.user);
  };

  const startChat = () => {
    if (user) {
      localStorage.setItem(
        "start-chat",
        JSON.stringify({ id: user.id, name: user.name })
      );
      router.push("/app/inbox")
    }
  };
  useEffect(() => {
    if (slug) getUserData(slug);
  }, [slug]);
  return (
    <div className="h-screen overflow-auto">
      <Nav custom={true} />
      <div className="md:px-6 px-4 pb-20">
        <div className="font-inter--reg text-2xl md:text-4xl mt-10">My Profile</div>
        <div className="mt-8 flex flex-row font-inter mt-10">
          <img src="/images/joy.png" className="w-24 h-24 rounded-full" />
          <div className="ml-4">
            <div className="text-lg font-bold">{user && user.name}</div>
            {/* <div className="text-dark-gray text-xs mt-1">
              Email: {user && user.email}
            </div>
            <div className="text-dark-gray text-xs mt-1">
              Tel: {user && user.phone}
            </div> */}
            <button
              onClick={startChat}
              className="bg-black text-white text-sm px-2 py-2 mt-3"
            >
              Send a Message
            </button>
          </div>
        </div>
        <div className="text-2xl mt-4 mb-6 flex flex-row justify-between mt-10">
          <div>Listing</div>
          <button className="px-3 text-sm py-2 bg-black text-white">
            Add a New Listing
          </button>
        </div>
        <div className="grid grid:cols-none md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-20">
          {user &&
            user.listings &&
            user.listings.map((listing, id) => {
              return (
                <List
                  key={id}
                  images={listing.images}
                  name={listing.property_name}
                  address={listing.address}
                  image="/images/image2.png"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default useAuth(Profile);
