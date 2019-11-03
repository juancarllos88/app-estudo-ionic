export interface Generic<T>{

  create(model: T)

  get(id: number)
  
  getAll()

  update(id: number, model: T)

  delete(id: number)
}