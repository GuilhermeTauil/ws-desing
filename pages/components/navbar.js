import styles from "../../styles/navbar.module.css";
import Link from "next/link";

function nav() {
  return (
    <div className={styles.MainNav}>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link href="#incio">
              <img src="/ws_nobk.png" className={styles.GitImg} />
            </Link>
          </li>
          <li>
            <Link href="#incio">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="#sobre">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="#galeria">
              <a>Galeria</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default nav;
