import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import "./index.css"
class DifferenceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            link: '',
            id: 0,
            textSearch: '',
        }
    }
    render() {
        let listData = [];
        if (this.props.differences) {
            listData = this.props.differences.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{item.id}</th>
                        <th>{item.title}</th>
                        <th>{item.link}</th>
                        <th>
                            <Popup modal trigger={<button className="btn btn-outline-info mr-3"><i className="far fa-edit"></i>
                                <span>Edit</span></button>}>
                                {close => (
                                    <div className="text-center form-submit">
                                        <button className="close" onClick={close}>
                                            ×
                                        </button>
                                        <h3 className="logo-head">Edit Difference</h3>

                                        <label htmlFor="titleEdit">Title</label>
                                        <input type="text" id="titleEdit" name="title" placeholder="Titlte..." required onChange={(e) => {
                                            this.setState({
                                                title: e.target.value
                                            })
                                        }} />

                                        <label htmlFor="descriptionEdit">Link</label>
                                        <input id="descriptionEdit" name="description" placeholder="Link..." required onChange={(e) => {
                                            this.setState({
                                                link: e.target.value
                                                // textSearch: this.state.textSearch
                                            })
                                        }} />

                                        <button className="btn btn-outline-danger mr-3 mt-4 pl-4 pr-4" onClick={() => {
                                            close();
                                        }}>Thoát</button>
                                        <button className="btn btn-outline-info mt-4 pl-4 pr-4" onClick={() => {
                                            var textSearch = this.state.textSearch;
                                            var title = this.state.title;
                                            var link = this.state.link;
                                            if (title !== '' && link !== '') {
                                                this.props.editDifference({
                                                    id: item.id,
                                                    textSearch: textSearch,
                                                    title: title,
                                                    link: link,
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
                                        <h3 className="logo-head">Delete Difference</h3>
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
                                            this.props.deleteDifference({
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
                                    Difference
                                </h1>
                                <div className="table-right text-right d-flex justify-content-end mb-3">
                                    <div className="table-search mr-3 d-flex">
                                        <input type="text" className="form-control input-form" placeholder="Search by title" onChange={(e) => {
                                            this.setState({
                                                textSearch: e.target.value
                                            })
                                        }}></input>
                                        <button className="btn btn-outline-primary" onClick={() => {
                                            this.props.searchDifference(
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
                                                <h3 className="logo-head">Add New Difference</h3>

                                                <label htmlFor="title">Title</label>
                                                <input type="text" id="title" name="title" placeholder="Titlte..." required onChange={(e) => {
                                                    this.setState({
                                                        title: e.target.value
                                                    })
                                                }} />

                                                <label htmlFor="description">Link</label>
                                                <input id="description" name="description" placeholder="Link..." required onChange={(e) => {
                                                    this.setState({
                                                        link: e.target.value
                                                    })
                                                }} />

                                                <button className="btn btn-outline-danger mr-3 mt-4 pl-4 pr-4" onClick={() => {
                                                    close();
                                                }}>Thoát</button>
                                                <button className="btn btn-outline-success mt-4 pl-4 pr-4" onClick={() => {
                                                    this.props.addDifference({
                                                        title: this.state.title,
                                                        link: this.state.link
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

export default DifferenceComponent;