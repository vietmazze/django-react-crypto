import React from 'react';
import {connect} from 'react-redux';
import { Table, Divider, Tag } from 'antd';



const { Column, ColumnGroup } = Table;



class  Detailmarketcap extends React.Component  {
    render() {
      // const{text} = this.props;
      // console.log("Is this text", text)
    return (
    <div>test</div>
    
    )
    }
}



const mapStateToProps = state => {
  return {
    coindetail: state.coinformdetailReducer.data
  }
}


export default Detailmarketcap;

https://www.sitepoint.com/react-router-v4-complete-guide/
