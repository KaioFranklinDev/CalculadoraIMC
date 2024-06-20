/*import Buttons from "@/components/Buttons"
import TabelaUsers from "@/components/TabelaUsers"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function DadosIMC() {
    const router = useRouter()
    const { p_peso, p_altura, p_imc } = router.query
    const [peso, setPeso] = useState<any>(0)
    const [altura, setAltura] = useState<any>(0)
    const [IMC, setIMC] = useState<any>(0)
    const [nome, setNome] = useState<any>("")
    const [data, setData] = useState<any>(0)
    const [tabeladeUsuarios, setTabeladeUsuarios] = useState("")

    useEffect(() => {
        setPeso(p_peso)
        setAltura(p_altura)
        setIMC(p_imc)
        setData('2024-06-19')
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await fetch('https://nodestd.onrender.com/users');
            const users = await response.json();

            const tableIMC = users.map((e: any) =>(
                <TabelaUsers id={e.id} nome={e.nome} peso={e.peso} altura={e.altura} imc={e.imc} data={e.data} />
            ))

            setTabeladeUsuarios(tableIMC)

        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }

    }

    return (
        <div className="bg-slate-300 flex flex-col items-center">
            <div className="w-1/3 text-center ">
                <div className="campoform">
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="campoform">
                    <label>Peso</label>
                    <input type="text" value={peso} readOnly />
                </div>
                <div className="campoform">
                    <label>Altura</label>
                    <input type="text" value={altura} readOnly />
                </div>
                <div className="campoform">
                    <label>IMC</label>
                    <input type="text" value={IMC} readOnly />
                </div>
                <div className="campoform">
                    <label>Data</label>
                    <input type="text" value={data} readOnly />
                </div>
                <div className="campoform flex items-center">
                    <Buttons label="Gravar" funcBtn={()=>{}} />
                </div>
            </div>
            <div className="w-full flex flex-row bg-slate-500 text-white">
                <div className="w-1/5">Nome</div>
                <div className="w-1/5">Peso</div>
                <div className="w-1/5">Altura</div>
                <div className="w-1/5">IMC</div>
                <div className="w-1/5">Data</div>
            </div>
            {tabeladeUsuarios}
        </div>
    )
}*/

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { v4 as uuidv4 } from 'uuid'; // Importando o UUID corretamente
import FormComponent from "@/components/FormComponnets";
import UsersTable from "@/components/PreTabelaUsers";

export default function DadosIMC() {
  const router = useRouter();
  const { p_peso, p_altura, p_imc } = router.query;
  const [peso, setPeso] = useState<any>(0);
  const [altura, setAltura] = useState<any>(0);
  const [IMC, setIMC] = useState<any>(0);
  const [nome, setNome] = useState<string>("");
  const [data, setData] = useState<any>("2024-06-19");
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    setPeso(p_peso);
    setAltura(p_altura);
    setIMC(p_imc);
    fetchUsers();
  }, [p_peso, p_altura, p_imc]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://nodestd.onrender.com/users');
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const handleSave = async () => {
    const user = {
      id: uuidv4(), // Gerando um UUID único
      nome: nome,
      peso: peso,
      altura: altura,
      imc: IMC,
      data: new Date().toISOString().split('T')[0] // data atual no formato YYYY-MM-DD
    };

    try {
      const response = await fetch('https://nodestd.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        fetchUsers(); // Atualizar a lista de usuários após a gravação
      } else {
        console.log(user)
        console.error('Erro ao gravar usuário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao gravar usuário:', error);
    }
  };

  return (
    <div className="bg-slate-300 flex flex-col items-center">
      <FormComponent 
        nome={nome}
        peso={peso}
        altura={altura}
        IMC={IMC}
        data={data}
        onNomeChange={setNome}
        onSave={handleSave}
      />
      <UsersTable users={users} />
    </div>
  );
}
