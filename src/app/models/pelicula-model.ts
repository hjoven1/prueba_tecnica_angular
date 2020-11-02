
export class PeliculaModel {
    public id: String
    public name: String
    public description: String
    public image: String

    constructor(id,name,description,image){
        this.id = id
        this.name = name
        this.description = description
        this.image = image
    }
}