import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { SuccessResponseDto } from './common/dto/response.dto';
import { SendMailDto } from './mail/dto/send-mail.dto';


@Controller()
export class AppController {
  mailService: any;
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): any {
    return this.appService.getHealth();
  }

   @Post("/products")
   @UseGuards(JwtAuthGuard)
  createProduct(@Body() product: ProductDto): ProductDto {
    return this.appService.createProduct(product);
  }

  @Get("/products")
  findAll(): ProductDto[] {
    return this.appService.findAll();
  }

  @Get("/products/:id")
  findBYId(@Param('id') id: string): ProductDto {
    return this.appService.findById(id);
  }

  @Put("/products/:id")
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string,
  @Body() updateProductDto: ProductDto): any {
    return this.appService.update(id, updateProductDto);
  }

  @Delete("/products/:id")
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string): ProductDto {
    return this.appService.delete(id);
  }

  @Post("/area-triangulo")
  @UseGuards(JwtAuthGuard)
  areaTriangulo(@Body() data: any): any {
  return this.appService.areaTriangulo(data);
  }

  @Get('public-api')
  async getUsersFromPublicApi() {
    const result = await this.mailService.fetchUserListFromPublicApi();
    return new SuccessResponseDto('Usuarios obtenidos', result);   
}
  @Post('sendgrid')
  async sendSendGrid(@Body() dto: SendMailDto) {
    const result = await this.mailService.sendWithSendGrid(dto);
    return new SuccessResponseDto('Correo enviado con SendGrid', result);
}
}