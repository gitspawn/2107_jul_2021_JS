import React, { Component } from 'react';
import Layout from './Layout';
import Tasks from './Tasks';
// import Counter from './Counter';

export default class App extends Component {
    render() {
        return (
            <Layout>
                {/* <Counter intialValue={6} step={10} /> */}
                {/* <Counter /> */}
                <Tasks />
            </Layout>
        );
    }
}
