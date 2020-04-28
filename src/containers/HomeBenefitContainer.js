import React, {Component} from 'react'
import Benefits from '../components/BenefitComponent'
import * as actions from '../actions/HomeBenefitActions'
import {connect} from 'react-redux'
class HomeBenefitContainer extends Component {
    componentDidMount(){
        this.props.initLoad()
    }
    render() {
        return (
            <Benefits {...this.props}></Benefits>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        benefits: state.benefits.listBenefits,
        textSearch: state.benefits.textSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            dispatch(actions.getListBenefit())
        },
        addBenefit: (data) => {
            dispatch(actions.addListBenefit(data))
        },
        editBenefit: (data) => {
            dispatch(actions.editListBenefit(data))
        },
        deleteBenefit: (data) => {
            dispatch(actions.deleteListBenefit(data))
        },
        searchBenefit: (textSearch) => {
            dispatch(actions.searchListBenefit(textSearch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeBenefitContainer)