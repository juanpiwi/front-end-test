import 'isomorphic-fetch'

const baseUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master'

const normalizeGnome = (data) => {
  const newGnome = {}

  newGnome.id = data.id
  newGnome.name = data.name
  newGnome.thumbnail = data.thumbnail
  newGnome.professions = data.professions
  newGnome.friends = data.friends
  newGnome.age = data.age
  newGnome.weight = data.weight
  newGnome.height = data.height
  newGnome.hairColor = data.hair_color

  return newGnome
}

async function getLatest() {
  const request = await fetch(`${baseUrl}/data.json`)
  const data = await request.json()
  const gnomes = data.Brastlewark.map((m) => normalizeGnome(m))

  return gnomes
}

async function getGnome(gnomeId) {
  const request = await fetch(`${baseUrl}/data.json`)
  const data = await request.json()
  if( ! data.Brastlewark ) return null
  const findGnome = data.Brastlewark.find(currGnome => currGnome.id === parseInt(gnomeId, 10))
  const gnome = normalizeGnome(findGnome)

  return gnome
}

export default {
  getLatest,
  getGnome
}