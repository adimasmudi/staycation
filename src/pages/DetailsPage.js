import React, { Component } from 'react'
import Header from 'parts/Header'
import PageDetailTitle from 'parts/PageDetailTitle'
import Testimonials from 'parts/Testimonials';
import Footer from 'parts/Footer';

import itemDetails from 'json/itemDetails.json';

export default class DetailsPage extends Component {
    componentDidMount(){
        window.title = 'Details Page';
        window.scrollTo(0,0);
    }
    
    render() {
        const breadcrumb = [
            { pageTitle : "Home", pageHref : ""},
            { pageTitle : "House Details", pageHref : ""}
        ];

        console.log(itemDetails)
        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle
                    data={itemDetails}
                    breadcrumb={breadcrumb}
                    
                >

                </PageDetailTitle>
            </>
        )
    }
}
