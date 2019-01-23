import React from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Switch } from 'antd';
import {connect} from 'react-redux';
import { DatePicker } from 'antd';
import moment from 'moment';
import Axios from 'axios';
import * as actions from '../store/actions/fetch';


const FormItem = Form.Item;


function timeChange(date, dateString){
    console.log(date, dateString);}

const CollectionCreateForm = Form.create()(
    class extends React.Component {
    
render() {

// const cryptos = this.props.cryptos
const { visible, onCancel, onCreate, form, cryptos,onChange} = this.props;
const { getFieldDecorator } = form;



return (

<Modal

visible={visible}

title="Trade Cryptocurrency"

okText="Create"

onCancel={onCancel}

onOk={onCreate}

> 

<Form layout="vertical">

 <Switch checkedChildren={"Buy"} unCheckedChildren={"Sell"} defaultChecked
        onChange = {(checked)=>onChange(checked)}
        />
<br/>
<FormItem label="Cryptocurrency"  style={{ width: 200 }}>
    {getFieldDecorator('symbol', {initialValue: 'BTC',})
    (<select>
        { cryptos.map(crypto => {
                return <option key={crypto.id}>{crypto.symbol}</option>
            })

        }
    </select>
    )}
</FormItem>
<FormItem label='Price'  style={{ width: 200 }}>
        {getFieldDecorator('price_entry')(
        <Input type="number" />
        )}
</FormItem>

<FormItem label='Quantity'  style={{ width: 200 }}>
        {getFieldDecorator('quantity')
        (
        <Input type="number" />
        )}
</FormItem>


{<FormItem label='Date'>
        {getFieldDecorator('date')
                (
        <DatePicker onChange={timeChange} />
        )}
</FormItem> }

</Form>


</Modal>

);

}

}

);

 

class CollectionsPage extends React.Component {

state = {

visible: false,
postObj: [],
checked: true,
};

 

showModal = () => {

this.setState({ visible: true });

}

 

handleCancel = () => {

this.setState({ visible: false });

}

onChange = (checked) => {
    if(checked === true){
        this.setState({
        checked:true
        })
    }
    else if (checked === false){
        this.setState({
        checked:false
        })
    }
}        
 

handleCreate = (event) => {
event.preventDefault();
const form = this.formRef.props.form;

form.validateFields((err, values) => {
  if (err) {
    return;
  }
 
 let postObj = [];
 if (this.state.checked === true) {
    postObj = {
        symbol: values.symbol,
        price_entry: values.price_entry,
        quantity: Math.abs(values.quantity),
        date: moment(values.date).format('MM/DD/YYYY'),
        }
    console.log("Buy side",postObj)  
    }
  else if (this.state.checked === false) {
    postObj = {
        symbol: values.symbol,
        price_entry: values.price_entry,
        quantity: -Math.abs(values.quantity),
        date: moment(values.date).format('MM/DD/YYYY'),
        }
    console.log("Sell side",postObj)
  }   
   this.props.postObj(postObj);

  form.resetFields();
  this.setState({ visible: false} );

});


}
 

saveFormRef = (formRef) => {

this.formRef = formRef;

}

 

render() {


return (

<div>


<Button type="primary" onClick={this.showModal}>TRADE</Button>

<CollectionCreateForm

wrappedComponentRef={this.saveFormRef}

visible={this.state.visible}

onCancel={this.handleCancel}

onCreate={this.handleCreate}

cryptos = {this.props.cryptos}

onChange = {this.onChange}


/>

</div>

);

}

}

const mapDispatchtoProps = dispatch => {
    return {
        postObj: (postObj) => dispatch(actions.fetchCoinform(postObj))
    }

}


export default  connect(null,mapDispatchtoProps)(CollectionsPage);



 