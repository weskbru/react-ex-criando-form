import react ,{useState } from "react";
type ChangeEvent = react.ChangeEvent<HTMLInputElement>


const App = () => {
  const [nome , setNome] = useState('')
  const [sobrenome , setSobreNome] = useState('')
  const [idade , setIdade] = useState('')

  const changeName = (event:ChangeEvent) => {
    setNome(event.target.value)
  }

  const changeSobreNome = (event: ChangeEvent) => {
    setSobreNome(event.target.value)
  }

  const changeIdade = (event: ChangeEvent) => {
    setIdade(event.target.value)
  }


  return (
    <>
      <div>
        Nome:
        <input type="text" value={nome} onChange={changeName}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={changeSobreNome}/>
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={changeIdade}/>
      </div>

      <hr/>

      <p>Olá {`${nome} ${sobrenome}`}, tudo bem?<br/>
      Você tem {idade} anos.
      </p>
    </>
  );
}

export default App;