import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { PhonesService } from "./phones.service";
import { CreatePhoneDto } from "./dto/create-phone.dto";

@Controller("phones")
export class PhonesController {
    constructor(private readonly phonesService: PhonesService) {}

    @Post()
    create(@Body() dto: CreatePhoneDto) {
        return this.phonesService.create(dto);
    }

    @Get()
    findAll() {
        return this.phonesService.findAll();
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.phonesService.findOne(id);
    }
}