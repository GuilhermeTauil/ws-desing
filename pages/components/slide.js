import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/Home.module.css";

function IndividualIntervalsExample() {
  return (
    <div className={styles.carroselmid}>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="img-thumbnail"
            alt="Second slide"
            src="https://i.postimg.cc/prY3kNKt/Drywall-Taping-Tips.jpg"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-thumbnail"
            alt="Third slide"
            src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="img-thumbnail"
            alt="Second slide"
            src="https://i.postimg.cc/rsnNqQkr/Drywall-Taping-Tips.jpg"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default IndividualIntervalsExample;
