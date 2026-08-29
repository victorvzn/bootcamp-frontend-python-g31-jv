const API_URL = 'https://apibox.vercel.app/2aSCD2Sbz4kg4AcacfeJLMmalhKR3Xgs/api/corredores'

const cargarCorredores = async () => {
  const respuesta = await fetch(API_URL)

  const data = await respuesta.json()

  renderCorredores(data)
}

const renderCorredores = (corredores = []) => {
  // TODO: Mostrar los corredores usando la plantilla del li en el index.html
}

cargarCorredores()