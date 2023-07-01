import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./BasicModel.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "#050c17",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ isOpen, modalHandler, stock }) {
  var colors = [
    "aqua",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "orange",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow",
  ];
  return (
    <Modal
      open={isOpen}
      onClose={modalHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <strong
            style={{
              color: `${colors[Math.floor(Math.random() * colors.length)]}`,
            }}
          >
            {stock?.stockinfo}
          </strong>
        </Typography>
        <div style={{ overflow: "scroll", height: 500 }}>
          <div>
            {/* {JSON.stringify(stock.stockhistory)} */}
            {stock?.stockhistory && (
              <div>
                {Object?.keys(stock.stockhistory)?.map((item, index) => {
                  return (
                    <div
                      className="modal"
                      key={index}
                    >
                      <div>
                        <div className="modal__card">
                          <p className="bold">Open:</p>
                          <p style={{ color: "#eddd4c" }}>
                            {stock?.stockhistory[`${item}`]["1. open"]}
                          </p>
                        </div>

                        <div className="modal__card">
                          <p className="bold">High:</p>
                          <p style={{ color: "#4df76f" }}>
                            {stock?.stockhistory[`${item}`]["2. high"]}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="modal__card">
                          <p className="bold">Low:</p>
                          <p style={{ color: "#eb0707" }}>
                            {stock?.stockhistory[`${item}`]["3. low"]}
                          </p>
                        </div>
                        <div className="modal__card">
                          <p className="bold">Close:</p>
                          <p style={{ color: "#db771f" }}>
                            {stock?.stockhistory[`${item}`]["4. close"]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
}