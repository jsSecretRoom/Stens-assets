import { createBrowserRouter } from "react-router-dom";

//UniversalComponents
import PagesContent from "../components/PagesContent/PagesContent";
import FuterComponent from "../components/FuterComponent/FuterComponent";
import HeaderComponent from "../components/HeaderComponent/HeaderComponent";

//SemplePages
import HomePage from '../pages/HomePage/HomePage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
// import TechnologiesPage from '../pages/TechnologiesPage/TechnologiesPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import PortfolloPage from '../pages/PortfolloPage/PortfolloPage';
import BlogPage from '../pages/BlogPage/BlogPage';
// import About_usPage from '../pages/About_usPage/About_usPage';
import TeamPage from '../pages/TeamPage/TeamPage';
import JoinTheTeamPage from '../pages/JoinTheTeamPage/JoinTheTeamPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import SpecializationPage from "../pages/SpecializationPage/SpecializationPage";

//UniversalPages
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ArticlePage from '../pages/ArticlePage/ArticlePage';

//SectionsPage
import ServicesSectionsPage from "../pages/ServicesSectionsPage/ServicesSectionsPage";
import TechnologiesSectionsPage from '../pages/TechnologiesSectionsPage/TechnologiesSectionsPage';
import AuthorSectionsPage from '../pages/AuthorSectionsPage/AuthorSectionsPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <HeaderComponent/>
                <PagesContent/>
                <FuterComponent/>
                
            </>
        ),
        children: [
            {
                path: '/home',
                element: <HomePage/>,

            },
            {
                path: '/home/:services',
                element: <ServicesPage/>,
                children: [
                    {
                        path: '/home/:services/:ServicesSections',
                        element: <ServicesSectionsPage/>,
                    }
                ]
            },
            {
                path: '/home/technologies',
                element: <ServicesPage/>,
                children: [
                    {
                        path: '/home/technologies/:TechnologiesSections',
                        element: <TechnologiesSectionsPage/>,
                    }
                ]
            },
            {
                path: '/home/Products',
                element: <ProductsPage/>,
            },
            {
                path: '/home/Portfolio',
                element: <PortfolloPage/>,
            },

            {
                path: '/home/Blog',
                element: <BlogPage/>,
            },
            {
                path: '/home/Blog/:Article',
                element: <ArticlePage/>,
            },
            {
                path: '/home/Blog/Article/Author', //поменять на /:Article/:Author - так как серверних карт нету
                element: <AuthorSectionsPage/>,
            },
            {
                path: '/home/About_us/Specialization',
                element: <SpecializationPage/>,
            },
            {
                path: '/home/About_us/Team',
                element: <TeamPage/>,
            },
            {
                path: '/home/About_us/Join_The_Team',
                element: <JoinTheTeamPage/>,
            },
            {
                path: '/home/About_us/Contacts',
                element: <ContactsPage/>,
            },
        ]
    },
    // {
    //     path: '/authorization',
    //     element: <AutorizationPage/>
    // },
    // {
    //     path: '/registration',
    //     element: <RegistrationPage/>
    // },
    {
        path: '*',
        element: (
            <>
                <HeaderComponent/>
                <ErrorPage/>
                <FuterComponent/>
            </>

        )
    }
])