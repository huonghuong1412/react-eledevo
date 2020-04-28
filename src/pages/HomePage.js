import React from 'react'
import Header from '../components/HeaderComponent'
class HomePage extends React.Component {
    render(){
        return (
            <div className="HomePage">
                <Header></Header>
                <h1 className="mb-5" style={{fontSize: '40px'}}>Trang chủ</h1>
                <a href="/slides">Go to managemnet data</a>
            </div>
        )
    }
}

export default HomePage;