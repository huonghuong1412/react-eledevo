import React, {Component} from 'react'
import Differences from '../components/DifferenceComponent'
import * as actions from '../actions/HomeDifferenceActions'
import {connect} from 'react-redux'
class HomeDifferenceContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render() {
        return (
            <Differences {...this.props}></Differences>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        differences: state.differences.listDifferences,
        textSearch: state.differences.textSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListDifference())
        },
        addDifference: (data) => {
            dispatch(actions.addListDifference(data))
        },
        editDifference: (data) => {
            dispatch(actions.editListDifference(data))
        },
        deleteDifference: (data) => {
            dispatch(actions.deleteListDifference(data))
        },
        searchDifference: (textSearch) => {
            dispatch(actions.searchListDifference(textSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeDifferenceContainer)