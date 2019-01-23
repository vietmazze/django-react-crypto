import React from 'react';
import {connect} from 'react-redux';
import { Table, Divider, Tag } from 'antd';



const { Column, ColumnGroup } = Table;



class  NestedDetailTable extends React.Component  {
    render() {
      // const{text} = this.props;
      // console.log("Is this text", text)
    return (
  <Table dataSource={this.props.coindetail.filter(el => {

    return el.symbol === this.props.text;
  
  }).map(({symbol,quantity}) => {
  
    return {symbol,quantity};
  
  })}>
    <ColumnGroup title="Name">
      <Column
        title="Symbol"
        dataIndex="symbol"
        key="symbol"
      />
      <Column
        title="Quantity"
        dataIndex="quantity"
        key="quantity"
      />
   
    </ColumnGroup>
  </Table>
    );
}
}

const mapStateToProps = state => {
  return {
    coindetail: state.coinformdetailReducer.data
  }
}

export default connect(mapStateToProps)(NestedDetailTable);