import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { incrementNumber, decrementNumber } from '../Actions';

class Number extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Button bsStyle="primary" onClick={ () => this.props.incrementNumber(this.props.num) }> Increment </Button>
                        </div>

                        <div className="col-sm">
                            {this.props.num}
                        </div>

                        <div className="col-sm">
                            <Button bsStyle="primary" onClick={ () => this.props.decrementNumber(this.props.num) }> Decrement </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        num: state.num
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({incrementNumber, decrementNumber}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Number);
