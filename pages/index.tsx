import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Home() {
  const[nome, setNome] = useState('')
  const[username, setUsername] = useState('')
  const[password, setPassword]= useState('')
  const router = useRouter()
  const handleSubmit = (event)=>{
    event.preventDefault()
    axios.post('api/signup', {
      nome,username,password
    }).then((data)=>{
      if(data.status===200){
        alert('Usuário criado com sucesso!')
        router.reload(window.location.pathname)
    }
    })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.signup}>
    <h1>Criar Conta</h1>

<form onSubmit={handleSubmit}>
<input value={nome} onChange={(e)=>{setNome(e.target.value)}} className={styles.input} placeholder="Nome"></input>
    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} className={styles.input} placeholder="E-mail"></input>
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className={styles.input} placeholder="Senha" type="password"></input>
    <label htmlFor="check">Aceitar termos e condições</label>
    <input type="checkbox" name="check" className={styles.check}></input>
    <button type="submit">Cadastrar</button>
</form>
   
    </div>

    <div className={styles.logo}>
    <img src="/fundo.jpg"></img>
    </div>

    </div>
  )
}

