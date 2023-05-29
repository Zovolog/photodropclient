import { useRef, useState } from "react";
import logo from "../../img/logo.jpg";
import arrow from "../../img/arrow.png";
import usFlag from "../../img/us.png";
import "./StartPage.css";
import "./CountryPicker.css";
import { countries } from "./countries";
import { groupedCountries } from "./countries";
interface country {
  dial_code: string;
  code: string;
}
export const StartPage: React.FC = () => {
  const [number, getNumber] = useState<string>("");
  const [countryList, getCountryList] = useState(countries);
  const [country, getCountry] = useState<country | null>(null);
  const modal = useRef<HTMLDialogElement>(null);

  const alphabet: string[] = Object.keys(groupedCountries).sort();
  const openModal = () => {
    modal.current?.showModal();
  };
  const closeModal = () => {
    modal.current?.close();
  };
  const setList = (letter: string) => {
    getCountryList(groupedCountries[letter]);
  };
  const handleInputChange = (e: any) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");
    const dashIndex = value.indexOf("-");
    const spaceIndex = value.indexOf(" ");
    if (value.length >= 1) {
      value = `(${value}`;
    }
    if (value.length >= 4) {
      value = `${value.slice(0, 4)}) ${value.slice(4)}`;
    }

    if (value.length >= 9) {
      value = `${value.slice(0, 9)}-${value.slice(9)}`;
    }

    if (value.length >= 14) {
      value = `${value.slice(0, 14)}-${value.slice(14)}`;
    }

    if (value.length > 14) {
      value = value.slice(0, 14);
    }

    if (
      e.target.selectionStart <= dashIndex ||
      e.target.selectionStart <= spaceIndex ||
      value.charAt(e.target.selectionStart - 1) === "(" ||
      value.charAt(e.target.selectionStart - 1) === ")" ||
      value.charAt(e.target.selectionStart - 1) === "-" ||
      value.charAt(e.target.selectionStart - 1) === " "
    ) {
      value = value.replace(/[-()\s]/g, "");

      getNumber(value);
    }
    getNumber(value);
  };
  return (
    <div>
      <header>
        <img src={logo} />
      </header>
      <div className="start-page-main-content">
        <div>
          <p className="text-l">Let`s get started</p>
          <div className="start-page-form-part">
            <p
              className="text-m text-start-page"
              style={{ marginBottom: "20px" }}
            >
              Enter your phone number
            </p>
            <div className="start-page-input-row">
              <button className="bt-choose-country" onClick={openModal}>
                <img
                  src={
                    country?.code
                      ? require(`./flags/${country?.code.toLowerCase()}.svg`)
                      : usFlag
                  }
                  height="25px"
                  width="95%"
                  style={{ background: "none" }}
                />
                <img src={arrow} height="6.5px" style={{ marginLeft: "8px" }} />
              </button>

              <div className="input-block">
                <span className="start-code">
                  {country?.dial_code ? country.dial_code : "+1"}
                </span>
                <input
                  className="input-number"
                  type="text"
                  value={number}
                  onChange={handleInputChange}
                  maxLength={17}
                  pattern="\d*"
                />
              </div>
            </div>
            <button className="bt-add">Create account</button>
            <p className="text-s" style={{ marginTop: "20px" }}>
              By proceeding, you consent to get WhatsApp or SMS messages, from
              PhotoDrop and its affiliates to the number provided. Text “STOP”
              to 89203 to opt out.{" "}
            </p>
            <p className="text-s" style={{ marginTop: "38px" }}>
              By continuing, you indicate that you have read and agree to our
              Terms of Use & Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <dialog className="country-list-modal" ref={modal}>
        <div className="alphabet-list">
          {alphabet.map((letter: string, index: number) => (
            <button
              onClick={() => setList(letter)}
              key={index}
              className="letter-bt"
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="country-picker-header">
          <p className="country-header-main-text">Select country</p>
          <button className="country-close-bt" onClick={closeModal}>
            Close
          </button>
        </div>
        <div className="country-list">
          {countryList.map((country: any) => (
            <div
              className="country-list-item"
              key={country.code}
              tabIndex={1}
              onClick={() => {
                getCountry(country);
                closeModal();
              }}
            >
              <img
                src={require(`./flags/${country.code.toLowerCase()}.svg`)}
                height="13px"
                style={{ marginRight: "15px" }}
                alt={country.name}
              />
              <p>{country.name}</p>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
};
