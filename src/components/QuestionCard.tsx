import React from 'react';
import {AnswerObject} from '../App';

type props = {
    question: string;
    answers: string [];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<props> = ({question, answers, callback, userAnswer, questionNum, totalQuestions}) => {
    return (
    <div>
            <p>Question: {questionNum} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
           {
               answers.map(answer => (
               <div key={answer}>
                   <button disabled={!!userAnswer} value={answer} onClick={callback}>
                   <span dangerouslySetInnerHTML={{__html: answer}}/>
                   </button>
                   
                </div>    
               ))
           }
        </div>
    </div>
    )
}

export default QuestionCard