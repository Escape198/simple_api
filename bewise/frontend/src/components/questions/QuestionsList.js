import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getQuestions, deleteQuestions, toggleQuestions } from '../../actions/questions';

export class QuestionsList extends Component {
    static propTypes = {
        questions: PropTypes.array.isRequired,
        getQuestions: PropTypes.func.isRequired,
        deleteQuestions: PropTypes.func.isRequired,
        toggleQuestions: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        return (
            <Fragment>
                <h2>Questions records</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>questions_num</th>
                            <th>description</th>
                            <th>done</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.questions.map(questions => (
                            <tr key={questions.id}>
                                <td>{questions.questions_num}</td>
                                <td>{questions.description}</td>
                                <td><input type="checkbox" onChange={this.props.toggleQuestions.bind(this, questions)} defaultChecked={questions.done}></input></td>
                                <td><button onClick={this.props.deleteQuestions.bind(this, questions.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    questions: state.questions.questions
});

export default connect(mapStateToProps, { getQuestions, deleteQuestions, toggleQuestions })(QuestionsList);
