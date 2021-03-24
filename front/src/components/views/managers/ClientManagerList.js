import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FoxEntityListTable,
  FoxTableWithManagerDeleteOption,
} from "../../tables";
import {
  getProfileFetch,
  getClientManagerList,
  clearList,
} from "../../../actions";
import { WithLoading } from "../../loadings";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

class ClientManagerList extends Component {
  componentDidMount = async () => {
    await this.props
      .getProfileFetch()
      .then(() =>
        this.props.getClientManagerList({
          role: this.props.role,
          signal: this.abortController.signal,
        })
      )
      .catch((error) => console.log(error))
      .finally(() => this.props.changeLoadingState());
  };

  abortController = new window.AbortController();

  componentWillUnmount = () => {
    this.abortController.abort();
    this.props.clearList();
  };

  render = () => {
    return this.props.role == "CliAdm" ? (
      <FoxTableWithManagerDeleteOption
        {...this.props}
        tableName="Managers"
        fields={this.props.clientManagerTable.fields}
        getBadge={getBadge}
        tableData={this.props.clientManagerTable.tableData}
        updateList={this.props.getClientManagerList}
        loading={this.props.loading}
        showNewButton={true}
      />
    ) : (
      <FoxEntityListTable
        {...this.props}
        updateList={this.props.getClientManagerList}
        tableName="Managers"
        fields={this.props.clientManagerTable.fields}
        getBadge={getBadge}
        tableData={this.props.clientManagerTable.tableData}
        loading={this.props.loading}
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    clientManagerTable: state.entityListTable,
    role: state.currentUser.role,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  getClientManagerList: ({ ...kwargs }) =>
    dispatch(getClientManagerList({ ...kwargs })),
  clearList: () => dispatch(clearList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithLoading(ClientManagerList));
