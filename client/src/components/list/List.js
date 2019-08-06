// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { vehiclesGet, search, putVehicle } from '../../redux/actions';
import {Link} from 'react-router-dom';
import moment from 'moment';
import imgCar from './img/car.svg'
import './list.scss'

var timer;
type State = {
}

type Props = { 
    vehicles: any, 
    status: string, 
    type: string
}
class List extends Component<Props, State> {
    constructor () {
        super();
        this.state = {
            class_modal: 'hide modal',
            id_to_remove: null
        };
    }
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
        // confirm("are you sure, this action it's when the client pay and got out, in other phrase actualize status for payout");
        const id = e.currentTarget.dataset.id;
        this.setState({class_modal: 'modal', id_to_remove: id})
        
    }
    cancelAction = () => {
        this.setState({class_modal: 'hide modal',id_to_remove: null })
    }
    sendAction = () => {
        this.props.putVehicle({id: this.state.id_to_remove, status: 'outpay'})
        this.refresh()
        this.cancelAction()
    }
    findVehicle = (e) => {
        try {
            clearTimeout(timer); // stop timeout change event if it's already running
        } catch (ignore) {}
        timer = setTimeout(() => {
        const{plate, type, status} = this.props;
        if(plate && type)
            this.props.vehiclesGet({plate, type, status})
        else if(plate)
            this.props.vehiclesGet({plate, status})
        else if(type)
            this.props.vehiclesGet({type, status})
        else 
            this.props.vehiclesGet({status})
        }, 800);
    }
    handleChange = (e) => {
        const val = e.target.value;
        const obj = {};
        obj[e.target.id] = val;
        this.props.search(obj);
        this.findVehicle(e);
    }
    handleSelectType = (e) => {
        if(this.props.type === e.currentTarget.dataset.id){
            this.props.search({type: ""});
        } else {
            this.props.search({type: e.currentTarget.dataset.id});
        }
        this.findVehicle(e);
    }
    typeSelect = (type, name) => {
        if(!type)
            return  `${name} selected`;
        else if(type===name)
            return  `${name} selected`;
        else
            return `${name}`
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
                <div data-id={vehicle.id} key={key} className="card" onClick={this.handleClick}>
                    <div className={`card-sub ${vehicle.type}`}></div>
                    <div className="desc-card right">
                        <p><span className="number">{vehicle.id}</span>  {vehicle.type} {vehicle.plate}</p>
                        <p>
                            {moment(vehicle.createdAt).format('DD-MM-YYYY HH:mm:ss')}
                            <br></br>
                            {this.tarifa( vehicle.createdAt,vehicle.type)} amount.
                        </p>
                    </div>
                    
                </div>);
        })
    }
    
    render() {
        const {vehicles, type} = this.props

        return (
            <div className="container"> 
            <div className={this.state.class_modal}>
                <div className="message"> Client going be out and pay, this update change "into park" to "payout" ... are you sure?</div>
                <div className="container-modal-button">
                    <div onClick={this.cancelAction} className="cancel">Cancel</div>
                    <div onClick={this.sendAction} className="update">Out</div>
                </div>
            </div>
                <div className="box">
                    <div className="header">
                        <div className="circulo">
                            <img className="bottom" alt="car" src={imgCar}></img>
                        </div>
                        <div className="desc">
                            <p>Motor</p>
                            <p>Park <br></br> Version 1 </p>
                        </div>
                    </div>
                    
                        <div className="search">
    
                        </div>
                        <div className="select-container">
                            <input type="search" id="plate" name="q" placeholder="licence plate? " onChange={this.handleChange} ></input>
                            <div data-id="moto" onClick={this.handleSelectType} className={this.typeSelect(type, 'moto')}></div>
                            <div data-id="car" onClick={this.handleSelectType} className={this.typeSelect(type, 'car')}></div>
                        </div>
                        <div className="overfloat">
                            {this.htmlRender(vehicles)}
                        </div>
                        <div className="cnt">
                           Size {vehicles.length}
                        </div>
                        <div className="Add">
                            <Link to={'/add'}>
                                Add More
                            </Link>
                        </div>
                    
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