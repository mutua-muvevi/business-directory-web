import BusinessView from '@/sections/public/business/business'
import React from 'react'

const SingleBusiness = ({ params } : { params: { businessId: string } }) => {
  return <BusinessView params={params}/>
}

export default SingleBusiness