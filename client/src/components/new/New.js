import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { postVehicle, dataForSave } from '../../redux/actions';
import './new.scss'
type Props = {};
type State = { };
class New extends Component<Props, State> {
    validate = (type, plate) => {
        if(!type){
            alert('select a type of vehicle')
            return 'required'
        }
        if (!plate){
            alert('you can write a plate')
            return 'required'
        }
    }
    save = () => {
        const { postVehicle, type, plate } = this.props;
        const validation = this.validate(type, plate)
        if(validation === 'required'){
            return 
        }
        console.log(type, plate )
        postVehicle({type, plate, status:'in'})
        setTimeout(()=>{
            document.location.href= '/'
        },400)
    }
    handleChange = (e) => {
        const obj = {};
        const val = e.target.value;
        obj[e.target.id] = val;
        this.props.dataForSave(obj)
    }
    handleSelectType = (e) =>{
        this.props.dataForSave({type: e.currentTarget.dataset.id})
        
    }
    classNameSelected = (classname) =>{
        const {type} =  this.props;
        const __class = classname === type.toLowerCase() ? `${classname} selected`: classname
        console.log(__class)
        return __class
    }
    render () {
        return (
            <div className="container">
                <div className="box">
                    <div className="header">
                        <div className="circulo">
                            <i className="fas fa-car-alt"></i>
                        </div>
                        <div className="desc">
                            <p>Motor</p>
                            <p>Park <br></br> Version 1 </p>
                        </div>
                    </div>
                    <div className="form">
                        <h4>Add new vehicle</h4>
                        <div className="select">
                            <div onClick={this.handleSelectType} data-id="Moto" className={this.classNameSelected('moto')}></div>
                            <div onClick={this.handleSelectType} data-id="Car"  className={this.classNameSelected('car')}></div>
                        </div>
                        <div className="container-elements">
                            <input id="plate" placeholder="MGJ21C" onChange={this.handleChange}></input>
                            <div className="container-button">
                                <div className="button">
                                    <Link to={'/'}>
                                        Back
                                    </Link>
                                </div>
                                <div className="button" onClick={this.save}>
                                    Save
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        type: state.dataForSave.type,
        plate: state.dataForSave.plate
    }
}
export default connect(mapStateToProps, { postVehicle, dataForSave })(New);