import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { find } from 'rxjs/internal/operators/find';
import axios from 'axios';
import { SendMailDto } from './mail/dto/send-mail.dto';

@Injectable()
export class AppService {
  private products: ProductDto[] = [
    { id: 1, 
      name: 'Laptop', 
      price: 10.99, 
      stock: 100 },

     { id: 2, 
      name: 'Mouse', 
      price: 10.99, 
      stock: 100 }, 
  ];

  getHealth(): any {
    return {
      "service":"blog service api",
      "version":"1.0.0",
      "date": new Date()
    };
  }

  createProduct(product: ProductDto): ProductDto {
    const newProduct = {
      ...product,
      id: Math.random(), 
      
    }
    
    this.products.push(newProduct);
    return {
      "id": newProduct.id,
      "name": newProduct.name,
      "price": newProduct.price,
      "stock": newProduct.stock
    };
  }  

  findAll(): ProductDto[] {
    return this.products;
  }

  findById(id: string): ProductDto {
    return this.products!
        .find(product => product.id === Number(id))!;
  }

  update(id: string, updateProductDto: ProductDto): any {
    const product:ProductDto = this.products!
        .find(product => product.id === Number(id))!;
    if(!product) {
      return;
}
    Object.assign(product, updateProductDto)
    return product;
  }

  delete(id: string): any {
    const index = this.products!
        .findIndex(product => product.id === Number(id))!;
    if(index === -1) {
      return;
    }
    const deletedProduct = this.products[index];
    this.products.splice(index, 1);
    return deletedProduct;
  }    

  areaTriangulo(data: any): any {
    const area = (data.base * data.altura) / 2;
    return {
    "base": data.base,
    "altura": data.altura,
    "areaTriangulo": area,
    };
  }


  async fetchUserListFromPublicApi() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }

  async sendWithSendGrid(dto: SendMailDto) {
  try {
    const res = await axios.post(
      'https://api.sendgrid.com/v3/mail/send',
      {
        personalizations: [{ to: [{ email: dto.to }] }],
        from: { email: process.env.SENDGRID_SENDER },
        subject: dto.subject,
        content: [{ type: 'text/html', value: dto.message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return { status: res.status };
  } catch (error) {
    throw new InternalServerErrorException('No se pudo enviar el correo con SendGrid');
  }
}
}