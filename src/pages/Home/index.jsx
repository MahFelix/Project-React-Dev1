import { useRef, useState} from 'react'
import {v4}from 'uuid'
import { Addbutton,Container, Product, TrashButton} from './styles'


function App() {
  const inputRef = useRef()
  const [products, setProducts ] = useState([])


  function deleteList(id) {
    setProducts(products.filter(produto => produto.id !== id) )/* Filtramos o produto para deletar um item pelo id */

  }

  function cliqueiNoBotao(){
    console.log(v4()) /* adcionamos apenas a VERSÃO DO uuid Que queremos usar */
    setProducts([
      {
        id: v4(),
        name:inputRef.current.value},...products ])
        inputRef.current.value = ''   /* serve para deixar o input limpo ao digitare */

  }

  return (
    <Container>
      <h1> Lista de Compras </h1>
      <input placeholder="produto..." ref={inputRef}></input>
      <Addbutton onClick={cliqueiNoBotao}> Adicionar </Addbutton>

      {

        products.map( produto =>(
          <Product key={produto.id}>
               <p >{produto.name}</p>
              <TrashButton onClick={() => deleteList(produto.id)} >🗑️</TrashButton>
         </Product>
        ))
      }

    </Container>
  )

}

export default App
