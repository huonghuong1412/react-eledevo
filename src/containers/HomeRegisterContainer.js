import React, {Component} from 'react'
import Register from '../components/RegisterComponent'
import * as actions from '../actions/HomeRegisterActions'
import {connect} from 'react-redux'
class HomeRegisterContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render() {
        return (
            <Register {...this.props}></Register>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        registers: state.registers.listRegisters,
        textSearch: state.registers.textSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListRegister())
        },
        addRegister: (data) => {
            dispatch(actions.addListRegister(data))
        },
        editRegister: (data) => {
            dispatch(actions.editListRegister(data))
        },
        deleteRegister: (data) => {
            dispatch(actions.deleteListRegister(data))
        },
        searchRegister: (textSearch) => {
            dispatch(actions.searchListRegister(textSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeRegisterContainer)