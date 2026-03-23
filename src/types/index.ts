export interface User {
  id: string
  name: string
}

export interface Game {
  id: string
  date: string
  location: string
  created_by: string
}

export interface GamePlayer {
  id: string
  game_id: string
  user_id: string
  goals: number
  team: string
}