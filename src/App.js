import { BrowserRouter as Router, useLocation } from "react-router-dom";
import {Helmet} from "react-helmet";
import {useLayoutEffect} from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import {Container, Row} from "react-bootstrap";
import Footer from "./components/Footer";
import AnimatedRoutes from "./routing/AnimatedRoutes";
import './scss/style.scss';

function App() {

  // Auto scroll to beginning on page change
  const ScrollWrapper = ({children}) => {
    const location = useLocation();

    useLayoutEffect(() => {
      if (window.scrollY > 0) {
        document
            .documentElement
            .scrollTo(0, document.getElementById('main')?.offsetTop + 512);
      }

    }, [location.pathname]);

    return children;
  }

  return (
      <Router>

          <Helmet>
            <title>Team Sun Touch</title>
          </Helmet>

          <ScrollWrapper>
            <div id={"main"}>
              <Container fluid={true} className={"p-0 mb-5"}>
                <Row className={"w-100 m-0 p-0"}>
                  <Navigation/>
                  <br/>
                  <Header />
                </Row>
                <Row className={"w-100 m-0 p-0 pt-5"}>
                  <AnimatedRoutes />
                </Row>
              </Container>
              <Footer/>
            </div>
          </ScrollWrapper>
      </Router>
  );
}

export default App;