import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import "./index.css"
class FeedbackComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classname: '',
            comment: [],
            content1: '',
            content2: '',
            img: '',
            id: 0,
            textSearch: '',
        }
    }
    render() {
        let listData = [];
        if (this.props.feedbacks) {
            listData = this.props.feedbacks.map((item, key) => {
                let listContent = [];
                if (undefined !== item.content && item.content.length) {
                    for (let i = 0; i < item.content.length; i++) {
                        listContent.push(<th key={i}>{item.content[i]}</th>);
                    }
                }
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.classname}</th>
                        {listContent}
                        <th>
                            <Popup modal trigger={<button className="btn btn-outline-info mr-3"><i className="far fa-edit"></i>
                                <span>Edit</span></button>}>
                                {close => (
                                    <div className="text-center form-submit">
                                        <button className="close" onClick={close}>
                                            ×
                                        </button>
                                        <h3 className="logo-head">Edit Feedback</h3>

                                        <label htmlFor="classname">Class name</label>
                                        <input type="text" value={this.state.classname} id="classname" name="classnam" placeholder="Titlte..." onChange={(e) => {
                                            this.setState({
                                                classname: e.target.value
                                            })
                                        }} />

                                        <label htmlFor="description">Comment 1</label>
                                        <textarea rows='2' id="description" name="description" placeholder="Text..." required onChange={(e) => {
                                            this.setState({
                                                content1: e.target.value
                                            })
                                        }} />

                                        <label htmlFor="description">Comment 2</label>
                                        <textarea rows='2' id="description" name="description" placeholder="Text..." required onChange={(e) => {
                                            this.setState({
                                                content2: e.target.value
                                            })
                                        }} />

                                        <label htmlFor="img">Image</label>
                                        <input type="text" value={this.state.img} id="img" name="img" placeholder="Image Url..." required onChange={(e) => {
                                            this.setState({
                                                img: e.target.value
                                            })
                                        }} />

                                        <button className="btn btn-outline-danger mr-3 mt-4 pl-4 pr-4" onClick={() => {
                                            close();
                                        }}>Thoát</button>
                                        <button className="btn btn-outline-info mt-4 pl-4 pr-4" onClick={() => {
                                            var content1 = this.state.content1;
                                            var content2 = this.state.content2;
                                            var comment = [];
                                            comment.push(content1);
                                            comment.push(content2);
                                            this.props.editFeedback({
                                                id: item.id,
                                                textSearch: this.state.textSearch,
                                                classname: this.state.classname,
                                                img: this.state.img,
                                                comment: comment
                                            });
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
                                        <h3 className="logo-head">Delete Slide</h3>
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
                                            this.props.deleteFeedback({
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
                                    Feedback
                                </h1>
                                <div className="table-right text-right d-flex justify-content-end mb-3">
                                    <div className="table-search mr-3 d-flex">
                                        <input type="text" className="form-control input-form" placeholder="Search by title" onChange={(e) => {
                                            this.setState({
                                                textSearch: e.target.value
                                            })
                                        }}></input>
                                        <button className="btn btn-outline-primary" onClick={() => {
                                            this.props.searchFeedback(
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
                                            <div className="text-center form-submit">
                                                <button className="close" onClick={close}>
                                                    ×
                                                </button>
                                                <h3 className="logo-head">Add New Feedback</h3>

                                                <label htmlFor="classname">Class name</label>
                                                <input type="text" id="classname" name="classnam" placeholder="Titlte..." required onChange={(e) => {
                                                    this.setState({
                                                        classname: e.target.value
                                                    })
                                                }} />

                                                <label htmlFor="description">Comment 1</label>
                                                <textarea rows='2' id="description" name="description" placeholder="Text..." required onChange={(e) => {
                                                    this.setState({
                                                        content1: e.target.value
                                                    })
                                                }} />

                                                <label htmlFor="description">Comment 2</label>
                                                <textarea rows='2' id="description" name="description" placeholder="Text..." required onChange={(e) => {
                                                    this.setState({
                                                        content2: e.target.value
                                                    })
                                                }} />

                                                <label htmlFor="img">Image</label>
                                                <input type="text" id="img" name="img" placeholder="Image Url..." required onChange={(e) => {
                                                    this.setState({
                                                        img: e.target.value
                                                    })
                                                }} />

                                                <button className="btn btn-outline-danger mr-3 mt-4 pl-4 pr-4" onClick={() => {
                                                    close();
                                                }}>Thoát</button>
                                                <button className="btn btn-outline-success mt-4 pl-4 pr-4" onClick={() => {
                                                    var content1 = this.state.content1;
                                                    var content2 = this.state.content2;
                                                    var comment = [];
                                                    comment.push(content1);
                                                    comment.push(content2);
                                                    this.props.addFeedback({
                                                        classname: this.state.classname,
                                                        img: this.state.img,
                                                        comment: comment
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
                                        <th scope="col" className="table-title">Class name</th>
                                        <th scope="col" className="table-des">Kakaka</th>
                                        <th scope="col" className="table-des">Kakaka</th>
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

export default FeedbackComponent;