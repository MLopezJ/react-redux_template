import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {get_projects_action} from '../actions/projectsActions';

import {getProjects} from '../selectors/index'

import {project_TableHeader, project_tableOptions} from '../utils/config'

import TableComponent from '../components/Table';
import LoadingComponent from '../components/Loading';
import ContainerTitleComponent from '../components/ContainerTitle';

class ProjectsContainer extends Component {


    handleViewDashboard = (projectId) => {
        console.log(projectId)
    }

    componentDidMount = () => {
        if (this.props.projects.length === 0){
            this.props.get_projects_action()
        }
        
        
    }


    render() {
        console.log(this.props)
        console.log(project_TableHeader)
      return (
        <div>
            <ContainerTitleComponent title = {'Projects'} />
            {
                
                this.props.projects.length !== 0 ?
                <TableComponent
                    tableHeader = { project_TableHeader }
                    tableBody = { this.props.projects }
                    tableOptions = { project_tableOptions}
                    
                />
                :
                <LoadingComponent/>
            }
        </div>

      );
    }
  }

  ProjectsContainer.propTypes = {

    get_projects_action : PropTypes.func.isRequired, 
    projects : PropTypes.array.isRequired,

  }
  
  const mapStateToProps = state =>(
    {
        projects: getProjects(state)
    }
  );

  export default withRouter(connect(mapStateToProps,{get_projects_action})(ProjectsContainer));