import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Form inline>
                    <h2>Input Your Birthday!</h2>
                    <FormControl type="date">
                    </FormControl>
                    { ' ' }
                    <Button> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default App;