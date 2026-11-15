import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Phone } from "./phone.interface";
import { CreatePhoneDto } from "./dto/create-phone.dto";

@Injectable()
export class PhonesService {
    private phones: Phone[] = [
        { id: 1, nom: "iPhone 15", couleur: "Noir", stockage: 128 },
        { id: 2, nom: "Galaxy S24", couleur: "Gris", stockage: 256 },
        { id: 3, nom: "Pixel 8", couleur: "Blanc", stockage: 128 },
    ];
    private nextId = 4;

    create(dto: CreatePhoneDto): Phone {
        const duplicate = this.phones.some((p) =>
            p.nom.toLowerCase() === dto.nom.toLowerCase());
        if (duplicate) {
            throw new ConflictException("Nom de téléphone déjà utilisé");
        }
        const phone: Phone = { id: this.nextId++, ...dto };
        this.phones.push(phone);
        return phone;
    }

    findAll(): Phone[] {
        return this.phones;
    }

    findOne(id: number): Phone {
        const phone = this.phones.find((p) => p.id === id);
        if (!phone) {
            throw new NotFoundException(`Téléphone ${id} introuvable`);
        }
        return phone;
    }
}