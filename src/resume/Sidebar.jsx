import Selfie from './sidebar/Selfie.jsx'
import About from './sidebar/About.jsx'
import Contact from './sidebar/Contact.jsx'
import Credly from './sidebar/Credly.jsx'
import credly from './assets/credly.webp';
import Download from './sidebar/Download.jsx'

const Sidebar = () => (
  <>
    <div id="sb-selfie">
      <Selfie     />
    </div>
    <div className="sb-bnr-title">About Me</div>
    <div className="sb-bnr-3d"></div>
    <div id="sb-about" className="sb-content">
      <About      />
    </div>
    <div className="sb-bnr-title">Contact Me</div>
    <div className="sb-bnr-3d"></div>
    <div id="sb-contact" className="sb-content">
      <Contact    />
    </div>
    <div className="sb-bnr-title"><img src={credly} alt="Credly" /></div>
    <div className="sb-bnr-3d"></div>
    <div id="sb-credly" className="sb-content">
      <Credly     />
      <div id="sb-credly-sub"></div>
    </div>
    <div className="sb-bnr-title">Download</div>
      <div className="sb-bnr-3d"></div>
      <div id="sb-download" className="sb-content">
      <Download   />
    </div>
  </>
)

export default Sidebar
