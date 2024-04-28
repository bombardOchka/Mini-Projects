
import React from 'react';



export class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            smile1: 0,
            smile2: 0,
            smile3: 0,
            winner: null
        }

        this.VoteSmile1 = this.VoteSmile1.bind(this)
        this.VoteSmile2 = this.VoteSmile2.bind(this)
        this.VoteSmile3 = this.VoteSmile3.bind(this)

        this.Results = this.Results.bind(this)
    }



    VoteSmile1() {
        this.setState({
            smile1: ++this.state.smile1
        })
    }

    VoteSmile2() {
        this.setState({
            smile2: ++this.state.smile2
        })
    }

    VoteSmile3() {
        this.setState({
            smile3: ++this.state.smile3
        })
    }

    Results() {
        if (this.state.smile1 >= this.state.smile2 && this.state.smile1 >= this.state.smile3) {
            this.setState({
                winner: '😀'
            })
        }
        else if (this.state.smile2 >= this.state.smile1 && this.state.smile2 >= this.state.smile3) {
            this.setState({
                winner: '🤣'
            })
        }
        else {
            this.setState({
                winner: '😝'
            })
        }

    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className='voter'>
                        <div className='counter'>
                            <p className='smile'>😀</p>
                            <button onClick={this.VoteSmile1}>Vote</button>
                            <p>Votes: {this.state.smile1}</p>
                        </div>

                        <div className='counter'>
                            <p className='smile'>🤣</p>
                            <button onClick={this.VoteSmile2}>Vote</button>
                            <p>Votes: {this.state.smile2}</p>
                        </div>

                        <div className='counter'>
                            <p className='smile'>😝</p>
                            <button onClick={this.VoteSmile3}>Vote</button>
                            <p>Votes: {this.state.smile3}</p>
                        </div>
                    </div>

                    <button onClick={this.Results}>Results</button>

                    {this.state.winner && <p>The winner is: {this.state.winner}</p>}

                </div>

            </>



        )
    }
}