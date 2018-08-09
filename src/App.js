import React, { Component } from 'react';
import nanoid from 'nanoid'
import ModalForm from './components/ModalForm';
import ItemView from './components/ItemView/ItemView';
import './App.css';

class App extends Component {

  state = {
    createUserOpen: false,
    editableUser: null,

    users: [
      {
        id: 'SUqPH',
        name: 'Ivan',
        cell: '+79288233485',
        email: 'test@gmail.com',
        last_meeting: '---',
        sum_pay: '---',
        sum_meeting: '---',
        activ_subscription: '---',
      },
      {
        id: 'lL6sd',
        name: 'Egor',
        cell: '+73238233485',
        email: 'test2@gmail.com',
        last_meeting: '---',
        sum_pay: '---',
        sum_meeting: '---',
        activ_subscription: '---',
      },
      {
        id: 'y9vjj',
        name: 'Anna',
        cell: '+74423223485',
        email: 'test3@gmail.com',
        last_meeting: '---',
        sum_pay: '---',
        sum_meeting: '---',
        activ_subscription: '---',
      }
    ]
  }



  getUserById = id => {
    const currUsers = this.state.users;
    let editUser;

    currUsers.map((user) => {
      if (user.id == id) {
        editUser = user
      }
    })
    return editUser
  }

  handleSetEditable = id => {
    this.setState({ editableUser: this.getUserById(id.target.dataset.id) })
  }

  deleteUser = (id) => {
    this.setState({
      users: (this.state.users).filter((user) => user.id !== id.target.dataset.id)
    })
  }

  editUser = (componentProps) => {
    const currUsers = this.state.users;
    const userId = this.state.editableUser.id;

    currUsers.map((user, index) => {
      if (user.id == userId) {
        currUsers[index] = {
          id: this.state.editableUser.id,
          name: componentProps.name,
          cell: componentProps.cell,
          email: componentProps.email,
          last_meeting: '---',
          sum_pay: '---',
          sum_meeting: '---',
          activ_subscription: '---',
        }
      }
    })
    this.setState({
      users: currUsers,
      editableUser: null
    })
  }

  createUser = componentProps => {
    const currUsers = this.state.users;

    let user = {
      id: nanoid(5),
      name: componentProps.name,
      cell: componentProps.cell,
      email: componentProps.email,
      last_meeting: '---',
      sum_pay: '---',
      sum_meeting: '---',
      activ_subscription: '---',
    };

    this.setState({
      users: [...currUsers, user],
      createUserOpen: false
    })
  }

  hadleOpenCreateUserForm = () => {
    this.setState({ createUserOpen: true })
  }

  hadleCloseCreateUserForm = () => {
    this.setState({
      createUserOpen: false,
      editableUser: null
    })
  }

  render() {
    const { users, createUserOpen } = this.state
    return (
      <div className="App">
        <div className="table_wrapper">
          <div className="title">Клиенты</div>
          <div className="control_wrapper">
            <div className="create_btn" onClick={this.hadleOpenCreateUserForm}>Добавить клиента</div>
            <div className="close_btn" onClick={this.hadleCloseCreateUserForm}></div>
          </div>

          {createUserOpen && <ModalForm submitFunc={this.createUser} />}

          {this.state.editableUser && <ModalForm {...this.state.editableUser} submitFunc={this.editUser} />}

          <div className="table_header">
            <div className="item name">Клиент</div>
            <div className="item cell">Телефон</div>
            <div className="item email">E-Mail</div>
            <div className="item last_meeting">Дата последнего посещения</div>
            <div className="item sum_pay">Сумма оплат</div>
            <div className="item sum_meeting">Количество посещений</div>
            <div className="item activ_subscription">Активный абонемент</div>
          </div>

          {users.map((item, index) =>
            <ItemView
              {...item}
              key={index}
              handleSetEditable={this.handleSetEditable}
              handleDelete={this.deleteUser} />)}

        </div>
      </div>
    );
  }
}

export default App;
