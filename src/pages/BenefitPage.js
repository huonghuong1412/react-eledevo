import React from 'react'
import HomeBenefitContainer from '../containers/HomeBenefitContainer'
import Header from '../components/HeaderComponent'
class BenefitPage extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header></Header>
                <HomeBenefitContainer></HomeBenefitContainer>
            </div>
        )
    }
}

export default BenefitPage;