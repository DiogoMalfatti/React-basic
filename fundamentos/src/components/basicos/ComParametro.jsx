function ComParametro (props) {

  const titulo = props.titulo;
  const subtitulo = props.subtitulo;
  
  return (
    <div>
      <h2>{ titulo }</h2>
      <h3>{ subtitulo }</h3>
    </div>
  )
}

export default ComParametro;