import { CreateAnimalDto } from '../dtos/animal.dto';
import { Animal } from '../interfaces/animals.interface';
import animalModel from '../models/animals.model';

class AnimalService {
  public animals = animalModel;

  public async findAllAnimals(): Promise<Animal[]> {
    const animals: Animal[] = this.animals;
    return animals;
  }

  public async getRandomAnimal(): Promise<Animal> {
    const animals: Animal[] = this.animals;
    const max: number = animals.length - 1;
    const rand: number = Math.floor(Math.random() * (max + 1));

    const randomAnimalData: Animal = this.animals[rand];

    return randomAnimalData;
  }

  public async createAnimal(animalData: CreateAnimalDto): Promise<Animal[]> {
    if (!animalData) throw new Error('Invalid animalData');
    if (!Array.isArray(animalData)) throw new Error('animalData is not a list');

    for (let i = 0; i < animalData.length; i++) {
      const findAnimal: Animal | undefined = this.animals.find(animal => animal.animal === animalData.animal);
      if (findAnimal) throw new Error(`Animal '${animalData.animal}' is already listed`);
    }

    const createAnimalData: Animal[] = animalData;
    this.animals = [...this.animals, ...createAnimalData];

    return createAnimalData;
  }

  public async updateAnimal(animalData: CreateAnimalDto): Promise<Animal> {
    if (!animalData) throw new Error('Invalid animalData');
    const findAnimal: Animal | undefined = this.animals.find(animal => animal.animal === animalData.animal);
    if (!findAnimal) throw new Error(`Can't find animal '${animalData.animal}'`);

    const updateAnimalData: Animal[] = this.animals;
    const index: number = updateAnimalData.findIndex(animal => animal.animal === animalData.animal);
    updateAnimalData[index] = animalData;

    return updateAnimalData[index];
  }

  public async deleteAnimal(animalData: CreateAnimalDto): Promise<Animal[]> {
    if (!animalData) throw new Error('Invalid animalData');

    const findAnimal: Animal | undefined = this.animals.find(animal => animal.animal === animalData.animal);
    if (!findAnimal) throw new Error(`Can't find animal '${animalData.animal}'`);

    const deleteAnimalData: Animal[] = this.animals.filter(animal => animal.animal !== animalData.animal);

    return deleteAnimalData;
  }
}

export default AnimalService;
