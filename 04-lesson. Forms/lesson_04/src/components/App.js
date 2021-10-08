import React, { Component } from 'react';
import Layout from './Layout';
// import Counter from './Counter';
import Tasks from './Tasks';
import FormExample from './FormExample';

export default class App extends Component {
    render() {
        return (
            <Layout>
                {/* <Counter intialValue={6} step={10} /> */}
                {/* <Counter /> */}
                <Tasks />
                {/* <FormExample /> */}
            </Layout>
        );
    }
}
