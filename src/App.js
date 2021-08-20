import { useState } from "react";
import { message } from "statuses";
import { createMessage } from "./function";

function App() {
  const [message, setMessage] = useState ({
      name:"",
      email: "",
      phone: "",
      message: ""
    })
    
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createMessage(message);
    alert("Successful, your message has been sent.");
    setMessage({name: "", email: "", phone: "", message: ""});
    console.log(result);

    
  }
  return (
    <div className="App">
  <div className="resume_wrapper">
    <div className="resume_left">
      <div className="resume_image">
        <img src="./pic.jpg" alt="Resume_image" />
      </div>
      <div className="resume_bottom">
        <div className="resume_item resume_namerole">
          <div className="name">Oko-osi Korede</div>
          <div className="role">iOS Software Engineer</div>
        </div>
        <div className="resume_item resume_profile">
          <div className="resume_title">My profile</div>
          <div className="resume_info">
            I am a committed software engineer (iOS, React, &amp; NodeJS),
            and fully dedicated to developing software applications in the
            most efficient and productive approach.
          </div>
        </div>
        <div className="resume_item resume_address">
          <div className="resume_title">Address</div>
          <div className="resume_info">
            72, Oshundairo street,<br />
            Iyanapaja,<br />
            Lagos,<br />
            Nigeria.
          </div>
        </div>
        <div className="resume_item resume_contact">
          <div className="resume_title">Contact</div>
          <div className="resume_info">
            <div className="resume_subtitle">Phone Number</div>
            <div className="resume_subinfo">+23470899744988</div>
          </div>
          <div className="resume_info">
            <div className="resume_subtitle">Email</div>
            <div className="resume_subinfo">ibrakord4me@gmail.com</div>
          </div>
        </div>
        <div className="resume_item resume_skills">
          <div className="resume_title">Skills</div>
          <div className="resume_info">
            <div className="skills_list">
              <div className="skills_left">Swift</div>
              <div className="skills_bar">
                <p>
                  <span style={{width: '90%'}} />
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">NodeJS</div>
              <div className="skills_bar">
                <p>
                  <span style={{width: '87%'}} />
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">MVVM Arch.</div>
              <div className="skills_bar">
                <p>
                  <span style={{width: '90%'}} />
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">React</div>
              <div className="skills_bar">
                <p>
                  <span style={{width: '75%'}} />
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">Python</div>
              <div className="skills_bar">
                <p>
                  <span style={{width: '70%'}} />
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">JavaScript</div>
              <div className="skills_bar">
                <p>
                  <span style={{width: '90%'}} />
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">CSS</div>
              <div className="skills_bar">
                <p>
                  <span style={{width: '85%'}} />
                </p>
              </div>
            </div>
            <div className="skills_list">
              <div className="skills_left">HTML</div>
              <div className="skills_bar">
                <p>
                  <span style={{width: '95%'}} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="resume_right">
      <div className="resume_item resume_namerole">
        <div className="name">Oko-osi Korede</div>
        <div className="role">iOS Software Engineer</div>
      </div>
      <div className="resume_item resume_education">
        <div className="resume_title">Education</div>
        <div className="resume_info">
          <div className="resume_data">
            <div className="year">
              <p>YEAR</p><br />
              <p>2018 - 2020</p>
            </div>
            <div className="content">
              <p>INSTITUTE</p> <br />
              <p>
                BELLS UNIVERSITY OF TECHNOLOGY
              </p>
              <p>
                - Second Class Upper <br />
                - BTech
                (Degree in Computer Science).
              </p>
            </div>
          </div>
          <div className="resume_data">
            <div className="year">
              <p>2013 - 2015</p>
            </div>
            <div className="content">
              <p>
                YABA COLLEGE OF TECHNOLOGY
              </p>
              <p>
                - Upper Credit <br />
                - HND
                (Diploma in Computer Engineering).
              </p>
            </div>
          </div>
          <div className="resume_data">
            <div className="year">
              <p>2010 - 2011</p>
            </div>
            <div className="content">
              <p>
                YABA COLLEGE OF TECHNOLOGY
              </p>
              <p>
                - Upper Credit <br />
                - OND
                (Diploma in Computer Engineering).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="resume_item resume_experience">
        <div className="resume_title">Experience</div>
        <div className="resume_info">
          <div className="resume_data">
            <div className="year">
              <p>YEAR</p><br />
              2020 - PRESENT</div>
            <div className="content">
              <p>ORGANIZATION</p><br />
              <p>
                <b>DECAGON, LAGOS</b> — Software Engineer
              </p><br />
              --&gt; A member of a team that is developing a Food Ordering &amp; Delivery
              System
              <br />
              --&gt; Collaborated on all levels of Software Development Life Cycle, from
              Eliciting Requirements to Product Releases
              <br />--&gt; Exposure to Agile methodologies
              <br /> --&gt; Experience with swift basics, Networking, and GCD Queues
            </div>
          </div>
          <div className="resume_data">
            <div className="year">2020 - PRESENT</div>
            <div className="content">
              <p>
                <b>WESTERFIELD COLLEGE, LAGOS</b> — Technical Lead
              </p><br />
              --&gt; Coordinating and  teaching students (Website Authoring(HTML AND CSS), and Programming languages
              like JavaScript, and Python) in the classroom
              <br />
              --&gt; Giving classwork, assignments, and projects
              <br />--&gt; Computer Laboratory Management.
            </div>
          </div>
          <div className="resume_data">
            <div className="year">2019 - 2020</div>
            <div className="content">
              <p>
                <b>CAMBRIDGE COLLEGE, LAGOS</b> — Computer Science Lecturer
              </p><br />
              --&gt; Coordinating and  teaching students (Website Authoring(HTML AND CSS), and Programming languages
              like JavaScript, and Python) in the classroom
              <br />
              --&gt; Giving classwork, assignments, and projects
              <br />--&gt; Computer Laboratory Management.
            </div>
          </div>
        </div>
      </div>
      <div className="resume_item resume_contact">
        <div className="resume_title">Contact Me</div>
        <form action="/comment" method="post" onSubmit = {onSubmitHandler}>
          <div className="resume_data">
            <div className="form_field">
              <label htmlFor="name">Name:</label>
            </div>
            <div className="content">
              <p>
                <input type="text" name="name" id="name" placeholder="Enter your FullName..." 
                value={message.name} onChange={e => setMessage({...message, name: e.target.value})} required/>
              </p>
            </div>
          </div>
          <div className="resume_data">
            <div className="form_field">
              <label htmlFor="name">Email:</label>
            </div>
            <div className="content">
              <p>
                <input type="email" name="email" id="email" placeholder="Enter your Email..." 
                value={message.email} onChange={e => setMessage({...message, email: e.target.value})} required/>
              </p>
            </div>
          </div>
          <div className="resume_data">
            <div className="form_field">
              <label htmlFor="name">Phone No.:</label>
            </div>
            <div className="content">
              <p>
                <input type="number" name="phone" id="phone" placeholder="Enter your Phone Number..." 
                value={message.phone} onChange={e => setMessage({...message, phone: e.target.value})} required/>
              </p>
            </div>
          </div>
          <div className="resume_data">
            <div className="year">
              <label htmlFor="name">Message:</label>
            </div>
            <div className="content">
              <p>
                {/* <input type="text-area" name="message" id="message" placeholder="Enter your message..."> */}
                <textarea name="message" id="message" cols={30} rows={15} required placeholder="Enter your message here...." defaultValue={""} 
                value={message.message} onChange={e => setMessage({...message, message: e.target.value})}/>
              </p>
            </div>
          </div>
          <button className="btn">submit</button>
        </form>
      </div>
      <div className="resume_item resume_interests">
        <div className="resume_title">Interest</div>
        <div className="resume_info">
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-solid fa-chess" />
            </div>
            <div className="int_data">
              Chess
            </div>
          </div>
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-solid fa-film" />
            </div>
            <div className="int_data">
              movies
            </div>
          </div>
          <div className="interests">
            <div className="int_icon">
              <i className="fas fa-solid fa-code" />
            </div>
            <div className="int_data">
              Solving Problems
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
