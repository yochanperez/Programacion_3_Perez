import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): any {
    return this.appService.getHealth();
  }

  @Post("/products")
  CreteProduct(@Body() product: ProductDto): ProductDto {
    return this.appService.CreteProducto(product);
  }

  @Get()
  findAll(): ProductDto[] {
    return this.appService.findAll();
  } 

 @Get('/products/:id')
  findById(@Param('id') id: string): ProductDto {
    return this.appService.findById(id);
  }
}
