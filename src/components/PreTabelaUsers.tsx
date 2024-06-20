import React from "react";
import TabelaUsers from "./TabelaUsers";


interface User {
  nome: string;
  peso: any;
  altura: any;
  imc: any;
  data: any;
}

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <>
      <div className="w-full flex flex-row bg-slate-500 text-white">
        <div className="w-1/5">Nome</div>
        <div className="w-1/5">Peso</div>
        <div className="w-1/5">Altura</div>
        <div className="w-1/5">IMC</div>
        <div className="w-1/5">Data</div>
      </div>
      {users.map((user, index) => (
        <TabelaUsers key={index} id={index} nome={user.nome} peso={user.peso} altura={user.altura} imc={user.imc} data={user.data} />
      ))}
    </>
  );
};

export default UsersTable;
