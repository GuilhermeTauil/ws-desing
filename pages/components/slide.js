import Carousel from "react-bootstrap/Carousel";
import styles from "../../styles/Slide.module.css";

function Slide() {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <Carousel variant="dark">
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              alt="Second slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              alt="Second slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.column}>
        <Carousel variant="dark">
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              alt="Second slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              alt="Second slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.column}>
        <Carousel variant="dark">
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              alt="Second slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              alt="Second slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={styles.column}>
        <Carousel variant="dark">
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              alt="Second slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="Third slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              alt="Second slide"
              src="https://i.postimg.cc/Znh1rYBc/How-To-Mud-Drywall.jpg"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slide;
