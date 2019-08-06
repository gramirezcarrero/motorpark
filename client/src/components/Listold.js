// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { vehiclesGet, search, putVehicle } from '../redux/actions';
import Switch from "react-switch";
import moment from 'moment';
import './list.scss'
var timer;
type State = {}
type Props = { vehicles: any}
class List extends Component<Props, State> {
    componentWillMount (){
        this.props.vehiclesGet({status:'in'})
    }
    tarifa = (data: string, type: string) => {
        const date = moment(data);
        const hoursPark = (moment().diff(date, 'minutes'))/60
        const timewhioutfraction = (hoursPark * 100) > Math.trunc(hoursPark)? (Math.trunc(hoursPark) + 1): Math.trunc(hoursPark);
        let baseMoney = 4000;
        if (type === 'Moto') {
            baseMoney = 1000;
        }
        return timewhioutfraction * baseMoney
    }
    handleClick = (e) => {
        const id = e.currentTarget.dataset.id;
        this.props.putVehicle({id:id, status:'outpay'})
        this.refresh()
    }
    handleChange = (e) => {
        const val = e.target.value;
        const obj = {};
        obj[e.target.id] = val;
        this.props.search(obj);
        
        try {
            clearTimeout(timer); // stop timeout change event if it's already running
        } catch (ignore) {}
        timer = setTimeout(() => {
        const{plate, type, status} = this.props;
        if(plate && type)
            this.props.vehiclesGet({plate, type})
        else if(plate)
            this.props.vehiclesGet({plate, status})
        else if(type)
            this.props.vehiclesGet({type, status})
        else 
            this.props.vehiclesGet({status})
        }, 800);
        
        
    }
    refresh = () => {
        try {
            clearTimeout(timer); // stop timeout change event if it's already running
        } catch (ignore) {}
        timer = setTimeout(() => {
            const {status} = this.props;
            this.props.vehiclesGet({status});
        })
    }
    filterOutIn = ()  => {
        const {status} =this.props
        const sendStatus = status==='in'? 'outpay' : 'in';
        this.props.search({status: sendStatus})
        this.refresh()
    }
    
    htmlRender = (data: any) => {
        if(!data.length){return};
        return data.map((vehicle, i)=> {
            const key = Math.random()
            return (
                <div key={key} className="tr">
                    <div className="td">{vehicle.type}</div>
                    <div className="td">{vehicle.plate}</div>
                    <div className="td">{moment(vehicle.createdAt).format('DD-MM-YYYY HH:mm:ss')}</div>
                    <div className="td">{this.tarifa( vehicle.createdAt,vehicle.type)}</div>
                    {vehicle.status === 'in'? (
                        <div onClick={this.handleClick} data-id={vehicle.id} className="td">Out</div>
                    ): (
                        <div className="td"></div>
                    )}
                    
                </div>);
        })
    }
    
    render() {
        const {vehicles, status} = this.props
        const check = status==='in' ? true : false;
        return (
            <div className="container-app"> 
                <div className="table">
                    <div className="tr none">
                        <div className="td title">Vehicle List</div>
                        <div className="td"></div>
                        <div className="td"></div>
                        <div className="td">
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="tr none">
                        <div className="td title"></div>
                        <div className="td"></div>
                        <div className="td"></div>
                        <div className="td">
                            add +
                        </div>
                    </div>

                    <div className="tr head">
                        <div className="td"><input id="type" onChange={this.handleChange} value={this.props.type}></input></div>
                        <div className="td"><input id="plate" onChange={this.handleChange}></input></div>
                        <div className="td"></div>
                        <div className="td"></div>
                        <div className="td"> {this.props.status} <Switch onChange={this.filterOutIn} checked={check} /> </div>
                    </div>
                    <div className="tr head">
                        <div className="td">Type</div>
                        <div className="td">Plate</div>
                        <div className="td">Date</div>
                        <div className="td">Mount</div>
                        <div className="td">Action</div>
                    </div>
                    {this.htmlRender(vehicles)}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        success: state.vehiclesGet.success,
        createdAt: state.vehiclesGet.success,
        vehicles: state.vehiclesGet.vehicles,
        type: state.search.type,
        status: state.search.status,
        plate: state.search.plate
    };
}
export default connect(mapStateToProps, { vehiclesGet, search, putVehicle })(List);