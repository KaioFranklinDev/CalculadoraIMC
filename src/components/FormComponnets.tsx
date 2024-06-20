import React from "react";
import Buttons from "@/components/Buttons";

interface FormProps {
  nome: string;
  peso: any;
  altura: any;
  IMC: any;
  data: any;
  onNomeChange: (nome: string) => void;
  onSave: () => void;
}

const FormComponent: React.FC<FormProps> = ({ nome, peso, altura, IMC, data, onNomeChange, onSave }) => {
  return (
    <div className="w-1/3 text-center ">
      <div className="campoform">
        <label>Nome</label>
        <input type="text" value={nome} onChange={(e) => onNomeChange(e.target.value)} />
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
        <Buttons label="Gravar" funcBtn={onSave} />
      </div>
    </div>
  );
};

export default FormComponent;