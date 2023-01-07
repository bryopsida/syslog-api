import { Module } from '@nestjs/common';
import { DateScalar } from './scalars/date.scalar';

@Module({
  controllers: [],
  imports: [],
  providers: [DateScalar],
})
export class CommonModule {}
