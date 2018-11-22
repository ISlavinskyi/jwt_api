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

    onDecodeChangeHandler = (event) => {
        const signature = event.target.value;
        const {onSignatureChange} = this.props;
        let secret;
        try {
            secret = JSON.parse(signature);
        } catch (e) {
            secret = {secret: 'wrong input'};
        }
        onSignatureChange(secret);
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
                        payload={this.props.tokenObj}
                    />
                    <DecodedBlock
                        title='Signature Key'
                        payload={this.props.signature}
                        onDecodeChange={this.onDecodeChangeHandler}
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
        signature: state.signature,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestDecode: (token) => dispatch({type: "API_CALL_DECODE", token}),
        onSignatureChange: (signature) => dispatch({type: "ON_SIGNATURE_CHANGE", signature})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);