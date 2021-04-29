import api from '@/services/api';
import React, { createContext, useEffect, useState } from 'react'

export const ListingContext = createContext(null);

const ListingProvider = ({ children }) => {
    const [listings, setListings] = useState([]);
    const getListings = async () => {
        const { data } = await api.get("/listings?status=OPEN");
        
        setListings(data.data);
    }
    useEffect(() => {
        getListings();
    }, [])
    // useEffect(() => {console.log(listings);}, [listings])
    return <ListingContext.Provider value={{ listings }}>
        {children}
    </ListingContext.Provider>
}

export default ListingProvider;