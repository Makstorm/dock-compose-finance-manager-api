import {
  AccountDto,
  AccountModel,
  AccountServiceTag,
  AccountUpdateDto,
  IAccountService,
} from '@domain';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  @Inject(AccountServiceTag) private readonly service: IAccountService;

  @ApiResponse({ type: AccountModel })
  @Post()
  public async create(@Body() dto: AccountDto): Promise<AccountModel> {
    const entity = await this.service.create(dto);
    return AccountModel.formEntity(entity);
  }

  @ApiResponse({ type: AccountModel })
  @Delete('/:id')
  public async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<AccountModel> {
    const entity = await this.service.delete(id);
    return AccountModel.formEntity(entity);
  }

  @ApiResponse({ type: AccountModel })
  @Get('/:id')
  public async getOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<AccountModel> {
    const entity = await this.service.getOne(id);
    return AccountModel.formEntity(entity);
  }

  @ApiResponse({ type: [AccountModel] })
  @Get()
  public async getAll(): Promise<AccountModel[]> {
    const entity = await this.service.getAll();
    return entity.map((e) => AccountModel.formEntity(e));
  }

  @ApiResponse({ type: AccountModel })
  @Put('/:id')
  public async edit(
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    dto: AccountUpdateDto,
  ): Promise<AccountModel> {
    const entity = await this.service.update(id, dto);
    return AccountModel.formEntity(entity);
  }
}
