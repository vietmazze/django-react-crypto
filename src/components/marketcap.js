import React from 'react';
import {connect} from 'react-redux';
import { Modal, Button } from 'antd';
import Detailmarketcap from '../components/detailmarketcap';

import {
    Table, Badge, Menu, Dropdown, Icon,
  } from 'antd';
  import * as actions from '../store/actions/fetch';
 
  
class  Marketcap extends React.Component  {
  state = { visible: false,
            text:{} }

 

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  } 
  
  handleOnclick =(text) => {
    this.setState({
        text:text});
    window.location.assign('http://localhost:3000/marketcap/'+ text);
  }
  
  
  render() {
 
    // {
    //   this.props.coindetail(this.props.token);
    // }
    const columns = [
        { title: 'Symbol', dataIndex: 'symbol', key: 'symbol', 
        render: text => <a  href="javascript:void(0)" onClick={() => this.handleOnclick(text)}>{text}</a>,},
        { title: 'Marketcap', dataIndex: 'marketcap', key: 'marketcap' },
        { title: 'Price',dataIndex:'price', key:'price' },
        { title: 'Circulating Supply',dataIndex:'currentSupply', key:'currentSupply' },
    ];
  
  
    return (
      <div>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={this.props.data} //replace with coinform filter by coin item
        rowKey = {this.props.data.owner}
      />
      <Detailmarketcap text = {this.state.text} />
      
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     coindetail: (token) => dispatch(actions.fetchCoinformdetail(token)) 
//   }
// }

const mapStateToProps = state => {
    return {
        porfolio: state.PorfolioReducer.data,
        data: state.fetchReducer.data,
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps) (Marketcap);
  
