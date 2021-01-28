import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'

import Alert from './alert'

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

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('The passwords do not match', 'danger')
    } else {
      register({ name, email, password })
    }
  }

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
            type='text'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            placeholder='Name'
          />
        </AuthFormGroup>
        <AuthFormGroup>
          <AuthInput
            type='email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
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
          />
          <AuthSmlText>Must be at least 6 character in length</AuthSmlText>
        </AuthFormGroup>
        <AuthFormGroup>
          <AuthInput
            type='password'
            name='password2'
            placeholder='Confirm Password'
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </AuthFormGroup>
        <AuthBtnFormGroup>
          <AuthBtn type='submit' value='Register' />
        </AuthBtnFormGroup>
        <AuthBtnFormGroup>
          <Space>
            <AuthSmlText>
              Already have an account?{' '}
              <AuthLink to='/login'>Login here.</AuthLink>
            </AuthSmlText>
          </Space>
        </AuthBtnFormGroup>
      </AuthForm>
    </AuthContainer>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register)
