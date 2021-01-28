import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCurrentProfile } from '../../actions/profile'
import Alert from '../auth/alert'

import {
  BoxCtrCol,
  BoxFlex,
  BoxLft,
  Title,
  Text,
  Tag,
  UserCircleWh
} from './styles/dashboard.style'
import DashboardActions from './DashboardActions'
import { Spinner } from '../spinner/spinner'

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile()
  }, [])
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <>
      <BoxLft>
        <Text>
          <Alert />
        </Text>
        <Title>Dashboard</Title>
        <BoxFlex>
          <UserCircleWh />
          <Text>{user && user.name}</Text>
        </BoxFlex>
      </BoxLft>
      {profile !== null ? (
        <>
          <DashboardActions />
        </>
      ) : (
        <>
          <BoxCtrCol>
            <Alert />
            <Text>You have not set up your profile. Add your information</Text>
            <Tag to='/create-profile'>Update Profile</Tag>
          </BoxCtrCol>
        </>
      )}
    </>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
