import { useRef, useState } from "react";
import logo from "../../img/logo.jpg";
import "./StartPage.css";
import "./CountryPicker.css";
import { countries } from "./countries";
import { groupedCountries } from "./countries";
import redo from "./arrow_down.svg";
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
  return (
    <div>
      <header>
        <img src={logo} />
      </header>
      <div className="start-page-main-content">
        <div>
          <p className="text-l">Let`s get started</p>
          <div className="start-page-form-part">
            <p className="text-m text-start-page">Enter your phone number</p>
            <div className="start-page-input-row">
              <button className="bt-choose-country" onClick={openModal}>
                <img
                  src={require(`./flags/${
                    country?.code ? country?.code.toLowerCase() : "us"
                  }.png`)}
                  height="10px"
                />
                <img src={redo} height="10px" style={{ marginLeft: "5px" }} />
              </button>

              <div
                style={{ width: "100%", position: "relative" }}
                className="input-block"
              >
                <span className="start-code">
                  {country?.dial_code ? country.dial_code : "+1"}
                </span>
                <input
                  type="tel"
                  className="input-number"
                  onChange={(e) => getNumber(e.currentTarget.value)}
                  value={number}
                />
              </div>
            </div>
            <button className="bt-add">Create account</button>
            <p className="text-s">
              By proceeding, you consent to get WhatsApp or SMS messages, from
              PhotoDrop and its affiliates to the number provided. Text “STOP”
              to 89203 to opt out.{" "}
            </p>
            <p className="text-s">
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
              <p>
                <img
                  src={require(`./flags/${country.code.toLowerCase()}.png`)}
                  height="13px"
                  style={{ marginRight: "15px" }}
                  alt={country.name}
                />
                {country.name}
              </p>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
};
