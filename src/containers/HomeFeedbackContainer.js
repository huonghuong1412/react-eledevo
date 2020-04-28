import React, {Component} from 'react'
import Feedbacks from '../components/FeedbackComponent'
import * as actions from '../actions/HomeFeedbackActions';
import {connect} from 'react-redux'
class HomeFeedbackContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render() {
        return (
            <Feedbacks {...this.props}></Feedbacks>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        feedbacks: state.feedbacks.listFeedbacks,
        textSearch: state.feedbacks.textSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListFeedback())
        },
        addFeedback: (data) => {
            console.log("Data Feedback =" + data)
            console.log("Data Feedback =" + data.classname)
            console.log("Data Feedback =" + data.content)
            dispatch(actions.addListFeedback(data))
        },
        editFeedback: (data) => {
            dispatch(actions.editListFeedback(data))
        },
        deleteFeedback: (data) => {
            dispatch(actions.deleteListFeedback(data))
        },
        searchFeedback: (textSearch) => {
            dispatch(actions.searchListFeedback(textSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedbackContainer)