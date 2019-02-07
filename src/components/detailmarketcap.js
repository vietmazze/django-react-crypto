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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [{ type: "ohlc", 
                                x: btcdata.time
                                open: btcdata.open,
                                high: btcdata.high,
                                close: btcdata.close,
                                low:btcdata.low],
        layout: {'title': "Bitcoin charts",
                'yaxis': {'title': 'AAPL Stock'},
                
                 }, 
        frames: [], 
        config: {} };
    }

    render() {
        return (
            <Plot
                data={this.state.data}
                layout={this.state.layout}
                frames={this.state.frames}
                config={this.state.config}
                onInitialized={(figure) => this.setState(figure)}
                onUpdate={(figure) => this.setState(figure)}
            />
        );
    }
}


const mapStateToProps = state => {
  return {
   btcdata: state.BtcDataReducer.data   
   }
 }  

export connect(mapStateToProps)(Detailmarketcap);

https://www.sitepoint.com/react-router-v4-complete-guide/
