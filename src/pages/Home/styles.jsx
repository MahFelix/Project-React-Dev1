import styled from 'styled-components'

export const Addbutton = styled.button `
  background: green;
  width: 100px;
  color: black;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  height: 50px;

  &:hover {
    opacity: 0.8;
  }
`

export const Container = styled.div `
 width: 400px;

 background: #f52af5;
 padding: 20px;
 border-radius: 10px;

  h1 {
    color: white;
  }


input {
  width: 250px;
  height: 50px;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  margin-top: 30px;
  border: none;

}
`

export const Product = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: white;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0 10px;

  p{
    text-transform: capitalize;
    font-weight: bold;

  }

`

export const TrashButton = styled.button `
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;

`