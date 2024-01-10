import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount() {
        window.location.href = "/dashboard"
    }
    render() {
        return (
            <div>
            Redirecting....
            </div>
        )
    }
}
