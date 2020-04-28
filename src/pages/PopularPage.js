import React from 'react'
import HomePopularContainer from '../containers/HomePopularContainer'
import Header from '../components/HeaderComponent'
class PopularPage extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header></Header>
                <HomePopularContainer></HomePopularContainer>
            </div>
        )
    }
}

export default PopularPage;