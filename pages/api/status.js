function status (request, response) {
  response.status(200).json({ status: 'Esse curos é fora se série.' })
}

export default status