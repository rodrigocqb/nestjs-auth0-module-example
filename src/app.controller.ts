import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {
  JwtAuthGuard,
  Permissions,
  PermissionsGuard,
} from 'nestjs-auth0-module';

@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Permissions('read:all', 'read:hello')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
