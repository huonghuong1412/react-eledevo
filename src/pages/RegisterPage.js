import React from 'react'
import HomeRegisterContainer from '../containers/HomeRegisterContainer'
import Header from '../components/HeaderComponent'
class RegisterPage extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header></Header>
                <HomeRegisterContainer></HomeRegisterContainer>
            </div>
        )
    }
}

export default RegisterPage;