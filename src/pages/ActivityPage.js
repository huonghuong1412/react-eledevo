import React from 'react'
import HomeActivityContainer from '../containers/HomeActivityContainer'
import Header from '../components/HeaderComponent'
class ActivityPage extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header></Header>
                <HomeActivityContainer></HomeActivityContainer>
            </div>
        )
    }
}

export default ActivityPage;