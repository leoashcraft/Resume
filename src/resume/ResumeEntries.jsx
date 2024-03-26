import Moment from 'moment';

let resumeData = {
  experience: [ 
    { title:'Software Developer (Full Stack)', 
    company:'Strategic Fulfillment Group', 
    location:'Big Sandy, TX', 
    start_date:'20220711', 
    end_date:'Present', 
    bullet_points:
      [
        'Piloted development team in creating partner data analytics portal. Leveraging PHP, JavaScript, DB2 SQL, CSS, as well as jQuery, AJAX, and APIs. Increased engagement by 30%.', 
        'Engaged in 100% of the Software Development Life Cycle (SDLC), adopting best practices and OWASP standards across coding, reviews, source version control (Git), builds, testing, and operations.', 
        'Enhanced software reliability and user experience (UX) by resolving bugs, reducing post-launch issues by 80%. Quality assurance streamlined development cycle for quicker feature delivery.',
        'Ported 30+ reports and pages from IBM's Net.Data to PHP/JavaScript, aligning with current web standards.'
      ]
    },
    { title:'Network Specialist II', 
    company:'Texas Health & Human Services', 
    location:'Terrell, TX', 
    start_date:'20170415', 
    end_date:'20220710', 
    bullet_points:
      [
        'Instituted and perpetuated a PHP/HTML/JS/CSS intranet resource hub for quick access to human resources information, event calendars, bulletin boards, and external resources reducing helpdesk calls by 15%.', 
        'Amplified process automation by crafting Power Scripts, dramatically reducing tasks by 50%, substantially enhancing efficiency, and securing significant time savings across numerous departmental operations.', 
        'Provided technical support for Windows OS, Office, Tableau, Power BI, and related tools with 98% satisfaction.'
      ]
    },
    { title:'Director of Operations & IT', 
    company:'Premier Eyecare', 
    location:'Lubbock, TX', 
    start_date:'20160115', 
    end_date:'20170414', 
    bullet_points:
      [
        'Engineered patient portal using PHP, JavaScript and SQL, streamlining data processing and replacing traditional paper forms. This resulted in a 60% reduction in workload and notably expedited intake.', 
        'Managed 12 - 15 Optometry Technicians, including training on the ophthalmic instruments.', 
        'Orchestrated quality assurance efforts by overseeing data entry, achieving 99.9% accuracy.',
        'Developed a recording solution designed to capture doctors\' verbal recordings for outsourced data entry.'
      ]
    },
    { title:'Director of IT Operations', 
    company:'GGIS, LTD, LLP.', 
    location:'Dallas, TX', 
    start_date:'20150115', 
    end_date:'20160114', 
    bullet_points:
      [
        'Designed and deployed 30+ paywall websites utilizing PHP, JavaScript, SQL, HTML, CSS and technologies.', 
        'Enhanced online visibility by assisting with SEO strategies, social media campaigns, and managing Google AdWords. These efforts resulted in a notable 40% surge in web traffic and a 20% increase in conversion rates.', 
        'Supervised 25 - 30 customer service representatives, as well as assisting in hiring and firing processes.',
        'Implemented a FreePBX solution on CentOS (Linux) for VOIP, IVR, SIP stations, with a 99.5% system uptime.'
      ]
    },
    { title:'Director of IT Operations', 
          company:'Lifespan Resources of Texas', 
          location:'Dallas, TX', 
          start_date:'20110115', 
          end_date:'20150114', 
          bullet_points:  
            [
              'Designed and launched educational WordPress websites for the Department of Aging and Disabilities (D.A.D.S.) Program, leading to increased government funding. This success secured additional community funding for group home acquisitions and rentals, and directly contributed to an immediate surge in intakes.',
              'Directed 20+ employees within community homes and corporate offices, providing technical training.',
              'Maintained VOIP, PBX, IVR, and numerous SIP stations, ensuring a robust communication infrastructure.'
            ]
    }
  ],
  summary: 'Detail-oriented developer with 5+ years of experience in web development and data science, currently part of SFG, a technology and operations solutions company. Driven by a passion for innovative web apps that utilize data analytics to address real-world problems.',
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
        start_date:'20200701', 
        end_date:'Present', 
        bullet_points:
          [
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
