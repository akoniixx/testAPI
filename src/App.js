import React,{Component} from 'react'
import styled from 'styled-components'

import Input from './Input'


const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`

class App extends Component {
  
 render(){
   return(
     <Layout>
       <Input/>
     </Layout>
     
   )
 }
}

export default App;
