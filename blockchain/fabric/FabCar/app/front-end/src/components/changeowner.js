import React, { Component } from 'react';
import axios from 'axios';

export default class ChangeOwner extends Component {
    constructor(props) {
        super(props);
        this.setCarid = this.setCarid.bind(this);
        this.setNewOwner = this.setNewOwner.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            carid: '',
            newowner: ''
        }
    }

    setCarid(e) {
        this.setState({
            carid: e.target.value
        })
    }

    setNewOwner(e) {
        this.setState({
            newowner: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const update = {
            carid: this.state.carid,
            newowner: this.state.newowner,
        }

        axios.post('/api/changeowner', update).then((data) => {
            console.log(data.data.response.proposal_response_payload.extension.results.ns_rwset[1].rwset.writes[0].value);
            this.setState({
                resp: data.data.response.proposal_response_payload.extension.results.ns_rwset[1].rwset.writes[0].value
            })
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Car ID: </label>
                        <input type="text"
                            required
                            className="form-control"
                            placeholder="CAR5"
                            value={this.state.carid}
                            onChange={this.setCarid}
                        />
                    </div>
                    <div className="form-group">
                        <label>New Owner: </label>
                        <input type="text"
                            required
                            className="form-control"
                            placeholder="Tom"
                            value={this.state.newowner}
                            onChange={this.setNewOwner}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update" className="btn btn-primary" />
                    </div>
                    <div>
                        <lable>Response, will come here!</lable>
                        <p>{this.state.resp}</p>
                    </div>
                </form>
            </div>
        )
    }
}
