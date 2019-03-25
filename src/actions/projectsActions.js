
import { createAction } from "redux-actions";
import {apiGet} from '../api/request';
import {projectsURL} from '../api/urls';

const GET_PROJECTS = 'GET_PROJECTS'

export const get_projects_action = createAction(GET_PROJECTS, () => apiGet(projectsURL) () );