import React, { Component } from 'react';

export default class CollapseRP extends Component {
    constructor() {
        super()
        this.state = {
            collapse: true,
            open_styles: {
                maxHeight: '100px',
                opacity: 1,
                transition: '0.3s all ease-out',
                visibility: 'visible'
            },
            closed_styles: {
                maxHeight: 0,
                opacity: 0,
                transition: '0.3s all ease-out',
                visibility: 'hidden'
            }
        }
    }
    render(props) {
        return (
            <div>
                <div>
                    <p>{this.props.title}
                        <span onClick={() => { this.setState({ collapse: !this.state.collapse }) }}>{this.state.collapse ? '...more' : '...less'}</span>
                    </p>
                </div>
                <div>
                    {this.props.children(this.state.collapse ? this.state.closed_styles : this.state.open_styles)}
                </div>

            </div>

        )
    }
}

