import React, { Component } from 'react';
import ModalForm from './components/ModalForm';
import ItemView from './components/ItemView/ItemView';
import './App.css';

class App extends Component {

  state = {
    controlShow: 0,
    users: [
      {
        id: 12,
        name: 'Ivan',
        cell: '+79288233485',
        email: 'test@gmail.com',
        last_meeting: '---',
        sum_pay: '---',
        sum_meeting: '---',
        activ_subscription: '---',
      },
      {
        id: 23,
        name: 'Egor',
        cell: '+73238233485',
        email: 'test2@gmail.com',
        last_meeting: '---',
        sum_pay: '---',
        sum_meeting: '---',
        activ_subscription: '---',
      },
      {
        id: 4,
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

  // deleteUser = (elem) => {
  //   const userId = elem.target.dataset.id;
  //   const currUsers = this.state.users;
  //   let newUsers;

  //   currUsers.map((user, index) => {
  //     if (user.id == userId) {
  //       newUsers = currUsers.slice(0, index).concat(currUsers.slice(index + 1))
  //       this.setState({ users: newUsers })
  //     }
  //   })
  // };

  render() {
    const { users } = this.state
    return (
      <div className="App">
        <div className="table_wrapper">

          <ModalForm  />

          <div className="table_header">
            <div className="item name">Клиент</div>
            <div className="item cell">Телефон</div>
            <div className="item email">E-Mail</div>
            <div className="item last_meeting">Дата последнего посещения</div>
            <div className="item sum_pay">Сумма оплат</div>
            <div className="item sum_meeting">Количество посещений</div>
            <div className="item activ_subscription">Активный абонемент</div>
          </div>

          {users.map((item,index) => <ItemView {...item} key={index}/>)} 

        </div>
      </div>
    );
  }
}

export default App;
