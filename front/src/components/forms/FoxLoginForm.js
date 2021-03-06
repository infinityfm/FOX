import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CForm,
  CFormGroup,
  CInput,
  CContainer,
  CRow,
  CCol,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CInputGroupText,
  CButton,
  CImg
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import DjangoCSRFToken from 'django-react-csrftoken'
import { userLoginFetch } from '../../actions'
import { FoxPasswordInput } from './inputs'
import { ForgetPasswordModal } from '../modals'

class FoxLoginForm extends Component {

  state = {
    username: "",
    password: "",
    showModal: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  setModalVisibility = () => {
    const { showModal } = this.state
    this.setState({
      showModal: !showModal
    })
  }

  handleSubmit = event => {
    const { username, password } = this.state
    event.preventDefault()
    this.props.userLoginFetch({ username, password })
  }

  render() {
    const { username, password, showModal } = this.state
    return (
      <CRow alignHorizontal="center">
        <CCol md="6">
          <CContainer fluid>
            <CRow className="mb-2">
              <CCol md="8" className="mx-auto">
                <CImg
                  width="100%"
                  src='/static/front/images/signed-logo.png'
                  className="mb-2"
                />
              </CCol>
            </CRow>
            <CRow className="mt-2 mb-2" alignHorizontal="center">
              <CCol className="mx-auto">
                <h1 className="fox-login-welcome">Welcome to FOX!</h1>
                <p className="fox-login-welcome"> Please log in to your account.</p>
              </CCol>
            </CRow>
            <CRow className="mt-2 mb-2">
              <CCol className="mx-auto">
                <CForm
                  onSubmit={this.handleSubmit}
                >
                  <DjangoCSRFToken />
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText invalid className={`fox-input-before${this.props.loginError ? "-invalid" : ""}`}>
                          <CIcon name="cilUser" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        id="username"
                        name='username'
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                        invalid={this.props.loginError}
                        required />
                      <CInputGroupAppend>
                        <CInputGroupText className={`fox-input-after${this.props.loginError ? "-invalid" : ""}`}>
                          <CIcon name="blank" />
                        </CInputGroupText>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CFormGroup>
                  <FoxPasswordInput
                    inputName="password"
                    password={password}
                    placeholder="Password"
                    submitError={this.props.loginError}
                    handleChange={this.handleChange}
                  />
                  {this.props.loginError
                    ? <p className={"fox-form-invalid-feedback"}>The username or password you have entered is invalid.
                Please try again.</p>
                    : null
                  }
                  <CFormGroup>
                    <CButton shape="pill" type="submit" value="Submit" color="dark" block >Login</CButton>
                  </CFormGroup>
                </CForm>
                <CButton type="link" size="sm" className="align-self-center" onClick={this.setModalVisibility}>Forgot password?</CButton>
              </CCol>
            </CRow>
          </CContainer >
        </CCol>
        <ForgetPasswordModal show={showModal} setModalVisibility={this.setModalVisibility} />
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loginError: state.loginError
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(FoxLoginForm)