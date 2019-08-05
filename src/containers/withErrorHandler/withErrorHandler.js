import React, { Component, Fragment } from 'react'

import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        setErrorToNull = () => {
            this.setState({ error: null });
        }
         
        render () {
            return (
                <Fragment>
                    <Modal 
                        show={this.state.error}
                        close={this.setErrorToNull}
                    >
                        Oops! Something didn't work. Here's the error:
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }
}

export default withErrorHandler;