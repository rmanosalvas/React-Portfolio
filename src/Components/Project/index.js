import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';


function Project () {
    return (
        <div>
            <br></br>
            <CardDeck>
            <Card>
                <Card.Img variant="top" src="/images/NoteTaker.png" />
                <Card.Body>
                <Card.Title><a href='https://sleepy-brook-80020.herokuapp.com/'>Note Taker</a></Card.Title>
                <Card.Text>
                    This application allows a user to take notes and save them to a sidebar. This application was made
                    with mostly JavaScript and little HTML. 
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="/images/FitnessTracker.png" />
                <Card.Body>
                <Card.Title><a href='https://polar-earth-87438.herokuapp.com/'>Workout Tracker</a></Card.Title>
                <Card.Text>
                    Be prepared the next time you are in the gym to start plugging in your workouts. This application allows you
                    to track your progress in the gym on a week to week basis by time spent and weight lifted!
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="/images/BurgerLog.png" />
                <Card.Body>
                <Card.Title><a href='https://morning-dawn-09099.herokuapp.com/'>Burger Log</a></Card.Title>
                <Card.Text>
                    Are you a burger fanatic? How many different kind of burgers have you tried? Well start figuring it out now with this application!
                    Here you can write down all the burgers y ou want to try and once you've had it you can move that delicious 'boyga in the eaten section!
                </Card.Text>
                </Card.Body>
            </Card>
            </CardDeck>
            <br></br>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="/images/EmployeeManager.png" />
                    <Card.Body>
                    <Card.Title><a href='https://github.com/rmanosalvas/Employee_Manager'>Employee Manager</a></Card.Title>
                    <Card.Text>
                        Need help managing all your employees? This command line application created with Node.js allows you to add, view, and transfer employees by
                        their roles or departments.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/DateMatch.png" />
                    <Card.Body>
                    <Card.Title><a href='https://nameless-tundra-31560.herokuapp.com/'>Date Match</a></Card.Title>
                    <Card.Text>
                        This MERN application allows a user to create a dating profile, posts dates, and 'like' a date posted. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="/images/FitnessGuru.png" />
                    <Card.Body>
                    <Card.Title><a href='https://rmanosalvas.github.io/Project1/'>Fitness Guru</a></Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>      
        </div>

    );
};

export default Project;

