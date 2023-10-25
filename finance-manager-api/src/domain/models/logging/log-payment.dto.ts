export class LoggingPaymentDto {
  public paymentType: string;

  public category: string;

  public date: Date;

  public amount: number;

  public constructor(
    paymentType: string,
    category: string,
    date: Date,
    amount: number,
  ) {
    this.paymentType = paymentType;
    this.category = category;
    this.date = date;
    this.amount = amount;
  }
}
