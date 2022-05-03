import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addQuestions } from '../../actions/questions';

export class Form extends Component {
    state = {
        questions_num: '',
        description: ''
    }

    static propTypes = {
        addQuestions: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { questions_num, description } = this.state;
        const questions = { questions_num, description };
        this.props.addQuestions(questions);
        this.setState({
            questions_num: '',
            description: ''
        });
    };

    render() {
        const { questions_num, description } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Questions</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Questions_num</label>
                        <input
                            className="form-control"
                            type="text"
                            name="questions_num"
                            onChange={this.onChange}
                            value={questions_num}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={this.onChange}
                            value={description}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addQuestions })(Form);
