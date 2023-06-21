import { useRef, useState} from 'react'
import {v4}from 'uuid'
import { Addbutton,Container, Product, TrashButton, Command, ContainerButton} from './styles'


function App() {
  const inputRef = useRef()
  const [products, setProducts ] = useState([])
  const [opacity, setOpacity] = useState(1);



    const toggleOpacity = () => {
    setOpacity((prevOpacity) => (prevOpacity === 1 ? 0.5 : 1)); // Alterna entre 1 (100%) e 0.5 (50%)
  };




  function deleteList(id) {
    setProducts(products.filter(produto => produto.id !== id) )/* Filtramos o produto para deletar um item pelo id */



  }

  function cliqueiNoBotao(){
    console.log(v4()) /* adcionamos apenas a VERSÃO DO uuid Que queremos usar */
    setProducts([
      {


        id: v4(),
        opacity: "0.5",
        name:inputRef.current.value},...products ])
        inputRef.current.value = ''   /* serve para deixar o input limpo ao digitare */

      }

  return (
    <Container>
      <h1> Lista de Compras </h1>
      <input placeholder="produto..." ref={inputRef}></input>
      <Addbutton onClick={cliqueiNoBotao}> Adicionar </Addbutton>

{console.log(products.opacity)}

      {
        products.map( produto =>(
          <Product  style={{ opacity: opacity }}   key={produto.id}  >
               <p  >{produto.name}  </p>
               <ContainerButton>
                <Command onClick={() => toggleOpacity(produto.id)} > ✍️</Command>
              <TrashButton onClick={() => deleteList(produto.id)} >🗑️</TrashButton>
              </ContainerButton>

         </Product>
        ))
      }

    </Container>
  )

}

export default App

