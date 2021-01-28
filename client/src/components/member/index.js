import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Logout } from '../../actions/auth'

import {
  MemberContainer,
  MemberMenu,
  MemberLink,
  Profile,
  RegProfile,
  TextTop,
  Tag,
  Dash,
  Loggout
} from './style/member.style'

const MemberBar = ({
  isMemberOpen,
  toggleMember,
  Logout,
  auth: { isAuthenticated, loading }
}) => {
  const authLinks = (
    <>
      <TextTop>Welcome to the Dev3027 members area.</TextTop>
      <Tag onClick={Logout} href='#!'>
        <Loggout />
        &nbsp; Log out
      </Tag>
      <MemberLink to='/dashboard'>
        <Dash />
        &nbsp; Dashboard
      </MemberLink>
    </>
  )

  const guestLinks = (
    <>
      <TextTop>
        Join a social network for developers and designers where you can get
        assistance, challenge yourself and grow as a community.
      </TextTop>

      <MemberLink to='/login'>
        <Profile />
        &nbsp; Log In
      </MemberLink>

      <MemberLink to='/register'>
        <RegProfile />
        &nbsp; Register
      </MemberLink>
    </>
  )
  return (
    <>
      <MemberContainer isMemberOpen={isMemberOpen} onClick={toggleMember}>
        <MemberMenu>
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        </MemberMenu>
      </MemberContainer>
    </>
  )
}

MemberBar.propTypes = {
  Logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { Logout })(MemberBar)
