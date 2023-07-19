export interface AllPokemonResponse {
  count: number
  next: string
  previous: null
  results: Result[]
}

export interface GeneralPokemon {
  name: string
  url: string
}
