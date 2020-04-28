import React from 'react'
import Header from '../components/HeaderComponent'
import HomeDifferenceContainer from '../containers/HomeDifferenceContainer'
class DifferencePage extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header></Header>
                <HomeDifferenceContainer></HomeDifferenceContainer>
            </div>
        )
    }
}

export default DifferencePage;