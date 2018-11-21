import React, {Component} from 'react';
import {connect} from "react-redux";

import './MainContent.css';

import DecodedBlock from '../../DecodedBlock/DecodedBlock';
import Button from '../../Button/Button';

class MainContent extends Component {

    state = {
        token: '',
        subStr: []
    };

    onTokenStringHandler = (event) => {
        const token = event.target.value;
        const subStr = token.split('.');

        this.setState({
            token: token,
            subStr: subStr
        });

        const {onRequestDecode} = this.props;
        onRequestDecode(token);
    };

    render() {

        return (
            <div className='MainContent'>
                <div className='EncodedBlock'>
                    <div className='TokenHeader'>
                        <span>JWT string</span>
                    </div>
                    <textarea className='TokenString'
                              onChange={(event) => this.onTokenStringHandler(event)}
                    />
                </div>
                <div className='DecodedBlock'>
                    <DecodedBlock
                        title='Algorithm & Token Type'
                    />
                    <DecodedBlock
                        title='Payload Data'
                    />
                    <DecodedBlock
                        title='Signature Key'
                    />
                </div>
                <div className='CheckBlock'>
                    <div></div>
                    <Button/>
                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        tokenObj: state.tokenObj,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestDecode: (token) => dispatch({type: "API_CALL_DECODE", token}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);