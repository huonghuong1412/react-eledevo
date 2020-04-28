import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import "./index.css"
class RegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotesTitle: '',
            quotesDescription: '',
            linkUrl: '',
            bgImage: '',
            counterStudentJoin: 0,
            counterCoursesComplete: 0,
            counterStudentHaveJob: 0,
            id: 0,
            textSearch: '',
        }
    }
    render() {
        let listData = [];
        if (this.props.registers) {
            listData = this.props.registers.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.quotesTitle}</th>
                        <th>{item.quotesDescription}</th>
                        <th>{item.counterStudentJoin}</th>
                        <th>{item.counterCoursesComplete}</th>
                        <th>{item.counterStudentHaveJob}</th>
                        <th>
                            <Popup modal trigger={<button className="btn btn-outline-info mr-3" style={{ width: '95px' }}><i className="far fa-edit"></i>
                                <span>Edit</span></button>}>
                                {close => (
                                    <div className="text-center form-submit register-submit">
                                        <button className="close" onClick={close}>
                                            ×
                                        </button>
                                        <h3 className="logo-head">Edit Register</h3>

                                        <label htmlFor="titleEdit">Title</label>
                                        <input type="text" id="titleEdit" name="title" placeholder="Titlte..." required onChange={(e) => {
                                            this.setState({
                                                quotesTitle: e.target.value
                                            })
                                        }} />

                                        <label htmlFor="quotesDescription">Description</label>
                                        <input id="quotesDescription" name="quotesDescription" placeholder="Text..." required onChange={(e) => {
                                            this.setState({
                                                quotesDescription: e.target.value
                                                // textSearch: this.state.textSearch
                                            })
                                        }} />

                                        <label htmlFor="linkEdit">Link</label>
                                        <input type="text" id="linkEdit" name="link" placeholder="Url..." required onChange={(e) => {
                                            this.setState({
                                                linkUrl: e.target.value
                                                // textSearch: this.state.textSearch
                                            })
                                        }} />

                                        <label htmlFor="bgImageEdit">Img</label>
                                        <input type="text" id="bgImageEdit" name="bgImage" placeholder="Url..." required onChange={(e) => {
                                            this.setState({
                                                bgImage: e.target.value
                                            })
                                        }} />

                                        <div className="counter">
                                            <label htmlFor="counterStudentJoin">Học viên tham gia</label>
                                            <input type="text" id="counterStudentJoin" name="counterStudentJoin" placeholder="Học viên tham gia..." required onChange={(e) => {
                                                this.setState({
                                                    counterStudentJoin: parseInt(e.target.value)
                                                })
                                            }} />
                                            <label htmlFor="counterCoursesComplete">Khoá học hoàn thành</label>
                                            <input type="text" id="counterCoursesComplete" name="counterCoursesComplete" placeholder="Khoá học hoàn thành..." required onChange={(e) => {
                                                this.setState({
                                                    counterCoursesComplete: parseInt(e.target.value)
                                                })
                                            }} />
                                            <label htmlFor="counterStudentHaveJob">Học viên có việc làm</label>
                                            <input type="text" id="counterStudentHaveJob" name="counterStudentHaveJob" placeholder="Học viên có việc làm..." required onChange={(e) => {
                                                this.setState({
                                                    counterStudentHaveJob: parseInt(e.target.value)
                                                })
                                            }} />
                                        </div>
                                        <button className="btn btn-outline-danger mr-3 mt-4 pl-4 pr-4" onClick={() => {
                                            close();
                                        }}>Thoát</button>
                                        <button className="btn btn-outline-info mt-4 pl-4 pr-4" onClick={() => {
                                            var textSearch = this.state.textSearch;
                                            var blog_title = this.state.blog_title;
                                            var blog_link = this.state.blog_link;
                                            var img = this.state.img;
                                            if (blog_title !== '' && blog_link !== '' && img !== '') {
                                                this.props.editRegister({
                                                    id: item.id,
                                                    textSearch: textSearch,
                                                    blog_title: blog_title,
                                                    blog_link: blog_link,
                                                    img: img
                                                });
                                            } else {
                                                alert('Khong duoc bo trong du lieu');
                                            }
                                        }}>
                                            <i className="far fa-edit"></i>
                                            <span>Edit</span>
                                        </button>
                                    </div>
                                )}
                            </Popup>

                            <Popup modal trigger={<button className="btn btn-outline-danger mr-3"><i className="fas fa-trash"></i>
                                <span>Delete</span></button>}>
                                {close => (
                                    <div className="text-center form-submit form-delete">
                                        <button className="close" onClick={close}>
                                            ×
                                        </button>
                                        <h3 className="logo-head">Delete Register</h3>
                                        <p className="sure">
                                            Are you sure?
                                        </p>
                                        <p>
                                            <i className="delete-icon fas fa-times fa-4x animated rotateIn"></i>
                                        </p>
                                        <button className="btn btn-danger mr-3 mt-4 pl-4 pr-4" onClick={() => {
                                            close();
                                        }}>Thoát</button>
                                        <button className="btn btn-outline-danger waves-effect mt-4 pl-4 pr-4" onClick={() => {
                                            this.props.deleteRegister({
                                                id: item.id,
                                                textSearch: this.state.textSearch
                                            });
                                        }}>
                                            <i className="fas fa-trash"></i>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                )}
                            </Popup>
                        </th>
                    </tr>
                )
            })
        }

        return (
            <div className="app">
                <div className="main__body">
                    <div className="container">
                        <div className="table-slide mt-5">
                            <div className="table-heading d-flex align-items-center justify-content-between">
                                <h1 className="text-left table-heading-title mb-4">
                                    Register
                                </h1>
                                <div className="table-right text-right d-flex justify-content-end mb-3">
                                    <div className="table-search mr-3 d-flex">
                                        <input type="text" className="form-control input-form" placeholder="Search by title" onChange={(e) => {
                                            this.setState({
                                                textSearch: e.target.value
                                            })
                                        }}></input>
                                        <button className="btn btn-outline-primary" onClick={() => {
                                            this.props.searchRegister(
                                                this.state.textSearch
                                            )
                                        }}>
                                            <i className="fab fa-searchengin"></i>
                                            Search
                                        </button>
                                    </div>

                                    <Popup modal trigger={<button className="btn btn-outline-success"><i className="far fa-plus-square"></i>
                                        <span>Add</span></button>}>
                                        {close => (
                                            <div className="text-center form-submit register-submit">
                                                <button className="close" onClick={close}>
                                                    ×
                                                </button>
                                                <h3 className="logo-head">Add New Post</h3>

                                                <label htmlFor="titleEdit">Title</label>
                                                <input type="text" id="titleEdit" name="title" placeholder="Titlte..." required onChange={(e) => {
                                                    this.setState({
                                                        quotesTitle: e.target.value
                                                    })
                                                }} />

                                                <label htmlFor="quotesDescription">Description</label>
                                                <input id="quotesDescription" name="quotesDescription" placeholder="Text..." required onChange={(e) => {
                                                    this.setState({
                                                        quotesDescription: e.target.value
                                                        // textSearch: this.state.textSearch
                                                    })
                                                }} />

                                                <label htmlFor="linkEdit">Link</label>
                                                <input type="text" id="linkEdit" name="link" placeholder="Url..." required onChange={(e) => {
                                                    this.setState({
                                                        linkUrl: e.target.value
                                                        // textSearch: this.state.textSearch
                                                    })
                                                }} />

                                                <label htmlFor="bgImageEdit">Img</label>
                                                <input type="text" id="bgImageEdit" name="bgImage" placeholder="Url..." required onChange={(e) => {
                                                    this.setState({
                                                        bgImage: e.target.value
                                                    })
                                                }} />

                                                <div className="counter">
                                                    <label htmlFor="counterStudentJoin">Học viên tham gia</label>
                                                    <input type="text" id="counterStudentJoin" name="counterStudentJoin" placeholder="Học viên tham gia..." required onChange={(e) => {
                                                        this.setState({
                                                            counterStudentJoin: parseInt(e.target.value)
                                                        })
                                                    }} />
                                                    <label htmlFor="counterCoursesComplete">Khoá học hoàn thành</label>
                                                    <input type="text" id="counterCoursesComplete" name="counterCoursesComplete" placeholder="Khoá học hoàn thành..." required onChange={(e) => {
                                                        this.setState({
                                                            counterCoursesComplete: parseInt(e.target.value)
                                                        })
                                                    }} />
                                                    <label htmlFor="counterStudentHaveJob">Học viên có việc làm</label>
                                                    <input type="text" id="counterStudentHaveJob" name="counterStudentHaveJob" placeholder="Học viên có việc làm..." required onChange={(e) => {
                                                        this.setState({
                                                            counterStudentHaveJob: parseInt(e.target.value)
                                                        })
                                                    }} />
                                                </div>

                                                <button className="btn btn-outline-danger mr-3 mt-4 pl-4 pr-4" onClick={() => {
                                                    close();
                                                }}>Thoát</button>
                                                <button className="btn btn-outline-success mt-4 pl-4 pr-4" onClick={() => {
                                                    this.props.addRegister({
                                                        quotesTitle: this.state.quotesTitle,
                                                        quotesDescription: this.state.quotesDescription,
                                                        bgImage: this.state.bgImage,
                                                        counterStudentJoin: this.state.counterStudentJoin,
                                                        counterCoursesComplete: this.state.counterCoursesComplete,
                                                        counterStudentHaveJob: this.state.counterStudentHaveJob
                                                    });
                                                }}>Add</button>
                                            </div>
                                        )}
                                    </Popup>
                                </div>
                            </div>
                            <table className="table table-striped table-dark">
                                <tbody>
                                    <tr>
                                        <th scope="col">#ID</th>
                                        <th scope="col" className="table-title" style={{ width: '250px' }}>Title</th>
                                        <th scope="col" className="table-des" style={{ width: '320px' }}>Description</th>
                                        <th scope="col" style={{ width: '120px' }}>Số tham gia</th>
                                        <th scope="col" style={{ width: '120px' }}>Số khoá học</th>
                                        <th scope="col" style={{ width: '120px' }}>Số có việc</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                    {listData}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterComponent;