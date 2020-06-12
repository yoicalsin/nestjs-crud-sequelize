## Nestjs Sequelize Crud

```bash
# For npm
npm install --save nestjs-crud-sequelize

# For yarn
yarn add --save nestjs-crud-sequelize
```

## Usage

```ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// Importe crud service}
import { CrudService } from 'nestjs-crud-sequelize';

// Import your model
import { UserModel } from 'src/models/user';

@Injectable()
export class UserService extends CrudService<UserModel> {
   constructor(
      // Inject your model
      @InjectModel(UserModel)
      model: typeof UserModel,
   ) {
      // Set mode to crud service constructor !
      super(model);
   }
}
```

## ⭐ Support for

Nestjs-crud-sequelize is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## 📜 License

Nestjs-crud-sequelize is [MIT licensed](LICENSE).
