import QRCode from "qrcode";
import { useState } from "react";
import "./style.css";

const QrCode = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 300,
        margin: 2,
        color: {
          dark: "",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <>
      <h1 className="mainHeading">QR CODE GENERATOR</h1>
      <div className="qrcode_container">
        <div>
          <input
            type="text"
            className="urlInput"
            placeholder="e.g. https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="gradientBtn" onClick={GenerateQRCode}>Generate</button>
          {qr && (
            <div className="qrcode_canvas">
              <img src={qr} className="qrcode_finalImage" alt="qrcode"/>
              <a className="gradientBtn downloadBtn" href={qr} download="qrcode.png">
                Download
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QrCode;
