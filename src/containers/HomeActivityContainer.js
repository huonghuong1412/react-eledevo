import React, {Component} from 'react'
import Activities from '../components/ActivityComponent'
import * as actions from '../actions/HomeActivityActions'
import {connect} from 'react-redux'
class HomeActivityContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render() {
        return (
            <Activities {...this.props}></Activities>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        activities: state.activities.listActivities,
        textSearch: state.activities.textSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListActivity())
        },
        addActivity: (data) => {
            dispatch(actions.addListActivity(data))
        },
        editActivity: (data) => {
            dispatch(actions.editListActivity(data))
        },
        deleteActivity: (data) => {
            dispatch(actions.deleteListActivity(data))
        },
        searchActivity: (textSearch) => {
            dispatch(actions.searchListActivity(textSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeActivityContainer)