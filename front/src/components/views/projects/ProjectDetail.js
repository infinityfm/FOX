import React, { Component } from 'react'
import { connect } from 'react-redux'
import DjangoCSRFToken from 'django-react-csrftoken'
import {
  CForm,
  CFormGroup,
  CInput,
  CLabel, CRow,
  CCol,
  CTextarea,
  CLink,
  CButton,
  CEmbed,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
} from "@coreui/react";

import { getProfileFetch, getContractorList, setProjectId } from '../../../actions'
import { FoxApiService } from '../../../services'
import { ActivityLog } from '../../activity_log'
import { FoxSwitchGroup } from '../../../utils'
import { FoxReactSelectFormGroup } from '../../forms'
import { permitOptions } from './optionsLists'

const foxApi = new FoxApiService();

class ProjectDetail extends Component {

  state = {
    name: "",
    location: "",
    description: "",
    start_date: "",
    end_date: "",
    company: this.props.company,
    contractor: "-1",
    work_at_height: false,
    lifting_work: false,
    confined_space: false,
    hot_work: false,
    chemical_handling: false,
    work_alone: false,
    work_at_sensitive_area: false,
    cold_work: false,
    error: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCheck = event => {
    this.setState({
      [event.target.name]: event.target.checked
    })
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (parseInt(this.state.contractor) < 0) {
      this.setState({
        error: 'Contractor was not selected! Please, choose contractor form the list'
      })
    } else {
      this.formData = this.state;
      delete this.formData.error;
      await foxApi.updateEntityOf('projects', this.props.match.params.id, this.formData).then(() => {
        this.props.history.goBack()
      },
        (error) => {
          console.error(error);
          this.setState({
            error: 'Project update failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
    }
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getDetailsOf('projects', this.props.match.params.id))
      .then((data) => this.setState({ ...data }))
      .then(() => this.props.getContractorList())
      .then(() => this.props.setProjectId(this.props.match.params.id))
  }

  render = () => {
    const options = this.props.options ? this.props.options.map(option => { return { value: option.id, label: option.username } }) : null
    return (
      <CRow>
        <CCol>{this.props.role === 'CliAdm' ?
          <CCard>
            <CCardHeader>
              <CCardTitle>Project Details</CCardTitle>
            </CCardHeader>
            <CCardBody>
              <CForm
                onSubmit={this.handleSubmit}
              >
                <DjangoCSRFToken />
                <CFormGroup>
                  <CLabel htmlFor="name">Name</CLabel>
                  <CInput
                    id="name"
                    name='name'
                    placeholder="Enter project name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="location">Location of works</CLabel>
                  <CInput
                    id="location "
                    name="location"
                    placeholder="Project Works Location"
                    value={this.state.location}
                    onChange={this.handleChange}
                    required />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="description">Description</CLabel>
                  <CTextarea
                    id="descrption"
                    name="description"
                    placeholder="Please, enter short description of the projet"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                  />
                </CFormGroup>
                <CFormGroup>
                  <CRow>
                    <CCol lg="6">
                      <CLabel htmlFor="start_date">Start Date</CLabel>
                      <CInput
                        type="datetime-local"
                        id="start_date"
                        name="start_date"
                        value={this.state.start_date}
                        onChange={this.handleChange}
                        required
                      />
                    </CCol>
                    <CCol lg="6">
                      <CLabel htmlFor="end_date">End Date</CLabel>
                      <CInput
                        type="datetime-local"
                        id="end_date"
                        name="end_date"
                        value={this.state.end_date}
                        onChange={this.handleChange}
                        required
                      />
                    </CCol>
                  </CRow>
                </CFormGroup>
                <FoxReactSelectFormGroup
                  options={options}
                  inputInfo="contractor"
                  inputValue={this.state.contractor}
                  handleChange={this.handleReactSelect}
                />
                <CFormGroup>
                  <CLink
                    className="btn btn-outline-dark mr-3"
                    to={`${this.props.match.url}/ptw`}
                  >
                    See Permission To Work
              </CLink>
                  <CLink
                    className="btn btn-outline-dark"
                    to={`${this.props.match.url}/documents`}
                  >
                    Attached Documents
              </CLink>
                </CFormGroup>
                <FoxSwitchGroup
                  groupLabel='Choose the related hazardous work
                  from the list below:'
                  options={permitOptions}
                  handleCheck={this.handleCheck}
                  parentState={this.state}
                />
                <CButton shape="pill" type="submit" color="success" variant="outline" block>Save changes</CButton>
                {this.state.error
                  ? <p>{this.state.error}</p>
                  : null
                }
              </CForm>
            </CCardBody>
          </CCard>

          :
          <React.Fragment>
            <ActivityLog projectId={this.props.match.params.id} />
            <CEmbed
              ratio="16by9"
            >
              <iframe src={`${window.location.origin}/api/ptw/${this.props.match.params.id}`} />
            </CEmbed>
          </React.Fragment>
        }
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    company: state.currentUser.company,
    options: state.entityListTable.tableData,
    role: state.currentUser.role
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getContractorList: () => dispatch(getContractorList()),
  setProjectId: (id) => dispatch(setProjectId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail)
