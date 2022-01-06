import React from 'react'
import useTop from '../../../hooks/useTop'
import InfoBody from './sub-components/InfoBody';
import InfoHeader from './sub-components/InfoHeader';

const RestAdminProject = () => {
    useTop();
    const title = "rAdmin (Restaurant Tool)"
    const subTitleText = "A full-service app for small restaurants";
    const stack = ['React', 'React TypeScript', 'Redux','Firebase', 'Firebase Auth', 'Stripe API', 'Sass', 'Java', 'Spring Boot', 'Docker'];
    const backgroundTitleImage = `${process.env.PUBLIC_URL}/public-project-images/rest-admin/rest_order_art.png`;
    const titleDisplayColor = "white";
    const description = `
        <p>
            The Restaurant Admin tool (rAdmin) is a concept that allows small businesses in the food industry to quickly
            spin off administration software and online ordering services for their customers. The idea came to mind when I 
            would surf delivery/pick-up apps such as Uber Eats, the Chick Fil-A app, or contactless ordering at sit-down restaurants.
            The cost of contracting a delivery app is high, and corporations such as Chick Fil-A have the resources and staff to implement their own 
            custom applications for their services. That leaves out smaller restaurant owners who do not have the luxury of time, staff, and
            resources to build out their online presence and track it effectively.
        </p>
        <p>
            With rAdmin, where a restaurant owner would be able to sign up online, and after a few easy steps receive a domain
            for their admin website and customer (ordering) website. For the scope of this project, the DevOps work and infrastructure to
            facilitate real sales was not implemented, but all of the data stores, project structure, and architecture was built to maintain 
            large amounts of modular data fitting for this purpose.
        </p>
        <p>
            This is a mobile-first project designed to offer a completely configurable interface to the user. There is as little
            styling and structure hard-coded in as possible, so that a user would be able to make their website personalized 
            for their business.
        </p>
        <p>
            To view more information and see the applications in action, please see these repositories on GitHub:
            <ul>
                <li><a href="https://github.com/spaulsteinberg/restaurant-tool" target="_blank">Admin Tool</a></li>
                <li><a href="https://github.com/spaulsteinberg/restaurant-customer" target="_blank">Customer</a></li>
                <li><a href="https://github.com/spaulsteinberg/restaurant-client-api" target="_blank">Customer API</a></li>
            </ul>
        </p>`;
    return (
        <React.Fragment>
             <InfoHeader title={title} subTitleText={subTitleText} backgroundImg={backgroundTitleImage} display={titleDisplayColor}/>
             <InfoBody description={description} stack={stack} />
        </React.Fragment>
    )
}

export default RestAdminProject
