import React, { Fragment } from 'react'
import QuestionsList from './QuestionsList';
import Form from './Form';


export default function DashBoard() {
    return (
        <Fragment>
            <Form/>
            <QuestionsList/>
        </Fragment>
    )
}
