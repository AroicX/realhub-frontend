import React, { useEffect, useState } from 'react'
import Toastr from 'toastr'
import Item from '@/components/dashboard/item'
import Layout from '@/components/layout/layout'
import StepOne from '@/components/forms/create/StepOne'
import StepTwo from '@/components/forms/create/StepTwo'
import StepThree from '@/components/forms/create/StepThree'
import StepFour from '@/components/forms/create/StepFour'
import StepFive from '@/components/forms/create/StepFive'
import StepSix from '@/components/forms/create/StepSix'
import StepSeven from '@/components/forms/create/StepSeven'
import StepEight from '@/components/forms/create/StepEight'
import StepCompleted from '@/components/forms/create/StepCompleted'
import { ADD_LISTING } from '@/actions/requests'

export default function AddListing() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({})
  // const [form, setForm] = useState({
  //   listing_type: 'Apartment',
  //   is_apartment: 2,
  //   lease_type: 'Short Lease',
  //   bedrooms: '1 ',
  //   bathrooms: '1 ',
  //   property_desc: 'This is a property',
  //   property_name: 'Three Bedroom Apartment at lekki, with pool side',
  //   policy_res: 'no tone',
  //   address: 'No 16A Tunisia cresent',
  //   price: '80000',
  //   duration: 'Per Week',
  // })

  useEffect(() => {
    console.log(form)
  }, [form])

  const propagate = (e) => setForm({ ...form, ...e })

  const handleSumbit = () => {
    const callback = (response) => {
      if (response.status > 200) {
        setStep(step + 1)
        Toastr.success(response.message)
      }
    }
    const onError = (error) => {
      if (error.response) {
        const { data } = error.response
        Toastr.error(data.message)
      }
    }

    ADD_LISTING(form, callback, onError)
  }

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row sm:items-center p-4 border-b border-secondary mb-9">
        <div className="font--unna text-xl flex-1">Add a new listing</div>
      </div>

      {/*  */}
      <div className="flex 2xl:flex-row flex-row justify-center items-start mt-20">
        {step === 8 && <Item />}
        {step === 8 && (
          <div className="hidden 2xl:block mt-40">
            <hr className="border-dotted w-80 h-2 mr-5 ml-5 mt-30" />
          </div>
        )}

        <div className="flex items-center justify-center mb-10">
          <div className="bg-white md:w-90 w-full box-border pt-8 border border-black add-listing-form">
            {step === 1 && (
              <StepOne
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
              />
            )}
            {step === 2 && (
              <StepTwo
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
              />
            )}
            {step === 3 && (
              <StepThree
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
              />
            )}
            {/* {step === 4 && <Upload setStep={setStep} currentStep={step} formdata={form}
                propagate={propagate} />} */}
            {step === 4 && (
              <StepFour
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
              />
            )}
            {step === 5 && (
              <StepFive
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
              />
            )}
            {step === 6 && (
              <StepSix
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
              />
            )}
            {step === 7 && (
              <StepSeven
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
              />
            )}
            {step === 8 && (
              <StepEight
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
                handleSumbit={handleSumbit}
              />
            )}
            {step === 9 && (
              <StepCompleted
                setStep={setStep}
                currentStep={step}
                formdata={form}
                propagate={propagate}
              />
            )}
          </div>
        </div>
      </div>

      {/*  */}
    </Layout>
  )
}
