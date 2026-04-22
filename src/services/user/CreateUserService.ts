import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
  name: string;
  email: string; 
  password: string;
  role?: string;
}

class CreateUserService{
  async execute({ name, email, password, role }: UserRequest){

    // 🔥 validação
    if(!name || !email || !password){
      throw new Error("Preencha todos os campos")
    }

    // 🔥 verificar se já existe
    const userAlreadyExists = await prismaClient.user.findUnique({
      where:{
        email
      }
    })

    if(userAlreadyExists){
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data:{
        name,
        email,
        password: passwordHash,
        role: role || "user",
      },
      select:{
        id: true,
        name: true,       
        email: true,
        coins: true,
        balance: true,
        role: true
      }
    })

    return user; 
  } 
}

export { CreateUserService }