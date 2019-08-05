// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { vehiclesGet } from '../redux/actions';
import moment from 'moment';
type State = {}
type Props = { vehicles: any}
class List extends Component<Props, State> {
    componentWillMount (){
        this.props.vehiclesGet({status:'in'})
    }
    tarifa = (data: string) => {
        const date = moment(data);
        const date2 = moment( '04-08-2019 10:00','DD-MM-YYYY HH:mm')
        console.log(moment().diff(date, 'minutes'))
        console.log(moment().diff(date2, 'minutes'))
        
        return 1000
    }
    htmlRender = (data) => {
        return data.map((vehicle, i)=> {return <div key=''><div>{vehicle.type}</div><div>{vehicle.plate}</div><div>{moment(vehicle.createdAt).format('DD-MM-YYYY')}</div><div>{this.tarifa(vehicle.createdAt)}</div></div>})
    }
    render() {
        const {vehicles} = this.props
        return (
            <div> hello {this.htmlRender(vehicles)}</div>
        )
    }
}
function mapStateToProps(state) {
    return {
        success: state.vehiclesGet.success,
        createdAt: state.vehiclesGet.success,
        vehicles: state.vehiclesGet.vehicles
    };
}
export default connect(mapStateToProps, { vehiclesGet })(List);