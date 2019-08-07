import React, { Component, Fragment } from 'react'

import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            // console.log('------------');
            // console.log('will unmount');
            // console.log('this.reqInterceptor', this.reqInterceptor);
            // console.log('this.resInterceptor', this.resInterceptor);
            // console.log('------------');
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
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