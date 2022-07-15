import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { SlugPipe } from './slug.pipe';
import { UpperPipe } from './upper.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  @UsePipes(UpperPipe)
  getHello(@Param('name') name:string): string {
    return this.appService.getHello(name);
  }

  @Get('art/:id')
  @UsePipes(ParseIntPipe)
  getarticleById(@Param('id') id)
  {
    const idType= typeof id;
    const res = {id , idType};
    return res;
  }

  @Post('add')
  @UsePipes(SlugPipe)
  create(@Body('title') title, @Body() allBody){
    allBody.slug = title;
    return allBody;
  }

  @Post()
  @UsePipes(UpperPipe)
  createMsg(@Body() message){
    return message;
  }
}
