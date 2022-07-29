// import './App.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';

function App() {
  return (
    <div className="App">
      <div className="bs-ab-partner-development-program">
        <div className="container">
          <h1 className='bs-ab-heading'>partner development program</h1>
          <div className="bs-ab-row">
            <div className="bs-ab-col-1">
              <img className='bs-ab-image' src={image1} alt="" />
            </div>
            <div className="bs-ab-col-2">
              <p>Women of Africa has partnered with the following organisations to provide educational
                development programs, rehabilitation, and support services for women of Africa.
                We will continue to seek out other organisations with which we can partner to
                provide an ever-expanding range of offerings to needy women of Africa.</p>
            </div>
          </div>
          
          <div className="bs-ab-row-2">
            <div className="bs-ab-text">
              <p>1.	<span className='bs-ab-s-heading'>Multimedia design –</span>  The Advitech Group (CityVasity, Vega Institute, and Varsity College)
                for educational programs to further higher learning for design schools.</p>

              <p>2.	<span className='bs-ab-s-heading'>Culinary school -</span> CTIA chef schools throughout South Africa to empower both women and
                children so that they can get back into society independently and have practical
                work expereince to showcase their creativity and be equipped.</p>

              <p>3.	<span className='bs-ab-s-heading'>Computer literacy –</span> educating underprivileged children from the disadvantaged
                background through offering computer literacy (through donations) in schools throughout South Africa.</p>

              <p>4.	<span className='s-heading'>A day of pampering –</span>  We will orgaise pampering days across south Africa through out the year for underprivileged
                homeless and women and children (100) catered for a spa day, and yoga under the sun at the beach. </p>

              <p>5.	<span className='s-heading'>Boston Media College –</span> will offer women a opportunity to study a course of their own choosig at
                the college for a year as part of our rehailitation and empowermet program for women of Africa. </p>

            </div>
          </div>

          <div className="bs-ab-row">
            <div className="bs-ab-col-2">
              <p>As education is key to empowermet of women of Africa we will be offering a number of scholarships for a range of
                short and long courses, including degree courses, through partner universities and other educational organisactions,
                such as our great partners listed above.  </p>
                <button className='bs-ab-button'>Show Less</button>
            </div>
            <div className="bs-ab-col-1">
              <img className='bs-ab-image' src={image2} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;