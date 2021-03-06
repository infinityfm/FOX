import React, { Component } from 'react'
import { connect } from 'react-redux'
import DjangoCSRFToken from 'django-react-csrftoken'
import { getProfileFetch, getDocumentList, getWorkerList } from '../../../actions'
import {
  CForm,
  CFormGroup,
  CLabel,
  CRow,
  CCol,
  CTextarea,
  CLink,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CCardTitle,
  CCardSubtitle
} from "@coreui/react";
import { FoxApiService } from '../../../services'
import { DisplayFile, WorkerReview } from '../../../utils'

const foxApi = new FoxApiService();

class ProjectDetail extends Component {

  state = {
    description: "",
    created: "",
    last_resolved: "",
    status: "",
    project: "",
    manager: "",
    error: "",
    filename: "",
    file_id: "",
    current_worker_id: "",
    current_worker_info: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleWorkerSelect = event => {
    this.state.current_worker_id === event.target.name ?
      this.setState({
        current_worker_id: ""
      })
      :
      this.setState({
        current_worker_id: event.target.name
      })
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.status === "Rejected" && !this.state.description) {
      this.setState({
        error: 'Rejections reason was not provided! Please, specify the rejection reason!'
      })
    } else {
      this.formData = this.state;
      delete this.formData.error;
      delete this.formData.created;
      delete this.formData.last_resolved;
      delete this.formData.current_worker_id
      delete this.formData.current_worker_info
      await foxApi.patchEntityOf('approvals', this.props.match.params.id, this.formData)
        .then(() => {
          this.props.history.goBack()
        })
        .catch((error) => {
          console.error(error);
          this.setState({
            error: 'Project update failed!' +
              ' Please check your input and try again!' +
              ' In case this problem repeats, please contact your administrator!'
          })
        })
    }
  }

  downloadFile = async (e) => {
    this.setState({
      filename: e.target.value,
      file_id: e.target.name
    }, () => {
      foxApi.downloadDocument(this.state.file_id)
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          const filename = this.state.filename.split('/').pop();
          link.setAttribute('download', filename);
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        })
        .catch((error) => {
          console.error('File download failed!');
          console.error(error)
        })
    })
  }

  componentDidMount = async () => {
    await this.props.getProfileFetch()
      .then(() => foxApi.getDetailsOf('approvals', this.props.match.params.id))
      .then((data) => this.setState(
        { ...data }, () => {
          this.props.getDocumentList({ project_id: this.state.project }, true);
          this.props.getWorkerList({ project_id: this.state.project }, false)
        }
      ))
  }

  render = () => {
    return (
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CCardTitle>
                Attached Documents
              </CCardTitle>
            </CCardHeader>
            <CCardBody>
              {this.props.documents
                ?
                this.props.documents.map((document, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      <h6>
                        {document.name}
                      </h6>
                      {document.url_to_doc ?
                        <CLink
                          key={`dl-${document.id}`}
                          href={document.url_to_doc}
                          target="_blank"
                          className="btn btn-ghost-primary"
                        >
                          Open this document in Google Docs
            						</CLink>
                        :
                        // <React.Fragment>
                        <CButton
                          variant="outline"
                          color="primary"
                          key={`cb-${document.id}`}
                          id={document.id}
                          name={document.id}
                          value={document.filename}
                          onClick={this.downloadFile}
                        >
                          Download document
              					</CButton>
                        // {/* <DisplayFile document={document} /> */}
                        // </React.Fragment>
                      }
                    </React.Fragment>
                  )
                })
                :
                null}
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <CCardTitle>
                Workers
              </CCardTitle>
            </CCardHeader>
            <CCardBody>
              {this.props.workers ?
                this.props.workers.map((worker, idx) => {
                  return (
                    <CCard key={`card-${idx}`} className="mb-0">
                      {/* <CCardHeader key={`ch-${idx}`} id={worker.id}>

                      </CCardHeader> */}
                      <CCardBody key={`cbody-${idx}`}>
                        <h5 key={`h5-${idx}`} className="m-0 p-0">{worker.name}</h5>
                        <h6 key={`h6-${idx}`} className="m-0 p-0">{worker.position_in_company}</h6>
                        <CButton
                          key={`btn-${idx}`}
                          block
                          color="link"
                          className="text-left m-0 p-0"
                          id={worker.id}
                          value={worker.id}
                          name={worker.id}
                          onClick={this.handleWorkerSelect}
                        >Display Details</CButton>
                        <CCollapse key={`clps-${idx}`} show={this.state.current_worker_id === worker.id.toString()}>
                          <WorkerReview workerId={worker.id} />
                        </CCollapse>
                      </CCardBody>
                    </CCard>
                  )
                })
                :
                null
              }
            </CCardBody>
          </CCard>

          <CCard>
            <CCardBody>
              <CForm onSubmit={this.handleSubmit}>
                <DjangoCSRFToken />
                <CFormGroup>
                  <CLabel htmlFor="description">Reject reason:</CLabel>
                  <CTextarea
                    id="description"
                    name="description"
                    value={this.state.description ? this.state.description : ""}
                    onChange={this.handleChange}
                  >
                  </CTextarea>
                </CFormGroup>
                <CFormGroup>
                  <CButton
                    className="mr-3"
                    shape="pill"
                    type="submit"
                    name="status"
                    value="Approved"
                    color="success"
                    variant="outline"
                    onClick={this.handleChange}
                  >
                    Approve
										</CButton>
                  <CButton
                    shape="pill"
                    type="submit"
                    name="status"
                    value="Rejected"
                    color="danger"
                    variant="outline"
                    onClick={this.handleChange}
                  >
                    Reject
									</CButton>
                </CFormGroup>
                {this.state.error
                  ? <p>{this.state.error}</p>
                  : null
                }
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow >
    )
  }
}

const mapStateToProps = state => {
  return {
    documents: state.additionalEntityListTable.tableData,
    workers: state.entityListTable.tableData
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getDocumentList: (params, additional) => dispatch(getDocumentList(params, additional)),
  getWorkerList: (params, additional) => dispatch(getWorkerList(params, additional)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail)
