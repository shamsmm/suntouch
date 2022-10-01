import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";
import {ArrowRight} from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import questions from "./_questions";

function Quiz(props) {
    const [state, setState] = useState({step: 0});
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState([]);

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} >
            <Container>
                <Helmet>
                    <title>Team Sun Touch | Quiz</title>
                </Helmet>
                {state.step === 0 && <Row className={"justify-content-center"}>
                    <Col lg={8}>
                        <h2 className={"text-center mb-5"}>Take a small Quiz ;)</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis egestas porta. Aenean condimentum, lorem in pulvinar ullamcorper, libero elit ornare enim, quis fermentum felis arcu nec orci. Vestibulum ac diam nec risus mattis tempus. Donec sollicitudin pharetra dapibus. Aliquam erat volutpat. Etiam sem dolor, ultrices vitae luctus non, mattis quis risus. Nullam ullamcorper ullamcorper orci, eget placerat diam. Maecenas tortor tortor, volutpat mollis mauris ut, hendrerit varius elit. Nullam at diam orci. Suspendisse quis dignissim odio. In interdum vehicula orci malesuada pharetra. Aliquam quis leo odio. Donec lobortis nec tellus vitae fermentum. Cras a dui nulla. Sed tempor libero tincidunt ex congue molestie.
                        </p>
                        <Button size={"lg"} className={"rounded-pill mt-3"} onClick={() => {
                            setState({...state, step: 1})
                        }
                        } >
                            Take Quiz & Win prizes! <ArrowRight/>
                        </Button>
                    </Col>
                </Row>}
                {state.step === 1 && <Row className={"justify-content-center"}>
                    <Col lg={8}>
                        <h2 className={"text-center mb-5"}>Questions</h2>
                        <Form>
                            {questions.map((q, i1) => <div className={"my-5"}>
                                <h4>{q.title}</h4>
                                {q.answers.map((a, i2) => <Form.Check
                                    label={a.title}
                                    name={`group-${i1}`}
                                    type={"radio"}
                                    id={`radio-group-${i1}-${i2}`}
                                    onClick={(e) => {
                                        if (answered[i1] === true) {
                                            if (q.correct !== a.letter) {
                                                let newAnswered = JSON.parse(JSON.stringify(answered));
                                                delete newAnswered[i1];
                                                setAnswered(newAnswered)
                                                setScore(score - 1)
                                            }
                                        }
                                        else {
                                            if (q.correct === a.letter) {
                                                let newAnswered = JSON.parse(JSON.stringify(answered));
                                                newAnswered[i1] = true;
                                                setAnswered(newAnswered)
                                                setScore(score + 1)
                                            }
                                        }
                                    }}
                                />)}
                            </div>)}
                        </Form>

                        <Button size={"lg"} className={"rounded-pill mt-3"} onClick={() => {
                            setState({...state, step: 2})
                        }
                        } >
                            Submit! <ArrowRight/>
                        </Button>
                    </Col>
                </Row>}
                {state.step === 2 && <Row className={"justify-content-center"}>
                    <Col lg={6} className={"text-center"}>
                        <h2>Your Score is: {
                            Math.round(score * 100 / (questions.length))
                        }%</h2>
                        {score / questions.length === 1.0 && <h1 className={"text-success"}>CONGRATULATIONS!</h1>}
                        {score / questions.length > .8 && score / questions.length < 1.0 && <h1 className={"text-success"}>NOT BAD ;)</h1>}
                        {score / questions.length > .5 && score / questions.length < .8 && <h1 className={"text-warning"}>TRY AGAIN FOR A HIGHER SCORE ;)</h1>}
                        {questions.length < .5 && <h1 className={"text-danger"}>OH BOY, HARD LUCK :-(</h1>}
                    </Col>
                </Row>}
            </Container>
        </motion.div>
    );
}

export default Quiz;