import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from '../../actions/profile'
import Alert from '../auth/alert'

import {
  FormContainer,
  FontLrg,
  FontLead,
  FontSml,
  FormGroup,
  FormGroupSocial,
  FormInput,
  FormSelect,
  FormTextArea,
  FormLink,
  InputBtn,
  Button,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from './style/form.style'

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  })

  const [displaySocial, toggleSocial] = useState(false)

  useEffect(() => {
    getCurrentProfile()

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills,
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram
    })
  }, [loading])

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  const onSubmit = (e) => {
    e.preventDefault()
    createProfile(formData, history, true)
  }

  return (
    <>
      <FormContainer>
        <FontLrg>Edit Your Profile</FontLrg>
        <FontLead>Edit your profile information</FontLead>
        <FontSml>* = required field</FontSml>

        <form onSubmit={(e) => onSubmit(e)}>
          <FormGroup>
            <FormSelect
              onChange={(e) => onChange(e)}
              name='status'
              value={status}>
              <option value='0'>* Select Professional Status</option>
              <option value='Developer'>Developer</option>
              <option value='Junior Developer'>Junior Developer</option>
              <option value='Senior Developer'>Senior Developer</option>
              <option value='Manager'>Manager</option>
              <option value='Student or Learning'>Student or Learning</option>
              <option value='Instructor'>Instructor or Teacher</option>
              <option value='Intern'>Intern</option>
              <option value='Other'>Other</option>
            </FormSelect>
            <FontSml>
              Give us an idea of where you are at in your career
            </FontSml>
          </FormGroup>
          <FormGroup>
            <FormInput
              type='text'
              placeholder='Company'
              name='company'
              onChange={(e) => onChange(e)}
              value={company}
            />
            <FontSml>Could be your own company or one you work for</FontSml>
          </FormGroup>
          <FormGroup>
            <FormInput
              type='text'
              placeholder='Website'
              name='website'
              onChange={(e) => onChange(e)}
              value={website}
            />
            <FontSml>Could be your own or a company website</FontSml>
          </FormGroup>
          <FormGroup>
            <FormInput
              type='text'
              placeholder='Location'
              name='location'
              onChange={(e) => onChange(e)}
              value={location}
            />
            <FontSml>City & state suggested (eg. NewYork, NY)</FontSml>
          </FormGroup>
          <FormGroup>
            <FormInput
              type='text'
              placeholder='* Skills'
              name='skills'
              onChange={(e) => onChange(e)}
              value={skills}
            />
            <FontSml>
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </FontSml>
          </FormGroup>
          <FormGroup>
            <FormInput
              type='text'
              placeholder='Github Username'
              name='githubusername'
              onChange={(e) => onChange(e)}
              value={githubusername}
            />
            <FontSml>
              If you want your latest repos and a Github link, include your
              username
            </FontSml>
          </FormGroup>
          <FormGroup>
            <FormTextArea
              placeholder='A short bio of yourself'
              name='bio'
              onChange={(e) => onChange(e)}
              value={bio}
            />
            <FontSml>Tell us a little about yourself</FontSml>
          </FormGroup>

          <FormGroupSocial>
            <Button type='button' onClick={() => toggleSocial(!displaySocial)}>
              Add Social Network Links
            </Button>
            <span>Optional</span>
          </FormGroupSocial>
          {displaySocial && (
            <>
              <FormGroupSocial>
                <Twitter />
                <FormInput
                  type='text'
                  placeholder='Twitter URL'
                  name='twitter'
                  onChange={(e) => onChange(e)}
                  value={twitter}
                />
              </FormGroupSocial>

              <FormGroupSocial>
                <Facebook />
                <FormInput
                  type='text'
                  placeholder='Facebook URL'
                  name='facebook'
                  onChange={(e) => onChange(e)}
                  value={facebook}
                />
              </FormGroupSocial>

              <FormGroupSocial>
                <Youtube />
                <FormInput
                  type='text'
                  placeholder='YouTube URL'
                  name='youtube'
                  onChange={(e) => onChange(e)}
                  value={youtube}
                />
              </FormGroupSocial>

              <FormGroupSocial>
                <Linkedin />
                <FormInput
                  type='text'
                  placeholder='Linkedin URL'
                  name='linkedin'
                  onChange={(e) => onChange(e)}
                  value={linkedin}
                />
              </FormGroupSocial>

              <FormGroupSocial>
                <Instagram />
                <FormInput
                  type='text'
                  placeholder='Instagram URL'
                  name='instagram'
                  onChange={(e) => onChange(e)}
                  value={instagram}
                />
              </FormGroupSocial>
            </>
          )}

          <FormGroup>
            <Alert />
          </FormGroup>
          <FormGroupSocial>
            <InputBtn type='submit' />
            <FormLink to='/dashboard'>Go Back</FormLink>
          </FormGroupSocial>
        </form>
      </FormContainer>
    </>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
)
