import { Section, SectionText, SectionTitle} from '../../styles/GlobalComponents'; 
import React from 'react';
import Technologies from '../Technologies/Technologies';


const MyTech = () => {
  return (
    <Section>
      <Technologies style={{marginLeft:"80px"}}/>
      <Section style={{
        marginLeft:"80px",
        display:"flex",
    }}>
        <SectionTitle style={{marginBottom:"40px"}}>
          Languages & Frameworks
        </SectionTitle>
        <br/>
        <SectionText>  
          Java <br/> 
          I discovered Java in my second year at university where I explored data structures for the first time and the intricate details of coding logic and object-oriented programming. Delving into Java opened up a world of possibilities, allowing me to create robust and efficient applications while honing my problem-solving skills.
        </SectionText>
        <SectionText>
          C <br/>
          My introduction to C came during my studies in software systems at McGill University. Learning the fundamentals of C language provided me with a solid foundation in programming, emphasizing efficiency and low-level control. 
        </SectionText>
        <SectionText>
          Python <br/>
          My fascination with Python began as I delved into the realms of data science, AI, and development. Through certifications on platforms like LinkedIn and Coursera, I embraced Python's simplicity and power, leveraging its extensive libraries and frameworks for diverse applications. From data manipulation with Pandas to building machine learning models, Python remains my go-to language for tackling complex challenges in the tech world.
        </SectionText>
        <SectionText>
          HTML/CSS <br/>
          My journey with HTML and CSS began in high school when I embarked on my first web project—a Turtle-themed website inspired by the structure of Wikipedia. As I crafted pages with HTML and styled them with CSS, I discovered the art of creating visually appealing and functional web interfaces. 
        </SectionText>
        <SectionText>
          JavaScript <br/>
          Building upon my foundation in HTML and CSS, JavaScript became the next frontier in my exploration of web development. With JavaScript, I could breathe life into static web pages, adding interactivity and dynamic functionality. From manipulating the DOM to handling asynchronous operations, JavaScript empowered me to create engaging user experiences and responsive web applications.
        </SectionText>
        <SectionText>
          React <br/>
          Learning React was a turning point in my journey as a front-end developer. Its component-based architecture and declarative syntax revolutionized the way I approached building user interfaces. 
        </SectionText>
        <SectionText>
          Node.js <br/>
          My foray into back-end development led me to Node.js, a runtime environment for executing JavaScript code server-side. With Node.js, I found the flexibility to build scalable and high-performance server-side applications using JavaScript—a language I was already familiar with. 
        </SectionText>
        <SectionText>
          Next.js <br/> 
          My journey with Next.js began with a curiosity to explore the latest advancements in web development. Building upon my foundation in React, Next.js opened doors to server-side rendering and efficient client-side routing.
        </SectionText>
        <SectionText>
          With each programming language and technology, I've embraced new challenges and opportunities, continually expanding my skill set and deepening my passion for technology. As I navigate the ever-evolving landscape of software development, I remain committed to learning, innovating, and making meaningful contributions to the world of tech.
        </SectionText>
      </Section>
    </Section>
  )
}

export default MyTech;
