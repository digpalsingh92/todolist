import TodoWeb from "../assets/TodoWeb.png";

const Home = ({ username, setUsername, setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Enter Your Name");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Background image layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${TodoWeb})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      ></div>

      {/* Blur overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(8px)",
          zIndex: 1,
        }}
      ></div>

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(128, 128, 128, 0.85)",
            width: "400px",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            gap: "10px",
          }}
        >
          <h4 style={{ textAlign: "center", color: "white", padding:'20px' }}>
            Welcome to RemeBrain!
          </h4>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            <input
              style={{
                padding: "10px",
                width: "80%",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Name"
              required
            />
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                backgroundColor: "#007BFF",
                color: "#fff",
                cursor: "pointer",
              }}
              type="submit"
            >
              Continue..
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
