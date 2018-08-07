import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    controlShow:0,
    users: [
      {
        id: 1,
        name: 'Ivan',
        cell: '+79288233485',
        email: 'test@gmail.com',
        last_meeting: '---',
        sum_pay: '---',
        sum_meeting: '---',
        activ_subscription: '---',
      },
      {
        id: 2,
        name: 'Egor',
        cell: '+73238233485',
        email: 'test2@gmail.com',
        last_meeting: '---',
        sum_pay: '---',
        sum_meeting: '---',
        activ_subscription: '---',
      },
      {
        id: 3,
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


  createItem = elem => {
    const { name, cell, email, last_meeting, sum_pay, sum_meeting, activ_subscription, id } = elem

    return < div className="table_item" key={id}>

      <div className="edit_btn" data-id={id}></div>
      <div className="delete_btn" data-id={id}></div>

      <div className="item name">{name}</div>
      <div className="item cell">{cell}</div>
      <div className="item email">{email}</div>
      <div className="item last_meeting">{last_meeting}</div>
      <div className="item sum_pay">{sum_pay}</div>
      <div className="item sum_meeting">{sum_meeting}</div>
      <div className="item activ_subscription">{activ_subscription}</div>
    </div >
  }

  render() {
    const { users } = this.state
    return (
      <div className="App">
        <div className="table_wrapper">

          <div className="control_wrapper">
            <form action="">
              <input type="text" placeholder='имя' />
              <input type="text" placeholder='емаил' />
              <input type="text" placeholder='телефон' />
              <input type="submit" />
            </form>
          </div>

          <div className="table_header">
            <div className="item name">Клиент</div>
            <div className="item cell">Телефон</div>
            <div className="item email">E-Mail</div>
            <div className="item last_meeting">Дата последнего посещения</div>
            <div className="item sum_pay">Сумма оплат</div>
            <div className="item sum_meeting">Количество посещений</div>
            <div className="item activ_subscription">Активный абонемент</div>
          </div>

          {users.map(elem => this.createItem(elem))}

        </div>
      </div>
    );
  }
}

export default App;
