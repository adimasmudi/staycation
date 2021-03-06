import React, {Component} from "react";
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories'
import Testimonials from "parts/Testimonials";
import Footer from 'parts/Footer';


import landingPage from 'json/landingPage.json';

export default class LandingPage extends Component{
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }

    componentDidMount(){
        window.title = 'StayCation | Home';
        window.scrollTo(0,0);
    }
    
    render(){
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}></MostPicked>
                <Categories data={landingPage.categories}></Categories>
                <Testimonials data={landingPage.testimonial}></Testimonials>
                <Footer />
            </>
        )
    }
}