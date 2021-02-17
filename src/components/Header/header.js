import React from 'react';
import { BsPersonFill, BsHouseFill, BsPower } from 'react-icons/bs';
import { GoGear, GoSearch, GoThreeBars } from 'react-icons/go';
import { BiShieldQuarter } from 'react-icons/bi'
import './styles.css';

import symbol from '../../components/symbol.svg'

function addUser() {

}

export default function header() {
  return (
    <div>
      <div className="header">

        <div className="first">
        <button onClick={() => alert("ok")} className="buttonUser"><BsPersonFill color="#FFF" size={22} /></button>
          <button onClick={() => alert("ok")} className="shieldButtton"><BiShieldQuarter color="#656565" size={22} /></button>
          <button onClick={() => alert("ok")} className="buttonUser"><BsPersonFill color="#FFF" size={22} /></button>
          <div className="inputView">
            <input className="input" type="text" />
            <GoSearch onClick={() => alert("Hi")} className="lupa" size={22} />
          </div>
        </div>

        <div className="second">
          <button onClick={() => alert("Config")} className="shieldButtton"><GoThreeBars color="#656565" size={22} /></button>
          <button onClick={() => alert("Config")} className="buttonAddUser">  <h4 style={{ color: "#FFF" }}>Inserir usuário</h4> <BsPersonFill color="#FFF" size={22} /></button>
          <BsHouseFill className="marginButtons" size={22} />
          <GoGear className="marginButtons" size={22} />
          <BsPower className="marginButtons" size={22} />
        </div>


      </div>
    </div>
  );
}
