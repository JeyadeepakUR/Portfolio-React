import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const skills = [
    { img: meter1, title: "Web Development", proficiency: 90 },
    { img: meter2, title: "Machine Learning", proficiency: 75 },
    { img: meter3, title: "Data Analytics", proficiency: 80 },
    { img: meter1, title: "Python", proficiency: 85 },
    { img: meter2, title: "Django", proficiency: 70 },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Top Skills</h2>
              <p>Skills I have gained from various certifications, hackathons, and projects.</p>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img src={skill.img} alt={skill.title} />
                    <h5>{skill.title}</h5>
                    {/* <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.proficiency}%` }}
                        aria-valuenow={skill.proficiency}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {skill.proficiency}%
                      </div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
