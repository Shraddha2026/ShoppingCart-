export class Product {
 id: number;
 name: string;
 description: string;
 price: number;
 imageUrl: string;
  

 constructor(id, name, description ='' , price = 0, imageUrl='C:\Users\Shradha\Desktop\handmade.jpej.jfif'){
     this.id = id
     this.name = name
     this.description = description
     this.price = price
     this.imageUrl = imageUrl
    
    }
}
