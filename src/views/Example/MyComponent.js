import React from "react";

class MyComponent extends React.Component {
    /**
     * 
     */

    state = {
        name: 'Thai Dinh',
        level: 'IT consulting and implementation - Advanced'
    }

    /**
     * 
     * @param {*} event 
     */
    handleOnChangeName = (event) => {
        console.log(event);
        this.setState({
            name: event.target.value
        })
    }

    handleOnClickButton = () => {
        alert('Click me');
    }

    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    <br />
                    Welcome to Hitachi vantara I am {this.state.name}.
                </div>
                <div className="second">
                    My position is {this.state.level}.
                </div>
                <div className="third">
                    <button onClick={() => this.handleOnClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;