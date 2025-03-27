import './assets/stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.tsx';
import { Route, Routes } from 'react-router-dom'; // Ensure you use react-router-dom
import React, {Suspense, lazy, useEffect} from 'react';
import Footer from './components/Footer.tsx';
import {FaSpinner} from "react-icons/fa";


function App() {
    useEffect(() => {
        const element = document.getElementById('fade-in');
        if (element) {
            setTimeout(() => {
                element.classList.add('tw-opacity-100');
            }, 100);
        }
    }, []);

    const LandingPage = lazy(() => import('./components/LandingPage.tsx') as Promise<{ default: React.ComponentType }>);
    const Services = lazy(() => import('./components/Services.tsx') as Promise<{ default: React.ComponentType }>);
    const About = lazy(() => import('./components/About.tsx') as Promise<{ default: React.ComponentType }>);
    const Estimates = lazy(() => import('./components/Estimates.tsx') as Promise<{ default: React.ComponentType }>);
    const Gallery = lazy(() => import('./components/Gallery.tsx') as Promise<{ default: React.ComponentType }>);

    return (
        <div className="tw-w-lvw tw-h-lvh tw-align-middle tw-justify-start tw-overflow-y-scroll tw-flex tw-flex-col">
            <Navigation />
            <div id="fade-in" className="tw-flex tw-flex-col tw-w-full tw-opacity-0 tw-transition-opacity tw-duration-500 tw-ease-in xs:tw-min-h-[30rem] lg:tw-min-h-[40rem] xl:tw-min-h-[45rem] xxl:tw-min-h-[50rem] tw-relative">
                <Suspense fallback={<FaSpinner className={"tw-text-primary-black"}/>}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Estimates" element={<Estimates />} />
                        <Route path="/Gallery" element={<Gallery />} />
                    </Routes>
                </Suspense>
            </div>
            <Footer />
        </div>
    );
}

export default App;