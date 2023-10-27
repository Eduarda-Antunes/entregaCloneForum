import React, { useState } from "react";
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import { ButtonStyle, ContainerCriarPost, FormStyle, InputStyle, TextareaStyle } from "./styles";
import Historicos from "../../componentes/Historicos/Historicos";
import { createPost } from "../../services/requests";
import { useVerificarToken } from "../../hooks/useverificarToken";

const CriarPost = () => {
   const [tittle, setTittle] = useState('')
   const [content, setContent] = useState ('')
   const [image, setImage] = useState("")
   const [hashtag, setHashtag] = useState("")

   const criarPostApi = async(e)=>{
    e.preventDefault()
    if(!tittle || !content){
      alert("Título e conteúdo são campos obrigatórios")
    }

    const hashtagArray = hashtag.split(",")

    await createPost(tittle, content, image, hashtagArray)
    .then((response)=>{
      console.log("Post criado com sucesso", response)
    })
    .catch((error)=>{
      console.log("Erro ao criar post:", error)
    })
   }

   useVerificarToken()

  return (
   <>
   criarpost
   </>
  );
};

export default CriarPost;
