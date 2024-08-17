import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class PassportLocalAuthGuard extends AuthGuard('local') {
  override getRequest(context: ExecutionContext) {
    const request = GqlExecutionContext.create(context);
    return request;
  }
}
