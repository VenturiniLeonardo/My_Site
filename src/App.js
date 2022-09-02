import photoMe from './profile.jpg';
import logoGit from './logoGit.png';
import logoLink from './logoLink.svg';
import './App.css';
import Formation from './formation.json';
import Experience from './experience.json';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="mx-auto mt-5 w-75 p-3 pt-5" >
        <TitlePage />
        <ContAbout />
        <ContExp />
        <ContFormation />
        <ContContact />
      </div>
      <Footer />
    </div>
    
  );
}

const NavBar = () =>{
  const linkGit = "https://github.com/VenturiniLeonardo";
  const linkLink = "https://www.linkedin.com/in/leonardo-venturini-9ab170211/";

  return (
    <>
    <nav className="navbar fixed-top bg-light d-block pb-0">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Leonardo Venturini</span>
        <div className="d-flex">
          <ItemBar link={linkLink} logo={logoLink} />
          <ItemBar link={linkGit} logo={logoGit} />
        </div>
      </div>
    </nav>
    </>
  );
}

const ItemBar = (props) =>{
  return (
    <a className="navbar-brand " href={props.link} reel="noopener" target="_blanck">
    <img src={props.logo} alt={props.name} className="img-fluid " width="35px"/>
    </a>
  );
}



const TitlePage = () =>{
  return (
    <div className="container-lg">
      <img src={photoMe} alt="" className="MainPhoto rounded-5" />
      <h1 className="text-white p-4"> Leonardo Venturini</h1>
    </div>
  );
}

const ContAbout = () =>{
  return (
    <div className="mt-2 col-md-12 bg-white rounded-4 container-lg text-start">
      <div className="p-4">
        <h2>About Me</h2>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, lorem non hendrerit gravida, tellus diam posuere justo, ac pretium risus arcu quis sem. Maecenas pretium tortor eget finibus scelerisque. Suspendisse potenti. Nunc vestibulum congue porta. Nam consequat purus eu mauris faucibus, vitae suscipit lorem porta. Pellentesque sed nisi id felis faucibus vulputate congue sit amet enim. Donec eu risus finibus, faucibus sem vitae, viverra purus. In placerat leo vitae ex maximus, ac malesuada augue ornare. Proin nec egestas lacus, ac fermentum sem. Ut viverra dignissim imperdiet. Donec rutrum purus quis ullamcorper porta. Sed cursus viverra ipsum et tincidunt. Aenean ultrices, lacus vitae egestas cursus, augue ex mattis sapien, ac viverra dolor quam sed turpis. Vivamus vitae massa mauris. Pellentesque commodo bibendum ipsum ac fringilla.
        Sed a risus et sem tincidunt ultricies. Vivamus facilisis quis nisi nec sagittis. Vivamus aliquam, nibh quis pharetra tempus, orci purus iaculis tellus, pellentesque varius ante tellus non diam. Suspendisse faucibus condimentum lectus et maximus. Proin a semper nulla, vel venenatis metus. Aliquam ac ultricies lacus, eu blandit arcu. Sed sollicitudin, tellus non dignissim posuere, tellus nunc maximus purus, sit amet placerat ligula orci ac nisl. Duis eu neque sit amet tellus maximus viverra in.</p>
      
      </div>
    </div>

  )
}

const ContExp = () =>{
  return (
    <div className="mt-3 bg-white rounded-4 container-lg text-start">
      <div className="p-4">
        <h2>Experience</h2>
        <ul>
          {
            Experience.map(record => {
              return(
                <li><span className="fw-bold">{record.Title} - {record.Company}</span>
                <span className="d-block">{record.Start} {record.End ? (<> - {record.End}</>) : (<></>)}, {record.Place}</span>
                <span className="d-block">{record.Description}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  ) 
}

const ContFormation = () => {
  return (
    <div className="mt-3 bg-white rounded-4 container-lg text-start">
      <div className="p-4">
        <h2>Education</h2>
        <ul>
          {
            Formation.map(record => {
              return(
                <li><span className="fw-bold">{record.Title} - {record.School}</span>
                <span className="d-block">{record.Start} {record.End ? (<> - {record.End}</>) : (<></>)}, {record.Place}</span>
                {record.Mark ? (<><span className="d-block">Mark: {record.Mark}</span></>) : (<></>) }
                <span className="d-block">{record.Description}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>

  )
}

const ContContact = () =>{
  return (
    <div class=" container text-center">
      <div class="row ">
        <div class="col mt-3">
          <div class="p-4 rounded-4 bg-white">
            <h4>ADDRESS</h4>
            Treviso, Italy
          </div>
        </div>
        <div class="col mt-3">
          <div class="p-4 rounded-4 bg-white">
              <h4>EMAIL</h4>
              venturini.leonardo.51@gmail.com
          </div>
        </div>
      </div>
    </div>    
  )
}


const Footer = () =>{
  return (
    <footer>
        <div class="text-center p-1 mt-3 bg-light">© leonardoventurini</div>
    </footer>
  )
}
export default App;
