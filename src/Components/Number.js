import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Number extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Button bsStyle="primary"> Increment </Button>
                        </div>

                        <div className="col-sm">
                            0
                        </div>

                        <div className="col-sm">
                            <Button bsStyle="primary"> Decrement </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Number;
