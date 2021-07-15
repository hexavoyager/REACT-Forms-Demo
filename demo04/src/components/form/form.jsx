import style from "./form.module.css";
import { useState } from "react";

const regxNbPpl = /^[1-9][0-9]?$/;

const Form = (x) => {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [sex, setSex] = useState("N");
  const [numPpl, setNumPpl] = useState("1");
  const [txt, setTxt] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [newsOK, setNewsOK] = useState(false);

  const handleNumPpl = (e) => {
    const { value } = e.target;
    if (value === "" || regxNbPpl.test(value)) {
      setNumPpl(e.target.value);
    }
  };
  const handleCheckEmail = () => {
    const regxCheckMail = /^[a-z]+@[a-z]+\.[a-z]{2,3}$/i;
    setValidEmail(regxCheckMail.test(email));
  };
  const noEvent = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Form</h2>
      <form className={style.form}>
        <div>
          <label>Firstname</label>
          <input
            type="text"
            onChange={(e) => setFn(e.target.value)}
            value={fn}
          />
        </div>

        <div>
          <label>Lastname</label>
          <input
            type="text"
            onChange={(e) => setLn(e.target.value)}
            value={ln}
          />
        </div>

        <div>
          <label>Sex</label>
          <label>
            <input
              type="radio"
              checked={sex === "F"}
              onClick={() => setSex("F")}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              checked={sex === "M"}
              onClick={() => setSex("M")}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              checked={sex === "N"}
              onClick={() => setSex("N")}
            />
            Neutral
          </label>
        </div>

        <div>
          <label>Number of people</label>
          <input type="text" onChange={handleNumPpl} value={numPpl} />
        </div>

        <div>
          <label>Comments</label>
          <textarea onChange={(e) => setTxt(e.target.value)} value={txt} />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            onBlur={handleCheckEmail}
          />
          {!validEmail && <span>Email not valid!</span>}
        </div>

        <div>
          <label>Newsletter opt-in</label>
          <input
            type="checkbox"
            onChange={(e) => setNewsOK(e.target.checked)}
            checked={newsOK}
          />
        </div>

        <button type="submit" onClick={noEvent}>
          Send
        </button>
        <button type="reset" onClick={noEvent}>
          Reset
        </button>
      </form>

      <h2>Values</h2>
      <p>The values are: </p>
      <ul>
        <li>Firstname: {fn}</li>
        <li>Lastname: {ln}</li>
        <li>Sex: {sex}</li>
        <li>No. of people: {numPpl}</li>
        <li>Comments: {txt}</li>
        <li>Email: {email}</li>
        <li>Newsletter opt-in: {newsOK === true ? "Sure!" : ""}</li>
      </ul>
    </>
  );
};

export default Form;
