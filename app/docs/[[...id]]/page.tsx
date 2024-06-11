import React from 'react'

const DocsPage = ({
  params,
  searchParams,
}: {
  params: string
  searchParams: string
}) => {
  console.log('catch all route params', params)
  console.log('this is the query params', searchParams)
  return <div>Docs page</div>
}

export default DocsPage
