import styled from "styled-components";

function HomePage() {
  return (
    <HomePageStyle className="row vh-100 border">
      {/* Divide the pages into parts right and left */}
      <div className="col-lg-8 left-container"></div>
      <div className="col-lg-4 right-container"></div>
    </HomePageStyle>
  );
}

const HomePageStyle = styled.div`
  .right-container {
    background-color: #7b2cbf;
    position: relative;
  }
  .left-container {
    background-color: #000000;
  }
`;

export default HomePage;
