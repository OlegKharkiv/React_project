import { Component } from 'react';

import './education-add-form.css';

class EducationAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            year: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.year);
        this.setState({
            name: '',
            year: ''
        })
    }

    render() {
    const {name, year} = this.state;
    const isValid = Boolean(this.state.name.length >= 3 && this.state.year.length >= 3);
        return (
            <div className="app-add-form">
                <h3>Add new diploma or certificate</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="University name or certificate type"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Year of ending"
                        name="year"
                        value={year}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            disabled={!isValid}>Add</button>
                </form>
            </div>
        )
    }
    
}

export default EducationAddForm;