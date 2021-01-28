import React from 'react'
import {
  DashLink,
  DashGroup,
  UserCircle,
  BlackTie,
  GradCap
} from './styles/dashboard.style'

const DashboardActions = () => {
  return (
    <DashGroup>
      <DashLink to={'/edit-profile'}>
        <UserCircle /> Edit Profile
      </DashLink>
      <DashLink to={'/add-experience'}>
        <BlackTie /> Add Experience
      </DashLink>
      <DashLink to={'/add-education'}>
        <GradCap /> Add Education
      </DashLink>
    </DashGroup>
  )
}

export default DashboardActions
