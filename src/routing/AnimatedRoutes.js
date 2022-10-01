import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import PrivacyPolicy from "../views/site/PrivacyPolicy";
import Home from "../views/site/Home";
import NotFound from "../components/NotFound";
import About from "../views/site/About";
import Story from "../views/site/Story";
import Videos from "../views/site/Videos";
import Quiz from "../views/quiz/Quiz";
import Articles from "../views/site/Articles";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<Home />} />
                <Route path={"/home"} element={<Home />} />
                <Route path={"/story"} element={<Story />} />
                <Route path={"/quiz"} element={<Quiz />} />
                <Route path={"/videos"} element={<Videos />} />
                <Route path={"/articles"} element={<Articles />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
                <Route path={"*"}  element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;