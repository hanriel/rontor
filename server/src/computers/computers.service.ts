import { Injectable } from '@nestjs/common';
import { CreateComputerDto } from './dto/create-computer.dto';
import { UpdateComputerDto } from './dto/update-computer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ComputerEntity } from './entities/computer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComputersService {
  constructor(
    @InjectRepository(ComputerEntity)
    private repository: Repository<ComputerEntity>,
  ) {}

  create(dto: CreateComputerDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} computer`;
  }

  update(id: number, updateComputerDto: UpdateComputerDto) {
    return `This action updates a #${id} computer`;
  }

  remove(id: number) {
    return `This action removes a #${id} computer`;
  }
}
