import React from 'react';
import {connect} from 'react-redux';
import { Modal, Button } from 'antd';
import NestedDetailTable from '../components/detailporfolio';
import {
    Table, Badge, Menu, Dropdown, Icon,
  } from 'antd';
  import * as actions from '../store/actions/fetch';
  const menu = (
    <Menu>
      <Menu.Item>
        Action 1
      </Menu.Item>
      <Menu.Item>
        Action 2
      </Menu.Item>
    </Menu>
  );
  
class  NestedTable extends React.Component  {
  state = { visible: false,
            text:{} }

  showModal = (text) => {
    console.log(text);
    this.setState({
      visible: true,
      text: text
    });
  }

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
  
  
  
  render() {
    // const expandedRowRender = () => {
    //   const columns = [
    //     { title: 'Symbol', dataIndex: 'symbol', key: 'symbol' },
    //     { title: 'Quantity', dataIndex: 'total_quantity', key: 'total_quantity' },
    //     { title: 'Value',dataIndex:'total_value', key:'total_value' },
    //     { title: 'Profit',dataIndex:'profit', key:'profit' },
    // ];
  
    //   return (
    //     <Table
    //       columns={columns}
    //       dataSource={this.props.data} //replace with redux
    //       pagination={false}
          
    //     />
    //   );
    // };
    {
      this.props.coindetail(this.props.token);
    }
    const columns = [
        { title: 'Symbol', dataIndex: 'symbol', key: 'symbol', 
        render: text => <a  href="javascript:void(0)" onClick={() => this.showModal(text)}>{text}</a>,},
        { title: 'Quantity', dataIndex: 'total_quantity', key: 'total_quantity' },
        { title: 'Value',dataIndex:'total_value', key:'total_value' },
        { title: 'Profit',dataIndex:'profit', key:'profit' },
    ];
  
  
    return (
      <div>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={this.props.porfolio} //replace with coinform filter by coin item
        rowKey = {this.props.data.owner}
      />
      <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
      >
           <NestedDetailTable text = {this.state.text} />
      </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    coindetail: (token) => dispatch(actions.fetchCoinformdetail(token)) 
  }
}

const mapStateToProps = state => {
    return {
        porfolio: state.PorfolioReducer.data,
        data: state.fetchReducer.data,
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (NestedTable);
  
