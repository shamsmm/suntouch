import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import PrivacyPolicy from "../views/site/PrivacyPolicy";
import Home from "../views/home/Home";
import NotFound from "../components/NotFound";
import About from "../views/about/About";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<Home />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/story"} element={<NotFound />} />
                <Route path={"/videos"} element={<NotFound />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
                <Route path={"*"}  element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;