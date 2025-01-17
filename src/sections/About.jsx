import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' gonsalves.li@northeastern.edu');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  const handleMailTo = () => {
    window.location.href = 'mailto:gonsalves.li@northeastern.edu';
  };
  

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/me.jpeg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Livia Gonsalves</p>
              <p className="grid-subtext">
              I am a highly motivated and dedicated individual with a problem-solving mindset, a passion for staying updated with the latest technologies, and a desire to pursue a challenging career in software development engineering to enhance my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Boston, USA and open to work in USA .</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
  <div className="grid-container">
    <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
    
    <div>
      <p className="grid-headtext">Skills</p>
      <p className="grid-subtext">
        • <strong>Languages:</strong> JavaScript (ES5/ES6), Typescript, C#, C++, HTML, Python, JAVA, PHP, CSS(SASS/SCSS), .NET, XAML, JSON<br />
        • <strong>Frameworks:</strong> Node.js, Express.js, Vue.js, React.js, Flutter, AngularJS, Django, Ruby, Require.js, UWA, WebUI, Spring Boot<br />
        • <strong>Tools:</strong> Git, Jupyter Notebook, Android Studio, Eclipse, AWS, Azure, Google Cloud, Visual Studio, Docker, Jenkins, Kubernetes<br />
        • <strong>Skills:</strong> Front-end Development, Back-end Development, Full Stack Development, Agile Methodologies, Microservices, Service-Oriented Architecture (SOA), Cloud Infrastructure, REST API Development<br />
        • <strong>Testing:</strong> Jasmine, Karma, Unit Testing, Integrated Testing, Automated Testing, Test-Driven Development (TDD)<br />
        • <strong>Databases:</strong> Oracle, MySQL, MongoDB, Firebase, MS SQL, NuoDB<br />
        • <strong>Scripting:</strong> Bash, PowerShell, Perl<br />
        • <strong>Cloud:</strong> AWS, Azure, Google Cloud Platform, Docker, Kubernetes<br />
        • <strong>DevOps:</strong> CI/CD Pipelines, Infrastructure as Code (IaC), Monitoring and Logging (ELK, Prometheus, Grafana)
      </p>
    </div>
  </div>
</div>


        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleMailTo}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">gonsalves.li@northeastern.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
