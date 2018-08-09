import React, { Component } from 'react';
import nanoid from 'nanoid'

export default class ModalForm extends React.Component {

  state = {
    id: this.props || nanoid(5),
    name: this.props.name || '',
    cell: this.props.cell || '',
    email: this.props.email || '',
    last_meeting: '---',
    sum_pay: '---',
    sum_meeting: '---',
    activ_subscription: '---',
  }

  handleClickSubmit = () => {
    this.props.submitFunc(this.state)
    
    this.setState({
      name: '',
      cell: '',
      email: ''
    })
  }

  handleInputChange = (ev) => {
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
          <input type="text" onChange={this.handleInputChange} data-name='cell' value={cell} />
        </label>

        <label>
          E-Mail
          <input type="text" onChange={this.handleInputChange} data-name='email' value={email} />
        </label>

        <div className='save_btn' onClick={this.handleClickSubmit} type="submit">Сохранить</div>
      </div>
    )
  }

}