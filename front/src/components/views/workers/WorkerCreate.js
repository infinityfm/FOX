import React, { Component } from 'react'
import DjangoCSRFToken from 'django-react-csrftoken'
import { connect } from 'react-redux'
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
  CButton,
  CInputFile
} from "@coreui/react";
import { getProfileFetch } from '../../../actions'
import { FoxApiService } from '../../../services'
import { FoxFormGroupWithUpload, FoxSelectFormGroup, FoxReactSelectFormGroup } from '../../forms'
import { positions, tradeCompetencies } from './optionLists'

const foxApi = new FoxApiService();

class WorkerCreate extends Component {

  state = {
    name: "",
    contractor: this.props.contractor,
    birthday: "",
    card_number_id: "",
    license_number: "",
    license_scan: "",
    passport: "",
    passport_scan: "",
    safety_green_card: "",
    safety_green_card_scan: "",
    position_in_company: -1,
    safety_quiz_answer: "",
    personal_declaration: "",
    submitCallback: "",
    // special_competency: "",
    // special_competency_scan: "",
    // competency_issued_by: "",
    registration_number: "",
    trade_competency: -1,
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleReactSelect = (option, event) => {
    this.setState({
      [event.name]: option.value
    })
  }

  handleFileUpload = event => {
    this.setState({
      [event.target.name]: event.target.files[0]
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    console.log("you are here");
    if (this.state.position_in_company === -1) {
      this.setState({
        error: 'Worker position in company was not selected! Please, choose position form the list'
      })
    }
    else if (this.state.trade_competency === -1) {
      this.setState({
        error: 'Trade competency was not selected! Please, choose competency form the list'
      })
    }
    else {
      this.requestData = this.state;
      delete this.requestData.error;
      this.formData = new FormData
      Object.entries(this.requestData).forEach(([key, value]) => {
        this.formData.append(key, value);
      })
      await foxApi.createEntityWithFile('workers', this.formData)
        .then((data) => {
          this.state.submitCallback(data.id)
        },
          (error) => {
            console.error(error);
            this.setState({
              error: 'Worker creation failed!' +
                ' Please check your input and try again!' +
                ' In case this problem repeats, please contact your administrator!'
            })
          })
    }
  }

  handleSimpleSubmit = (event) => {
    this.setState({
      submitCallback: (id) => { return this.props.history.goBack() }
    });
  }

  handleSubmitWithCompetencies = event => {
    this.setState({
      submitCallback: (id) => { this.props.history.push(`/workers/${id}/competencies/new`) }
    });
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
  }

  render = () => {
    const preventDefaultSubmit = e => {
      e.preventDefault();
    }
    return (
      <CRow>
        <CCol>
          <CForm
            onSubmit={this.handleSubmit}
          >
            <DjangoCSRFToken />
            <CFormGroup>
              <CLabel htmlFor="name">Name</CLabel>
              <CInput
                id="name"
                name='name'
                placeholder="Enter worker name"
                value={this.state.name}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="birthday">Birthday</CLabel>
              <CInput
                type="date"
                id="birthday"
                name="birthday"
                value={this.state.birthday}
                onChange={this.handleChange}
                required
              />
            </CFormGroup>
            <FoxReactSelectFormGroup
              options={positions}
              inputInfo="position_in_company"
              inputValue={this.state.position_in_company}
              handleChange={this.handleReactSelect}
            />
            <FoxSelectFormGroup
              options={tradeCompetencies}
              inputInfo="trade_competency"
              inputValue={this.state.trade_competency}
              handleChange={this.handleChange}
            />
            <CFormGroup>
              <CLabel htmlFor="card_number_id">Card number ID</CLabel>
              <CInput
                id="card_number_id"
                name='card_number_id'
                placeholder="Enter ID"
                value={this.state.card_number_id}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <FoxFormGroupWithUpload
              inputValue={this.state.license_number}
              handleChange={this.handleChange}
              handleFileUpload={this.handleFileUpload}
              inputInfo="license_number"
              uploadInfo="license_scan"
            />
            <FoxFormGroupWithUpload
              inputValue={this.state.passport}
              handleChange={this.handleChange}
              handleFileUpload={this.handleFileUpload}
              inputInfo="passport"
              uploadInfo="passport_scan"
            />
            <FoxFormGroupWithUpload
              inputValue={this.state.safety_green_card}
              handleChange={this.handleChange}
              handleFileUpload={this.handleFileUpload}
              inputInfo="safety_green_card"
              uploadInfo="safety_green_card_scan"
            />
            <CFormGroup>
              <CLabel htmlFor="registration_number">Registration number</CLabel>
              <CInput
                id="registration_number"
                name='registration_number'
                placeholder="Enter registration number"
                value={this.state.registration_number}
                onChange={this.handleChange}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="safety_quiz_answer">Safety quiz answer</CLabel>
              <CInputFile id="safety_quiz_answer" name="safety_quiz_answer" onChange={this.handleFileUpload}
                required />
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="personal_declaration">Personal declaration</CLabel>
              <CInputFile id="personal_declaration" name="personal_declaration" onChange={this.handleFileUpload}
                required />
            </CFormGroup>
            <CFormGroup>
              <CRow>
                <CCol md="6">
                  <CButton
                    onClick={this.handleSimpleSubmit}
                    type="submit"
                    color="dark"
                    variant="outline"
                    block>Create Worker</CButton>
                </CCol>
                <CCol md="6">
                  <CButton
                    onClick={this.handleSubmitWithCompetencies}
                    type="submit"
                    color="primary"
                    variant="outline"
                    block>Create Worker and add special competencies</CButton>
                </CCol>
              </CRow>
            </CFormGroup>
            {this.state.error
              ? <p>{this.state.error}</p>
              : null
            }
          </CForm>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    contractor: state.currentUser.id,
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkerCreate)

