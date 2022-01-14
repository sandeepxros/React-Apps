import Classes from "./TopBar.module.css";
import photo from "./../../assets/profileImg.jpg";

function TopBar() {
  return (
    <>
      <div className={Classes.TopBar}>
        <div className={Classes.TopBarItemOne}>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fab fa-pinterest-square"></i>
        </div>
        <div className={Classes.TopBarItem}>
          <ul className={Classes.menu}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Write</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className={Classes.TopBarItemThree}>
          <img src={photo} className={Classes.photoImg} />
          <i class="fas fa-search"></i>
        </div>
      </div>
    </>
  );
}
export default TopBar;
