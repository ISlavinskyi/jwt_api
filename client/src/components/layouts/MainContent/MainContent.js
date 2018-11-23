import React, {Component} from 'react';
import {connect} from 'react-redux';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

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

        const verifySuccess = <div>
            <ThumbUp
                style={{color: '#039BE5', fontSize: '45px', marginBottom: '-10px'}}
            /> <span style={{fontSize: '28px', color: '#039BE5'}}>Signature Verified</span>
        </div>;

        const verifyFailed = <div>
            <ThumbDown
                style={{color: '#FFB300', fontSize: '45px', marginBottom: '-18px'}}
            /> <span style={{fontSize: '28px', color: '#FFB300'}}>Invalid Signature</span>
        </div>;

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
                        payload={this.props.tokenObj.algorithm}
                    />
                    <DecodedBlock
                        title='Payload Data'
                        payload={this.props.tokenObj.decode}
                    />
                    <DecodedBlock
                        title='Signature Key'
                        payload={this.props.signature}
                        onDecodeChange={this.onDecodeChangeHandler}
                    />
                </div>
                <div className='CheckBlock'>
                    <div className="VerifyBlock">
                        {this.props.isValid ? verifySuccess : verifyFailed}
                    </div>
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
        isValid: state.isValid,
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