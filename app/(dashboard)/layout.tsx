import NewTodoForm from '@/components/NewTodoForm'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Dashboard Layout</h2>
      <div>
        <NewTodoForm />
      </div>
      {children}
    </div>
  )
}

export default DashboardLayout
