import { PrismaClient } from '@prisma/client'

// initialize Prisma Client
const prisma = new PrismaClient()

async function main() {
  const post1 = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: '123456',
      role: 'ADMIN'
    }
  })

  const post2 = await prisma.user.upsert({
    where: { username: 'user01' },
    update: {},
    create: {
      username: 'user01',
      password: '123456',
      role: 'USER'
    }
  })
  console.log({ post1, post2 })
}
// execute the main function
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect()
  })
