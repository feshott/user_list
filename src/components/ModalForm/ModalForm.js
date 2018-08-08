import React, { Component } from 'react';

export default class ModalForm extends React.Component {

  state = {
    name: this.props.name || '',
    cell: this.props.cell || '',
    emeil: this.props.email || '',
  }
  // const localUser = user
  handleClickSubmit = () => {
    this.props.submitFunc(this.state)
  }

  handleInputChange = (ev) => {
    console.log(this.state)
    this.setState({
      [ev.target.dataset.name]: ev.target.value
    })
  }

  render() {
    const { name, cell, email } = this.state
    return (
      <div className='form'>
        <label>
          Имя
          <input type="text" onChange={this.handleInputChange} data-name='name' value={name} />
        </label>
        <label>
          Телефон
          <input type="text" data-name='cell' />
        </label>
        <label>
          E-Mail
          <input type="text" data-name='email' />
        </label>

        <div className='save_btn' onClick={this.handleClickSubmit} type="submit">Сохранить</div>
      </div>
    )
  }

}