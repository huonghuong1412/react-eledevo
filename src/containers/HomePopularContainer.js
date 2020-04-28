import React, {Component} from 'react'
import Popular from '../components/PopularComponent'
import * as actions from '../actions/HomePopularActions'
import {connect} from 'react-redux'
class HomePopularContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render() {
        return (
            <Popular {...this.props}></Popular>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        populars: state.populars.listPopulars,
        textSearch: state.populars.textSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListPopular())
        },
        addPopular: (data) => {
            dispatch(actions.addListPopular(data))
        },
        editPopular: (data) => {
            dispatch(actions.editListPopular(data))
        },
        deletePopular: (data) => {
            dispatch(actions.deleteListPopular(data))
        },
        searchPopular: (textSearch) => {
            dispatch(actions.searchListPopular(textSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePopularContainer)