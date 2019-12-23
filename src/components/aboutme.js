import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component {
    render(){
        return(
            <div style={{width: "100%", margin: 'auto'}} className="about-background-color">
            <Grid className="about-me-grid">
                <Cell col={12}>
                    <div className="about-me-text">
                        <h1>What is this website about?</h1>
                        <hr/>
                        <br/>
                        <p>
                        We represent an intuitive learning software which offers 
                        a complete learning experience that is fun, interactive, and ultimately engaging. 
                        This platform is an integrated set of interactive online services that provide trainers and
                        learners, involved in education with information, tools and resources to support and enhance 
                        education delivery and management. 
                        The reason why you're going to like using our platform is that  
                        becaue we offer an engaging, robust learning experience that 
                        feels like a classroom experience, offering the traditional classroom characteristics 
                        (like instructor-student interaction, Q&As, quizzes).
                        Just as there are many learning styles for different types of learners, 
                        the learning platform we present hosts different content formats to
                        address your specific learning styles. The content formats include PowerPoint presentations,
                        PDF and Word Document versions, it also includes content modules, learning modules 
                        and evaluation modules, all of which are Important Modules for an Efficient Learning experience. 
                        These modules allow for the training program to incorporate a variety of teaching styles
                        for every learner, and allows you to boost your performance level and knowledge-retention
                        levels.
                        </p>
                        <br/>
                        
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        
                        
                    </div>                
                </Cell>
            </Grid> 
            
        </div>
        )
    }
}

export default AboutMe;