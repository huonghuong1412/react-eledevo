import React from 'react'
import HomeFeedbackContainer from '../containers/HomeFeedbackContainer'
import Header from '../components/HeaderComponent'
class FeedbackPage extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header></Header>
                <HomeFeedbackContainer></HomeFeedbackContainer>
            </div>
        )
    }
}

export default FeedbackPage;