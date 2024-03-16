import PlayersList from "./PlayersList";
import bg from "./Images/bg.jpg";
function App() {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bg})`,
          position: "relative",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <PlayersList />
      </section>
    </>
  );
}

export default App;
