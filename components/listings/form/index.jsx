import React, { useEffect, useState } from 'react'

// import Stepone from './stepOne'
// import StepThree from './stepThree'
// import StepFour from './stepFour'
// import StepTwo from './stepTwo'
// import StepFive from './stepFive'
// import StepSix from './stepSix'
// import StepSeven from './stepSeven'
// import StepEight from './stepEight'
// import Item from '@/components/dashboard/item'
// import Allset from './allset'
import Layout from '@/components/layout/layout'

export default function AddListing() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState([])

  useEffect(() => {
    console.log(form)
  }, [form])

  const propagate = (e) => setForm({ ...form, ...e })

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row sm:items-center p-4 border-b border-secondary mb-9">
        <div className="font--unna text-xl flex-1">Add a new listing</div>
      </div>

      {/*  */}

      {/*  */}
    </Layout>
  )
}
