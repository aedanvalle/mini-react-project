import React, {Component} from 'react'

class ResultCom extends Component{
    render() {  
        let{answer} = this.props;
        return (
            <div className="answer">
                <p>{answer}</p>
            </div>
        );
    }
}

export default ResultCom;