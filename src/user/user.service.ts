import { Injectable, BadRequestException } from '@nestjs/common';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';
import { IUser } from './types/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  isValidPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const isUserExist = await this.userRepository.findByCondition({ email });
    if (isUserExist) throw new BadRequestException(`Email is already exist`);
    const hashPassword = this.getHashPassword(createUserDto.password);
    const user = await this.userRepository.create({
      ...createUserDto,
      password: hashPassword,
    });
    delete user.password;
    return user;
  }

  async findAll() {
    return this.userRepository.findAll();
  }

  async findByCondition(params: any) {
    return await this.userRepository.findByCondition(params);
  }

  async findOne(id: string) {
    return await this.userRepository.findById(id);
  }

  async getProfile(user: IUser) {
    const { _id } = user;
    return await this.userRepository.findById(_id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
