import Button from "./Button";
export default function NavBar() {
  return (
    <>
      <h2 className="logo">Byont</h2>
      <ul>
        <li>
          <a href="#">Who we are</a>
        </li>
        <li>
          <a href="#">The problems</a>
        </li>
        <li>
          <a href="#">Our services</a>
        </li>
        <a href="#">Testimonials</a>
      </ul>
      <Button></Button>
    </>
  );
}
