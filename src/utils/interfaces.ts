export interface IUsers {
  "id": number,
  "name": string,
  "age": number,
  "dev": string,
  "company": string,
  "years": number,
  "features": number[]
}

export interface ILogin {
  email: string,
  password: string
}

export interface IRow {
  "name": {
    "title": string,
    "first": string,
    "last": string
  },
  "email": string,
  "cell": string,
  "id": {
    "name": string,
    "value": string
  }
}

export interface IParticipant {
  name: string,
  email: string,
  cell: string,
  id: number,
}
