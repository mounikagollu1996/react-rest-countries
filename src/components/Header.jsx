import React from 'react';

const Header = (props) => {
    const dark = <i className="fa fa-moon-o pr-3 pt-1" style={{cursor: 'pointer'}} onClick={props.toggleColor}></i>
    const white = <i className='fa fa-moon-o pr-3 pt-1' aria-hidden='true' style={{cursor: 'pointer',color: 'black'}} onClick={props.toggleColor}></i>
    return (
        <nav className="header" style={props.color ? {backgroundColor: '#2B3945', color: '#ffffff'} : {backgroundColor: '#ffffff'}}>
            <div className="row m-auto d-flex" style={{justifyContent: 'space-between', width: '90%'}}>
                <div className="h4 pt-4 ml-5">{props.title}</div>
                <div className="modeChange d-flex flex-row pt-4 pr-5">
                   {props.color ? dark : white}
                   <p>Dark mode</p> 
                </div>
            </div>
        </nav>
    );
}
export default Header;