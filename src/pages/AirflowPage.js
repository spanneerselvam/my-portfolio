import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Content from '../components/Content';

function AirflowPage(props){
return(

  <div>

          <Hero title="Airflow"/>
          <Content>
          <p>Airflow, Airbnb's brainchild, is a data orchestration tool that allows you to programmatically schedule jobs in order to extract, transform, or load (ETL) data. Since Airflow's workflows are written in Python as DAGs (Directed Acyclic Graphs) they allow for complex computation, scalability, and maintainability unlike cron jobs or other scheduling tools. Learning and implementing Airflow was an incredibly arduous journey since Airflow is relatively new. I had to figure out how deploy Airflow on a large scale (with the help of Kubernetes!) and develop an entirely automated system. </p>
          <p> After several months, I was finally able to successfully implement Airflow and taught my teammates all the interesting things (including Airflow, Docker, Kubernetes, and MORE) I learned! Here's just a taste of the five week course I designed :) I had a blast organizing, documenting, and sharing knowledge in a fun and understandable way. Also, my slides just so happen to be super cute ^^ </p>
          <p> My future plans are to release these workshops so stay tuned! </p>
          </Content>
          <Content>
          <p> <b> Day 1: </b> Getting Ready with Docker </p>
          <center>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSvjfaRA6Zpe5C2JhVnrzvzwQY02yIU6Chsfbse1ZtRCXrZVTnGtIo3oxA5z-dD9w/embed?start=false&loop=false&delayms=3000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </center>
          </Content>
          <Content>
          <p></p>
          <p> <b> Day 2: </b> Intro to Airflow and Graph Data Structures </p>
          <center>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS5eVNA5Z26Iy-jEZq9J3wHId-VGBXRdYBOxTVH4YMzIIC1xRMSLMS6s9RlPgN6Yw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </center>
          </Content>
          <Content>
          <p></p>
          <p> <b> Day 3: </b> More Airflow </p>
          <center>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSGruHokQYby4Sk-VzaxkvayYaf03f6skqI8407odLfTTk82IDRncJHLTY_w9ayqQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </center>
          </Content>
          <Content>
          <p></p>
          <p> <b> Writing DAGs 101 </b></p>
          <center>
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTnKGIzYdNyBp_ci88ZM_OIcYPBDGhRUDwtblcwZYmdSADvHLTszkjMYzfnBomMVQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>          </center>
          </Content>
      </div>

);
}
export default AirflowPage;
