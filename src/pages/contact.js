import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Info <a href="https://google.com" target="_blank">Check it out!</a></h1>
            <p>Name: John</p>
            <p>Age: 27</p>
        </Layout>
    )
}

export default Contact