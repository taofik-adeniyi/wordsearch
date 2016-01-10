import React, { Component, PropTypes } from 'react'

export default class SelectGame extends Component {
    render() {
        return (
                <select onChange = {(e) => this.handleSelectChange(e)}>
                    <option value=""></option>
                    <option value="wordSet1">List 1</option>
                    <option value="wordSet2">List 2</option>
                    <option value="wordSet3">List 3</option>
                </select>
        )
    }

    handleSelectChange(e) {
        this.props.onGameSelect(e.target.value)
    }

}
SelectGame.propTypes = {
    onGameSelect: PropTypes.func.isRequired
};