import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user) {
      if (user.admin) {
        return this.usersRepository.list();
      }
      throw new Error("user is not an admin");
    }

    throw new Error("user id not found");
  }
}

export { ListAllUsersUseCase };
