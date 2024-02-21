import Moment from 'moment';

let resumeData = {
  experience: [ 
    { title:'Software Engineer (Full Stack)', 
    company:'Strategic Fulfillment Group', 
    location:'Big Sandy, TX', 
    start_date:'20220711', 
    end_date:'Present', 
    bullet_points:
      [
        'Led the development team in creating a partner data analytics portal. Leveraged SQL, PHP, JavaScript, HTML5, and CSS3, as well as jQuery, AJAX, JSON, and APIs, for the new portal ported from IBM\'s Net.Data. The user interface redesign increased partner engagement by 30% and facilitated more informed, data-driven decision-making.', 
        'Collaborated with cross-functional teams to successfully deliver web apps for high-profile clientele on time and within budget, achieving a 95% customer satisfaction rate and strengthened partner relationships.', 
        'Proactively improved software reliability; evaluated and rectified software bugs; reduced post-launch issues; and led to enhanced UX.'
      ]
    },
    { title:'Network Specialist II', 
    company:'Texas Health & Human Services', 
    location:'Terrell, TX', 
    start_date:'20170415', 
    end_date:'20220710', 
    bullet_points:
      [
        'Initiated process automation efforts by creating a range of powerful PowerScript scripts that reduced time-consuming tasks by 50%, increased efficiency, and proved to deliver considerable time savings.', 
        'Provided technical support for Windows OS, Office, Tableau, Power BI, and related tools, empowering teams to fully utilize their capabilities.', 
        'Optimized data processing efficiency by applying Excel data formulas, reducing processing time and improving data accuracy.'
      ]
    },
    { title:'Director of Operations & IT', 
    company:'Premier Eyecare', 
    location:'Lubbock, TX', 
    start_date:'20160115', 
    end_date:'20170414', 
    bullet_points:
      [
        'Developed a patient portal with SQL, PHP, JavaScript, HTML, CSS, streamlining data processing and replacing paper forms, reducing administrative workload by 60% and speeding data retrieval.', 
        'Orchestrated quality assurance efforts by meticulously overseeing EHR data entry. Achieved a 99.9% accuracy rate. This contributed to improved patient care, reduced medical errors, and HIPAA compliance.', 
        'Developed a recording solution for capturing doctor\'s verbal recordings, enhancing data accessibility for outsourced data entry.'
      ]
    },
    { title:'Director of IT Operations', 
    company:'GGIS, LTD, LLP.', 
    location:'Dallas, TX', 
    start_date:'20150115', 
    end_date:'20160114', 
    bullet_points:
      [
        'Designed and maintained 30+ paywall websites utilizing SQL, PHP, JavaScript, HTML, and CSS. This effort resulted in increased sales conversions and facilitated the conversion to a full telework call center.', 
        'Enhanced online presence by assisting in SEO, social media, and AdWords. Increased web traffic by 40%; conversions rose by 20%.', 
        'Developed, managed, and secured VOIP PBX, IVR, payment merchant accounts, and dozens of remote SIP stations. Achieved 99.5% uptime.'
      ]
    },
    { title:'Director of IT Operations', 
          company:'Lifespan Resources of Texas', 
          location:'Dallas, TX', 
          start_date:'20110115', 
          end_date:'20150114', 
          bullet_points:  
            [
              'Created educational WordPress websites for the Department of Aging and Disabilities (D.A.D.S.) Program. This resulted in additional government funding, secured community funding for group home purchases and rentals, and an immediate growth in client intake.'
            ]
    }
  ],
  summary: 'A highly motivated and creative software developer with three years of experience in the field, showcasing strong proficiency in PHP, JavaScript, SQL, and Git, while maintaining a practical approach to problem-solving.',
  education: [
    { title:'Full Stack Web Development', 
        company:'+ Data Science [Boot Camp]', 
        location:'Coding Temple', 
        start_date:'20210601', 
        end_date:'20211130', 
        bullet_points:
          [
            'Gained a deep and proficient expertise in web development through the use of a varied tech stack, including JavaScript, TypeScript, React JS, Python, PHP, HTML5, CSS3, and more.',
            'Acquired advanced skills in Python-centric data science, including the sophisticated use of libraries such as Pandas and Matplotlib.', 
            'Developed multiple applications both solo and in collaborative mock team settings, utilizing a range of tools and technologies including Flask, React, APIs, Git, among others.'
          ]
      },
      { title:'Associate of Computer Science', 
        company:'Northeast Texas Community College', 
        location:'Remote', 
        start_date:'00200701', 
        end_date:'Present', 
        bullet_points:
          [
            'Gained a deep and proficient expertise in web development through the use of a varied tech stack, including JavaScript, TypeScript, React JS, Python, PHP, HTML5, CSS3, and more.',
            'Acquired advanced skills in Python-centric data science, including the sophisticated use of libraries such as Pandas and Matplotlib.', 
            'Developed multiple applications both solo and in collaborative mock team settings, utilizing a range of tools and technologies including Flask, React, APIs, Git, among others.'
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
            <div className='entry_dates'>
              {
              entry.end_date === 'Present' 
                ?  `${Moment(entry.start_date).format('MMM YYYY')} - Present`
                :  `${Moment(entry.start_date).format('MMM YYYY')} - ${Moment(entry.end_date).format('MMM YYYY')}`
              }
            </div>
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
            <div className='entry_dates'>
              {
              entry.end_date === 'Present' 
                ?  `${Moment(entry.start_date).format('MMM YYYY')} - Present`
                :  `${Moment(entry.start_date).format('MMM YYYY')} - ${Moment(entry.end_date).format('MMM YYYY')}`
              }
            </div>
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
