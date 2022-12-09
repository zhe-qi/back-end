import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Role } from './role.enum'
import { ROLES_KEY } from './role.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  // 本来应该在这里校验用户的角色,但不知道为什么不执行这里面的内容
  // TODO: 我也是第一次写这个后端，等我有时间再来研究，因为网上没什么教程所以只能看文档，就很烦
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ])
    if (!requiredRoles) {
      return true
    }
    const { user } = context.switchToHttp().getRequest()
    return requiredRoles.some((role) => user.roles?.includes(role))
  }
}
