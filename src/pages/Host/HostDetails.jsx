import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HostDetails() {
  return (
    <>
        <h1>Dashboard goes here</h1>
        <Outlet />
    </>
  )
}
