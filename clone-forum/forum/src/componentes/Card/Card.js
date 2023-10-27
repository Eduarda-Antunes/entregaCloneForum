import React, { useContext, useEffect, useState } from 'react';
import { ButtonCard, CardPost, CardStyle, ContainerCard, ContainerCardHome, ContainerPerfil, ConteudoCard, EditPost, ImgCard, ImgPost, MensagemCard, NomeCard, PerfilUsuario, TituloCard } from './style';
import { getPostAll } from '../../services/requests';
import Comentar from '../Comentar/Comentar';
import { GlobalStateContect } from '../../GlobalState/GlobalStateContext';

function Card() {

  const [loading, setLoading] = useState(true)
  const [forumTopics, setForumTopics] = useState([])

  const {selectedPostId} = useContext(GlobalStateContect)

  useEffect(()=>{
    getPostAll(setForumTopics)
  },[])
 
  return (
    <>
  {
    loading ?(
      <ContainerCard>
        {forumTopics && forumTopics.map(dado =>{
          return(
            <CardStyle key={dado.post.id}>
              <PerfilUsuario>
                <ImgCard src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fwallpaper-pink&psig=AOvVaw08HSMCRlsLO7cIZly8S1mU&ust=1698419582396000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjt65CAlIIDFQAAAAAdAAAAABAE'} />
              
              <ContainerPerfil>
                <NomeCard>{dado.creator_username}</NomeCard>
                <MensagemCard>{dado.post_created_at}</MensagemCard>
              </ContainerPerfil>
              </PerfilUsuario>
              <TituloCard>{dado.post_tittle}</TituloCard>
              <CardPost>
                <ImgPost src={dado.post_image} alt='foto post'/>
                <ConteudoCard>{dado.post_content}</ConteudoCard>
              </CardPost>
              <EditPost>
                <Comentar 
                  postId={dado.post_id}
                  comments={dado.comments}
                  autorId={dado.created_id}
                />
              </EditPost>
            </CardStyle>
          )
        })}
      </ContainerCard>
    ):(<p>Loading</p>)
  
  }
   


    </>
  )
}

export default Card