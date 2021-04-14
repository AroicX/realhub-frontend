import React, { useState } from 'react'
import Layout from '@/components/layout/layout'
import ListingHeader from '@/components/listings/ListingHeader'
import PropertyList from '@/components/listings/PropertyList'
import Tours from '@/components/listings/Tours'
import ListingPayment from '@/components/listings/ListingPayment'

export default function AppListing({}) {
  const [tab, setTab] = useState('tours')

  return (
    <Layout>
      <ListingHeader selectedTab={tab} handleTab={(e) => setTab(e)} />
      {tab === 'property-list' && <PropertyList />}
      {tab === 'tours' && <Tours />}
      {tab === 'payments' && <ListingPayment />}
    </Layout>
  )
}
