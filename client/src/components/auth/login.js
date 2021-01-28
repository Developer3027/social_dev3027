import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import PropTypes from 'prop-types'
import Alert from '../auth/alert'

import {
  AuthContainer,
  AuthTitle,
  AuthText,
  AuthForm,
  AuthFormGroup,
  AuthBtnFormGroup,
  AuthInput,
  AuthLink,
  AuthSmlText,
  AuthBtn,
  Space
} from './style/auth.style'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  // redirect if Authenticated
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <AuthContainer>
      <AuthTitle>Sign Up</AuthTitle>
      <AuthText>Create YourAccount</AuthText>
      <Alert />
      <AuthForm onSubmit={(e) => onSubmit(e)}>
        <AuthFormGroup>
          <AuthInput
            type='email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
            placeholder='Email'
          />
          <AuthSmlText>Recommend to use a email with a Gravatar</AuthSmlText>
        </AuthFormGroup>
        <AuthFormGroup>
          <AuthInput
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
            required
          />
          <AuthSmlText>Must be at least 6 character in length</AuthSmlText>
        </AuthFormGroup>
        <AuthBtnFormGroup>
          <AuthBtn type='submit' value='Log In' />
        </AuthBtnFormGroup>
        <AuthBtnFormGroup>
          <Space>
            <AuthSmlText>
              Do you need an account?{' '}
              <AuthLink to='/register'>Register here.</AuthLink>
            </AuthSmlText>
          </Space>
        </AuthBtnFormGroup>
      </AuthForm>
    </AuthContainer>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
