import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    /* 当然，在实际应用程序中，您不会以纯文本形式存储密码。
    相反，您将使用像bcrypt这样的库，使用加盐的单向哈希算法。
    使用这种方法，您只需存储散列密码，然后将存储的密码与传入密码的散列版本进行比较，
    因此永远不会以纯文本形式存储或公开用户密码。为了让我们的示例应用程序简单，
    我们违反了绝对授权并使用纯文本。不要在你的真实应用中这样做！ */
    const user = await this.usersService.findOne(username)
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id }

    return {
      access_token: this.jwtService.sign(payload),
      id: user.id,
      username: user.username,
      role: user.role
    }
  }
}
