import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About this website</h1>
            <p>This is a pretty cool website. <Link to="/contact">You should hire me.</Link></p>
        </Layout>
    )
}

export default About