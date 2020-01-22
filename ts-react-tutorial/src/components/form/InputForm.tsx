import React from 'react'

interface IState {
    currentInput: string;
    myInputText: Array<string>;
}

class InputForm extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentInput: "",
            myInputText: [],
        }
    }
    handleSubmit(e: any) {
            e.preventDefault();
            this.setState({
                currentInput: "",
                myInputText: [
                    ...this.state.myInputText,
                    this.state.currentInput,
                ]
            })
    }

    render() {
        console.log(this.state);
        return (
            <div>
            <h1>이것은 리액트 폼이다...</h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                    type="text"
                    placeholder="여긴 인풋"
                    value={this.state.currentInput}
                    onChange={(e) => this.setState({ currentInput: e.target.value})}
                />
                <button type="submit">이건 버튼</button>
            </form>
            </div>
        )
    }
}

export default InputForm;