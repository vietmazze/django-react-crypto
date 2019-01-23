import React from "react";
import axios from "axios";
import CollectionsPage from '../components/form';
import NestedTable from '../components/porfolio'
import {connect} from 'react-redux';
import { Table, Divider, Tag } from 'antd';
import {Redirect} from "react-router-dom";
// import * as actions from '../store/actions/auth'; 
class Formview extends React.Component {
    // state = {
    //     cryptos: []
    //   };
    
    // componentWillReceiveProps(newProps) {
    //     console.log(newProps.token);
    //     console.log(newProps.data);

        // if (newProps.token) {
        //     axios.defaults.headers = {
        //         "content-Type":"application/json",
        //         Authorization: newProps.token
        //     }
    // //         axios.get("http://127.0.0.1:8000/api/coincap/")
    // //         .then(res => {
    // //             this.setState({cryptos:res.data});
    // //         })
    // //         .catch(error => console.log(error.res));
    // //      }
    // // }


    render() {
        // const columns = [{
        //     title: 'Symbol',
        //     dataIndex: 'symbol',
        //     key: 'symbol',
        //     render: text => <a href="javascript:;">{text}</a>,
        //   }, {
        //     title: 'Price',
        //     dataIndex: 'price_entry',
        //     key: 'price_entry',
        //   }, {
        //     title: 'Quantity',
        //     dataIndex: 'quantity',
        //     key: 'address',
        //   }];
        return (
            <div>
                <NestedTable />
                <CollectionsPage cryptos = {this.props.data}/>

            </div>
        )
    }

    
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.token,
        data: state.fetchReducer.data

        
    }
  }


export default connect(mapStateToProps)(Formview);
