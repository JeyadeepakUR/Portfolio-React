import { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 );
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Analyst", "ML Engineer", "UI/UX Designer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Building intelligent systems</span>
                <h1>{`Hi! I'm Jeyadeepak`}<br /> <span className="txt-rotate text-primary" dataPeriod="100" data-rotate='[ "Data Analyst, "ML engineer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>A passionate techie who wants to grow in the fields of ml, data analytics</p>
              </div>}
            </TrackVisibility>
          </Col>
      </Container>
    </section>
  )
}
