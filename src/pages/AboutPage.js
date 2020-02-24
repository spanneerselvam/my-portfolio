import React from 'react';
import Hero from '../components/Hero';
import Picture from '../components/Picture';
import Content from '../components/Content';
function AboutPage(props){
return(

  <div>

          <Hero title={props.title} subTitle='Encourage. Empower. Endure.' />
          <Picture />
          <Content>
          <p></p>
          <p>Hey Beautiful People! </p>
          <p>My name is Saigopini Panneerselvam, but I go by Sai (pronounced like "sigh"). I grew up in the Bay Area and graduated from Santa Clara University, double-majoring in mathematics and computer science. It was hard being one of the only women in most of my classes but regardless,
          I kept my head up and discovered my passion for STEM during a hackathon held at my university. My friends and I created a platform that connects homeless shelters to restaurants in order to feed hungry bellies sustainably by cutting down food waste.
          It was then when I realized the instant gratification that comes from computer science and the power of technology to help our fellow human beings.
          I didn't have any web development experience but in those 24 hours, I was able to contribute to something beautiful.
          My love for STEM continued to flourish by working at a healthcare company with a mission that I'm incredibly passionate about straight out of college.
          It was here that I stumbled into the field of data science and engineering. </p>
          <p>I try to live everyday with a growth mindset: taking everything that life throws my way as a learning opportunity which has helped me be more resilient and positive. I want to help empower other women to pursue careers in STEM so that they don't face the sexism and challenges
          that so many others and I endure. From my experiences, I now mentor high school girls in coding and encourage them to pursue their
          dreams even when it can be scary.
          I hope to use this platform to share what I've learned and inspire others to Encourage, Empower and Endure. </p>
          <p> In my free time, I love to hang out with my family and friends, go on adventures with my dog named Merlin (he's a Border Collie-Lab mix we adopted), work out, solo travel, write (currently working on a secret project!), and volunteer. You can take a look at my projects
          just like this website down below on my GitHub or connect with me through LinkedIn. I'm excited to continue to learn and hear from all of you :)  </p>
          </Content>
      </div>

);
}
export default AboutPage;
