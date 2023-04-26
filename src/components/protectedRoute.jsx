import {Component} from "react";
import {Navigate} from "react-router-dom"
import React from "react";
import axios from "axios";




class ProtectedRoute extends Component {
    state = {
        isAuth: null
    }
    LoginApi =  () =>{
        return(
            axios.post("http://localhost:8010/login",
                {username: localStorage.getItem("username"), password: localStorage.getItem("password")}
            ).then((response) => {
                return response
            }).catch((error) => {
                return error.response;
            })
        )
    }
    async componentWillMount() {
        const loginResponse =  await this.LoginApi()
        if (loginResponse.status === 200) {
            this.setState({isAuth: true})
            return this.state.isAuth
        } else if (loginResponse.status === 403) {
            localStorage.clear()
            this.setState({isAuth: false})
            return this.state.isAuth
        }
    }

    render() {
        return (
            <>
                {
                    this.state.isAuth === true ?
                        this.props.children
                        : this.state.isAuth === false ?
                            <Navigate to={'/login'} replace={true}/>
                            :
                            null
                }
            </>
        );
    }
}


export default ProtectedRoute