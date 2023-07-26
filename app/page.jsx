import Navbar from "./nav/Navbar";
import Projects from "./projects/projects";
import Footer from "./footer/Footer";

export default function Index() {
 return (
  <div className="index">
   <Navbar />
   <main>
    <div className="catcher-box">
     <div className="catcher">
      <h1 className="name">Brinkley Hill</h1>
      <div>
       <h2 className="desc">
        software <span className="tester-text">tester</span> & <span className="dev-text">developer</span>
       </h2>
      </div>
     </div>
    </div>
   </main>
   {/* <Projects />
      <Footer /> */}
  </div>
 );
}

{
 /* <div>
<h2>Career Objective</h2>
<p>
  Results-driven Quality Analyst Engineer with expertise in delivering high-quality UI and API automated testing. Seeking opportunities to
  advance my career as a Software Developer.
</p>
</div>

<div>
<h2>Work Experience</h2>
<h3>Software QA Engineer</h3>
<p>Liberty University, Lynchbrug, Virginia</p>
<p>Jul 2022 - Current</p>
<ul>
  <li>Conduct UI and API automated, manual regression, and end-to-end testing within an agile environment.</li>
  <li>Develop and maintain automated testing solutions using the Playwright framework.</li>
</ul>

<h3>IT Dev Apprentice</h3>
<p>Liberty University, Lynchburg, VA</p>
<p>Jan 2022 - Jul 2022</p>
<ul>
  <li>Performed manual testing of UIs and APIs in an agile environment.</li>
</ul>
</div>

<div>
<h2>Education</h2>
<h3>Information Technology: Web & Mobile Programming</h3>
<p>Liberty University, Lynchburg, VA</p>
<p>2020 - 2022</p>

<h3>General Studies</h3>
<p>Central Virginia Community College, Lynchburg, VA</p>
<p>Aug 2018 - May 2020</p>
</div>

<div>
<h2>Skills</h2>
<h3>Advanced:</h3>
<ul>
  <li>HTML, CSS, JavaScript, Typescript</li>
  <li>Playwright Automated Testing</li>
  <li>Postman, API Testing</li>
</ul>

<h3>Familiar:</h3>
<ul>
  <li>React, Angular, NextJS</li>
  <li>MongoDB, SQL</li>
  <li>Python, Java, C++</li>
</ul>
</div>

<div>
<h2>Projects</h2>

<h3>Discrr | Disc Ratings & Reviews</h3>
<p>
  <a href="https://discrr.com">discrr.com</a>
</p>
<p>Nov 2022 - Current</p>
<ul>
  <li>Developed a NextJS web app for users to search for PDGA approved discs and view reviews and ratings.</li>
  <li>
    Repo on <a href="https://github.com/brinkhill/discrr">Github</a>
  </li>
</ul>

<h3>Apex Collision Center</h3>
<p>
  <a href="https://apexcollisioncenters.com">apexcollisioncenters.com</a>
</p>
<p>Aug 2022 - Nov 2022</p>
<ul>
  <li>Built an Angular website for a client's auto collision center. Project is complete but still being maintained.</li>
</ul>

<h3>Covenant Community of Snowcreek</h3>
<p>
  <a href="https://covenantofsnowcreek.com">covenantofsnowcreek.com</a>
</p>
<p>Feb 2023 - Mar 2023</p>
<ul>
  <li>Developed an Angular website for a church. Project is complete but still being maintained.</li>
</ul>
</div> */
}
