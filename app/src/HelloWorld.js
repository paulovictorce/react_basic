import React, {Component} from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component {
    render() {
        const result =4
        return (
            <div className="my-class-from-react">
                <StateInput/>
                <h1>Hello World From React.js</h1>
                <h4>{result === 4 ? 'TRUE':'FALSE'}</h4>
            </div>
        )
    }
}

export default HelloWorld