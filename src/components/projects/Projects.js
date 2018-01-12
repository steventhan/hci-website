import React, { Component } from "react";

const getThumbnails = (image, size) => {
  let extIndx = image.lastIndexOf(".");
  let thumbnail = image.slice(0, extIndx) + size + image.slice(extIndx);
  return thumbnail;
};

class Project extends Component {
  render() {
    return (
      <div className="project">
        <h2>{this.props.project.title}</h2>
        <div className="description">
          <p dangerouslySetInnerHTML={{__html: this.props.project.body}}></p>
        </div>
        <h3>Sketches:</h3>
        <div className="sketches">
          {this.props.project.sketches.map((s, indx) => <a href={s}><img key={indx} src={getThumbnails(s, "m")}/></a>)}
        </div>
      </div>
    )
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = [
      {
        title: "1. TRACE review",
        sketches: [
          "https://i.imgur.com/crLWMCe.jpg",
          "https://i.imgur.com/kA9Sp6I.jpg",
          "https://i.imgur.com/suqyrQj.jpg",
          "https://i.imgur.com/CCuLlx5.jpg"
        ],
        body: "<p>All of us students have to pick classes at some point. For me, I’d like to always get my tuition worth. That is, the class should be manageable and the instructor should care enough and be passionate about what he/she teaches.</p> <p>Fortunately, we have TRACE to collect data on classes’ workloads and instructors’ performances. In my opinion, having TRACE is one of Northeastern’s biggest selling points. It takes a lot of the guesswork out of the registration process. However, the data representation is just horrendous. From my personal experience, I usually had at least 3 browser tabs for TRACE when I research for classes, so I strongly believe having a new UI and extra features such as statistical graphs, classes/instructors comparisons, instructors’ biographies would improve the experience tremendously.</p><p>Technologies: web stacks (ideally MEAN or MERN stack) because the data is already available on the web. In addition, javascript already has many nice data representation libraries that we can make use of.</p>"
      },
      {
        title: "2. Busy TA",
        sketches: [
          "https://i.imgur.com/JAAA1iB.jpg",
          "https://i.imgur.com/JxiP5Rv.jpg",
          "https://i.imgur.com/ytD9azJ.jpg",
        ],
        body: "<p>A mobile app to help facilitates a TA session. This app is especially useful for large classes with many TAs. Sometimes, there are too many students in the room, so coming to those sessions won&rsquo;t get you the answers to your questions. This app can have 2 versions, 1 for TA to open at the beginning of each session, and 1 for student to look up information.</p><p>For TA&rsquo;s version, the app can measure how busy a TA session can be by capturing the TA&rsquo;s movement (using data from accelerometer and GPS), number of unique voices in the room (natural languages processing of some sort). The TA can also set up a student waitlist with predetermined topic questions to group students together as the questions can be similar oftentimes.</p><p>For student version, he/she can view how busy a session can be and register for a TA&rsquo;s waitlist. If a student is planning to visit multiple TA sessions on the same day, the app should be able to sketch an optimal plan.</p><p>There isn&rsquo;t digital UI for this yet, so the only way to check if a TA is busy is to actually visit.</p><p>Technologies: Java or Swift since this is a mobile app and web app won&rsquo;t have access to accelerometer data if I remember correctly.</p>"
      },
      {
        title: "3. Boston sport field finder",
        sketches: [
          "https://i.imgur.com/XMHehFe.jpg",
          "https://i.imgur.com/Fzonmzd.jpg",
          "https://i.imgur.com/vA34K1g.jpg",
        ],
        body: "<p>A web app to find parks/gyms with a specific sport field. Let&rsquo;s say you are new to Boston and would like to play soccer, or basketball, or both but don&rsquo;t know where to go, the app might come in handy. Or perhaps you want to discover new sport, and like to see what Boston has to offer.</p><p>I&rsquo;m not aware of an app that already does this, so the fastest way to do this is to look for nearby parks and gyms and checkout their websites for available facilities.</p><p>Technologies: web stacks (ideally MEAN or MERN stack) because we&rsquo;ll need to make use of google map and its API to present field locations.</p>"
      }
    ];
  }

  render() {
    return (
      <section className="projects">
        <div style={{width: "80%"}}>
          {this.projects.map((p, indx) => <Project key={indx} project={p} />)}
        </div>
      </section>
    )
  }
}

export default Projects;
