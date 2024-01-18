import kawasakiLogo from '../assets/Kawasaki-Logo.jpg'
import hondaLogo from '../assets/s-l1600.jpg'

function HomeLogoSelection() {

    return (
        <div className="flexbox">
        <a href="" target="_blank">
          <img src={hondaLogo} className="logo honda" alt="Vite logo" />
        </a>
        <a href="" target="_blank">
          <img src={kawasakiLogo} className="logo kawasaki" alt="React logo" />
        </a>
      </div>
    );

}

export default HomeLogoSelection;