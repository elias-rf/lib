import { emitter } from './emitter'
import React from 'react'

export const useEmitter = evento => {
  const [dados, setDados] = React.useState([])
  const [status, setStatus] = React.useState(0)
  const [erro, setErro] = React.useState(null)

  const getDados = (...args) => {
    setStatus([1])
    emitter.emit(evento, ...args)
  }

  React.useEffect(() => {
    return emitter.on(evento + '.pronto', ([dados, err]) => {
      if (err) {
        setErro(err)
      } else {
        setDados(dados)
      }
    })
  })

  return { dados, getDados, status, erro }
}
