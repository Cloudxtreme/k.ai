import axios from 'axios'

import ClientConfig from './../../config/ClientConfig'

const signUpRequest = (user) => {
	return dispatch => {
		return axios.post(ClientConfig.URL.API['signup_user'], user)
	}
}

export { signUpRequest }