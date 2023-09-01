import Moment from 'moment';

let resumeData = {
  experience: [ 
    { title:'Software Engineer (Full Stack)', 
    company:'Strategic Fulfillment Group', 
    location:'Big Sandy, TX', 
    start_date:'20220711', 
    end_date:'20230722', 
    bullet_points:
      [
        'Contribute to development of a partner data analytics portal.', 
        'Utilizing SQL, PHP, JavaScript, HTML5, Bootstrap, and CSS3.', 
        'Proactively evaluate and test software while rectifying bugs.', 
        'Collaborate with team to develop various partner web apps.'
      ]
    },
    { title:'Network Specialist II', 
    company:'Texas Health & Human Services', 
    location:'Terrell, TX', 
    start_date:'20170415', 
    end_date:'20220710', 
    bullet_points:
      [
        'Process data with Excel data transformation formulae/methods.', 
        'Write various powerscripts and batch scripts for automations.', 
        'Utilize VBA to design Excel documents with permission levels.', 
        'Provide end-user techical support for Tableau, Power BI, etc.'
      ]
    },
    { title:'Director of Operations & IT', 
    company:'Premier Eyecare', 
    location:'Lubbock, TX', 
    start_date:'20160115', 
    end_date:'20170414', 
    bullet_points:
      [
        'Develop patient portal to process data, replacing physical forms.', 
        'Design wireless solutions for storing/sending verbal recordings.', 
        'Drive Q.A. Dept by overseeing EHR data entry, ensuring accuracy.'
      ]
    },
    { title:'Director of IT Operations', 
    company:'GGIS, LTD, LLP.', 
    location:'Dallas, TX', 
    start_date:'20150115', 
    end_date:'20160114', 
    bullet_points:
      [
        'Design and maintain 30+ paywall PHP/JS/HTML/CSS websites.', 
        'Assist with social media optimization and AdWords campaigns.', 
        'Manage and secure VOIP, PBX, IVR and dozens of SIP stations.'
      ]
    },
    { title:'Director of IT Operations', 
          company:'Lifespan Resources of Texas', 
          location:'Dallas, TX', 
          start_date:'20110115', 
          end_date:'20150114', 
          bullet_points:  
            [
              'Design educational WordPress websites for D.A.D.S. Program.', 
              'Deploy and secure FreePBX VOIP and IVR on CentOS Linux.', 
              'Run and terminate network drops and BNC cables for CCTV.'
            ]
    }
  ],
  summary: 'Highly motivated Software Developer located in the Dallas–Fort Worth metro-plex endeavors to illuminate mundane tasks, infusing them with ingenuity and automation through astute and visionary methodologies paired with a pursuit of knowledge.',
  education: [
    { title:'Full Stack Web Development', 
          company:'+ Data Science [Boot Camp]', 
          location:'Coding Temple', 
          start_date:'20210601', 
          end_date:'20211130', 
          bullet_points:
            [
              'Acquired a comprehensive understanding and adeptness in web development utilizing a diverse tech stack including PostgreSQL, React, Javascript, TypeScript, Python, PHP, HTML, CSS and more.',
              'Developed expertise in Python-centric data science, including advanced utilization of libraries such as Pandas and Matplotlib.', 
              'Built several applications independently and in team settings using languages and technologies such as Flask, APIs, Git and more.'
            ]
        }
      ],
  contact:  [
    {fa:'fa',     icon:'map-pin',   info:'Dallas - Forth Worth',    link:''},
    {fa:'fa',     icon:'phone',     info:'(903) 638 - 4782',        link:'tel:+19036384782'},
    {fa:'fa',     icon:'envelope',  info:'leo@ashcraft.tech',       link:'mailto:leo@ashcraft.tech'},
    {fa:'fa',     icon:'globe',     info:'www.ashcraft.tech',       link:'https://ashcraft.tech'},
    {fa:'fa-br',  icon:'linkedin',  info:'linkedin.com/in/leo3',    link:'https://www.linkedin.com/in/leo3'},
    {fa:'fa-br',  icon:'github',    info:'github.com/leoashcraft',  link:'https://github.com/leoashcraft'}
  ]
};
const ResumeEntries = () => {
  return (
    <div className="entries">
      <h1>Experience</h1>
      {resumeData.experience.map((entry, index) => (
        <div className="entry">
          <div className="entry_header">
            <div className='entry_title'>{entry.title}</div>
            <div className='entry_dates'>{Moment(entry.start_date).format('MMM YYYY')} - {Moment(entry.end_date).format('MMM YYYY')}</div>
            <div className='entry_company '>{entry.company}</div> 
          </div>
            <div className='bullet_points clearfix'>
              <ul>
                {entry.bullet_points.map((bullets) => {
                  return (
                    <li>{bullets}</li>
                  );
                })}
              </ul>
            </div>
        </div>
      ))}
      <h1>Education</h1>
      {resumeData.education.map((entry, index) => (
        <div className="entry">
          <div className="entry_header">
            <div className='entry_title'>{entry.title}</div>
            <div className='entry_dates'>{Moment(entry.start_date).format('MMM YYYY')} - {Moment(entry.end_date).format('MMM YYYY')}</div>
            <div className='entry_company'>{entry.company}</div>
            <div className='location'></div>
          </div>
          <div className='bullet_points clearfix'>
            <ul>
              {entry.bullet_points.map((bullets) => {
                return (
                  <li>{bullets}</li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  
  );
}

export default ResumeEntries
