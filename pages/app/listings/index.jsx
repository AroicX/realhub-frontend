import React, { useState } from 'react'
import Layout from '@/components/layout/layout'
import ListingHeader from '@/components/listings/ListingHeader'
import PropertyList from '@/components/listings/PropertyList'
import Tours from '@/components/listings/Tours'

export default function AppListing({}) {
  const [tab, setTab] = useState('property-list')

  return (
    <Layout>
      <ListingHeader selectedTab={tab} handleTab={(e) => setTab(e)} />
      {tab === 'property-list' && <PropertyList />}
      {tab === 'tours' && <Tours />}
    </Layout>
  )
}
