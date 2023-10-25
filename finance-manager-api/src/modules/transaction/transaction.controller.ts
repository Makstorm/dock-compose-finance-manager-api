import {
  ITransactionService,
  TransactionModel,
  TransactionDto,
  TransactionServiceTag,
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
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('transaction')
export class TransactionController {
  @Inject(TransactionServiceTag) private readonly service: ITransactionService;

  @ApiResponse({ type: TransactionModel })
  @Post()
  public async create(@Body() dto: TransactionDto): Promise<TransactionModel> {
    const entity = await this.service.create(dto);
    return TransactionModel.formEntity(entity);
  }

  @ApiResponse({ type: [TransactionModel] })
  @Get()
  public async getAll(): Promise<TransactionModel[]> {
    const transaction = await this.service.getAll();
    return transaction.map((e) => TransactionModel.formEntity(e));
  }

  @ApiResponse({ type: TransactionModel })
  @Delete(':id')
  public async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<TransactionModel> {
    const entity = await this.service.delete(id);
    return TransactionModel.formEntity(entity);
  }
}
