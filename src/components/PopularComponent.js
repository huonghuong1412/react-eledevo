import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import "./index.css"
class PopularComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog_title: '',
            blog_link: '',
            img: '',
            id: 0,
            textSearch: '',
        }
    }
    render() {
        let listData = [];
        if (this.props.populars) {

            listData = this.props.populars.map((item, key) => {
                this.state.id = item.id;
                console.log("Dataaaaaaa " + (item.id))
                console.log("Dataaaaaaa " + (item.blog_title))
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.blog_title}</th>
                        <th>{item.blog_link}</th>
                        <th>{item.img}</th>
                        <th>
                            <Popup modal trigger={<button className="btn btn-outline-info mr-3"><i className="far fa-edit"></i>
                                <span>Edit</span></button>}>
                                {close => (
                                    <div className="text-center form-submit">
                                        <button className="close" onClick={close}>
                                            ×
                                        </button>
                                        <h3 className="logo-head">Edit Popular Post</h3>

                                        <label htmlFor="titleEdit">Title</label>
                                        <input type="text" id="titleEdit" name="title" placeholder="Titlte..." required onChange={(e) => {
                                            this.setState({
                                                blog_title: e.target.value
                                            })
                                        }} />

                                        <label htmlFor="descriptionEdit">Link</label>
                                        <input id="descriptionEdit" name="description" placeholder="Text..." required onChange={(e) => {
                                            this.setState({
                                                blog_link: e.target.value
                                                // textSearch: this.state.textSearch
                                            })
                                        }} />

                                        <label htmlFor="linkEdit">Image</label>
                                        <input type="text" id="linkEdit" name="link" placeholder="Url..." required onChange={(e) => {
                                            this.setState({
                                                img: e.target.value
                                                // textSearch: this.state.textSearch
                                            })
                                        }} />

                                        <button className="btn btn-outline-danger mr-3 mt-4 pl-4 pr-4" onClick={() => {
                                            close();
                                        }}>Thoát</button>
                                        <button className="btn btn-outline-info mt-4 pl-4 pr-4" onClick={() => {
                                            var textSearch = this.state.textSearch;
                                            var blog_title = this.state.blog_title;
                                            var blog_link = this.state.blog_link;
                                            var img = this.state.img;
                                            if (blog_title !== '' && blog_link !== '' && img !== '') {
                                                this.props.editPopular({
                                                    id: item.id,
                                                    textSearch: textSearch,
                                                    blog_title: blog_title,
                                                    blog_link: blog_link,
                                                    img: img,
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
                                        <h3 className="logo-head">Delete Popuar Post</h3>
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
                                            this.props.deletePopular({
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
                                    Popuar Post
                                </h1>
                                <div className="table-right text-right d-flex justify-content-end mb-3">
                                    <div className="table-search mr-3 d-flex">
                                        <input type="text" className="form-control input-form" placeholder="Search by title" onChange={(e) => {
                                            this.setState({
                                                textSearch: e.target.value
                                            })
                                        }}></input>
                                        <button className="btn btn-outline-primary" onClick={() => {
                                            this.props.searchPopular(
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
                                                <h3 className="logo-head">Add New Post</h3>

                                                <label htmlFor="blog_title">Title</label>
                                                <input type="text" id="blog_title" name="blog_title" placeholder="Titlte..." required onChange={(e) => {
                                                    this.setState({
                                                        blog_title: e.target.value
                                                    })
                                                }} />

                                                <label htmlFor="blog_link">Link</label>
                                                <input id="blog_link" name="blog_link" placeholder="Text..." required onChange={(e) => {
                                                    this.setState({
                                                        blog_link: e.target.value
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
                                                    this.props.addPopular({
                                                        blog_title: this.state.blog_title,
                                                        blog_link: this.state.blog_link,
                                                        img: this.state.img,
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
                                        <th scope="col" className="table-title">Title</th>
                                        <th scope="col" className="table-des">Link</th>
                                        <th scope="col" className="table-des">Img</th>
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

export default PopularComponent;