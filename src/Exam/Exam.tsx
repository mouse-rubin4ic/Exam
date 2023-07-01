type Props = {};

const Exam = (props: Props) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our shop page</h1>
      <div style={{ display: "flex", paddingLeft: "645px" }}>
        <button>USD</button>
        <button>EUR</button>
        <button>UAN</button>
        <button>KZT</button>
      </div>
      <div style={{ display: "flex", paddingLeft: "480px" }}>
        <div>
          <h2 style={{ textAlign: "center" }}>iPhone 12</h2>
          <div style={{ textAlign: "center", fontSize: "20px" }}>
            This is iPhone 12....
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              paddingTop: "18px",
            }}
          >
            EUR <b>750</b>
          </div>
          <div style={{ textAlign: "center" }}>
            <button>Buy</button>
          </div>
        </div>

        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <h2 style={{ textAlign: "center" }}>iPhone 8</h2>
          <div style={{ textAlign: "center", fontSize: "20px" }}>
            This is iPhone 8....
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              paddingTop: "18px",
            }}
          >
            EUR <b>750</b>
          </div>
          <div style={{ textAlign: "center" }}>
            <button>Buy</button>
          </div>
        </div>
        <div>
          <h2 style={{ textAlign: "center" }}>iPhone X</h2>
          <div style={{ textAlign: "center", fontSize: "20px" }}>
            This is iPhone X....
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              paddingTop: "18px",
            }}
          >
            EUR <b>750</b>
          </div>
          <div style={{ textAlign: "center" }}>
            <button>Buy</button>
          </div>
        </div>
      </div>
      <div
        style={{ textAlign: "center", paddingTop: "15px", fontSize: "20px" }}
      >
        total : 2850
      </div>
    </>
  );
};
export default Exam;
