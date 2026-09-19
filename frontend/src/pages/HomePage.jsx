import React from 'react'
import NavbarTop from '../components/NavbarTop'

import TodayStats from '../components/TodayStats'
import QuickActions from '../components/QuickActions'
import RecentInspections from '../components/RecentInspections'
import InspectionActions from '../components/InspectionActions'
import PosterByGovt from '../components/PosterByGovt'


const HomePage = () => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">

      <NavbarTop />

      <PosterByGovt />

      <div className="mx-2 flex min-h-0 flex-1 flex-col">

        <QuickActions />
   
        <div className="min-h-0 flex-1 overflow-y-auto">
          <RecentInspections />
        </div>

        
        <InspectionActions />

      </div>

    </div>
  )
}
export default HomePage
