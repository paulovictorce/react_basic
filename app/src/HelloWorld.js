import React, {Component} from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component {
    constructor(props) {
        super(props)

        console.log(props, this.props)


        this.state = {
            name: '',
            txt: this.props.txt
        }
    }



        render() {
        const result =4
        return (
            <div className="my-class-from-react">
                <StateInput/>
                <h1>{this.state.txt}</h1>
                <h4>{result === 4 ? 'TRUE':'FALSE'}</h4>
            </div>
        )
    }
}

export default HelloWorld