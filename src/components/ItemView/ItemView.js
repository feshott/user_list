import React from 'react';


export default function ItemView(props) {

  return (< div className="table_item" >

    <div className="edit_btn" data-id={props.id}></div>
    <div className="delete_btn" data-id={props.id}></div>

    <div className="item name">{props.name}</div>
    <div className="item cell">{props.cell}</div>
    <div className="item email">{props.email}</div>
    <div className="item last_meeting">{props.last_meeting}</div>
    <div className="item sum_pay">{props.sum_pay}</div>
    <div className="item sum_meeting">{props.sum_meeting}</div>
    <div className="item activ_subscription">{props.activ_subscription}</div>
  </div >)
}
