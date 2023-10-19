import { Avatar } from '@mui/material'
import React from 'react'
import "./css/QuestionBox.css"
function QuestionBox() {
    return (
        <div className='quoraBox'>
            <div className='quoraBox__info'>
                <Avatar />
            </div>
            <div className='quoraBox__quora'><h5>What is your question?</h5></div>
        </div>
    )
}

export default QuestionBox