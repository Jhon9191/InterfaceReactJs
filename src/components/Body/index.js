import React, { useState } from 'react';

import './styles.css';
export default function () {

    const [lista, setLista] = useState([
        { key: '1', nome: "João", email: 'joao@gmail.com', dataIncludao: '17/02/2021', dataAlteracao: '17/02/2021', regras: 2, status: "ativo" },
        { key: '2', nome: "Antônio", email: 'antonio@gmail.com', dataIncludao: '17/02/2021', dataAlteracao: '17/02/2021', regras: 2, status: "ativo" },
        { key: '3', nome: "Leonardo", email: 'leo@gmail.com', dataIncludao: '17/02/2021', dataAlteracao: '17/02/2021', regras: 2, status: "ativo" },
        { key: '4', nome: "Rafael", email: 'rafael@gmail.com', dataIncludao: '17/02/2021', dataAlteracao: '17/02/2021', regras: 2, status: "ativo" },
        { key: '5', nome: "Hellenice", email: 'helenice@gmail.com', dataIncludao: '17/02/2021', dataAlteracao: '17/02/2021', regras: 2, status: "ativo" },
        { key: '6', nome: "Rodrigo", email: 'rodrigo@gmail.com', dataIncludao: '17/02/2021', dataAlteracao: '17/02/2021', regras: 2, status: "ativo" },

    ]);

    const opcao = {
        backgroundColor: "#eaeaea"
    }

    return (
        <div className="card-home">

            <div className="row">

                <div className="topo">
                    <h4 className="item">USUÁRIO</h4>
                    <h4 className="item" >EMAIL</h4>
                    <h4 className="item">DATA DE CRIAÇÃO</h4>
                    <h4 className="item">DATA DE ALTERAÇÃO</h4>
                    <h4 className="item">REGRAS</h4>
                    <h4 className="item">STATUS</h4>
                </div>

                <div className="ALinhamento">
                    {lista.map(user => {
                        return (
                            <div className={` ${user.key % 2 == 1 ? "lista" : "lista2"}`}>
                                <h4 style={{ width: 20 }}>{user.nome}</h4>
                                <h4 style={{ width: 90 }} >{user.email}</h4>
                                <h4 style={{ width: 60 }} >{user.dataIncludao}</h4>
                                <h4 style={{ width: 40, marginLeft: 50 }}>{user.dataAlteracao}</h4>
                                <h4 style={{ width: 60, marginLeft: 100 }} >{user.regras}</h4>
                                <h4 className={`${user.status == "ativo" ? "verde" : "vermelho"}`}>{user.status}</h4>
                            </div>

                        );
                    })}
                    <div className="finalTable">
                        <div className="buttomC">
                            <h4 >Primeiro</h4>
                        </div>
                        <div className="buttomC">
                            <h4 >Anterior</h4>

                        </div>
                        <div className="number">

                            <h4 style={{color: '#FFF'}}>1</h4>
                        </div>
                        <div className="buttomC">

                            <h4 >Próximo</h4>
                        </div>
                        <div className="buttomC">
                            <h4 >Último</h4>

                        </div>
                       
                    </div>
                </div>

            </div>


        </div>
    );
}