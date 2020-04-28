import React from 'react'
import HomeSlideContainer from '../containers/HomeSlideContainer'
import Header from '../components/HeaderComponent'
class SlidePage extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header></Header>
                <HomeSlideContainer></HomeSlideContainer>
            </div>
        )
    }
}

export default SlidePage;