import React, {Component} from 'react'
import Slides from '../components/SlideComponent'
import * as actions from '../actions/HomeSlideActions'
import {connect} from 'react-redux'
class HomeSlideContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render() {
        return (
            <Slides {...this.props}></Slides>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        slides: state.slides.listSlides,
        textSearch: state.slides.textSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListSlide())
        },
        addSlide: (data) => {
            dispatch(actions.addListSlide(data))
        },
        editSlide: (data) => {
            dispatch(actions.editListSlide(data))
        },
        deleteSlide: (data) => {
            dispatch(actions.deleteListSlide(data))
        },
        searchSlide: (textSearch) => {
            dispatch(actions.searchListSlide(textSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSlideContainer)