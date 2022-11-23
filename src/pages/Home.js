import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Content>
        <div className="text-3xl font-bold underline">Home!</div>
        <div>
          <img src="/img/event/메인_1.jpg"></img>
          <img src="/img/event/메인_1.jpg"></img>
          <img src="/img/event/메인_1.jpg"></img>
          <img src="/img/event/메인_1.jpg"></img>
          <img src="/img/event/메인_1.jpg"></img>
        </div>
      </Content>
      <Footer />
    </>
  );
};

export default Home;
