## Nestjs Sequelize Crud

<a href="https://github.com/yonycalsin/nestjs-crud-sequelize"><img src="https://img.shields.io/spiget/stars/1000?color=brightgreen&label=Star&logo=github" /></a>
<a href="https://www.npmjs.com/nestjs-crud-sequelize" target="_blank">
<img src="https://img.shields.io/npm/v/nestjs-crud-sequelize" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/nestjs-crud-sequelize" target="_blank">
<img src="https://img.shields.io/npm/l/nestjs-crud-sequelize" alt="Package License" /></a>
<a href="https://www.npmjs.com/nestjs-crud-sequelize" target="_blank">
<img src="https://img.shields.io/npm/dm/nestjs-crud-sequelize" alt="NPM Downloads" /></a>
<a href="https://github.com/yonycalsin/nestjs-crud-sequelize" target="_blank">
<img src="https://s3.amazonaws.com/assets.coveralls.io/badges/coveralls_95.svg" alt="Coverage" /></a>
<a href="https://github.com/yonycalsin/nestjs-crud-sequelize"><img src="https://img.shields.io/badge/Github%20Page-nestjs.crud.sequelize-yellow?style=flat-square&logo=github" /></a>
<a href="https://github.com/yonycalsin"><img src="https://img.shields.io/badge/Author-Yoni%20Calsin-blueviolet?style=flat-square&logo=appveyor" /></a>
<a href="https://twitter.com/yonycalsin" target="_blank">
<img src="https://img.shields.io/twitter/follow/yonycalsin.svg?style=social&label=Follow"></a>

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

`nestjs-crud-sequelize` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](https://twitter.com/yonycalsin).

## 🎩 Stay in touch

-  Github [@yonycalsin](https://github.com/yonycalsin)
-  Twitter [@yonycalsin](https://twitter.com/yonycalsin)
-  Instagram [@yony_calsin](https://instagram.com/yony_calsin)
-  Medium [@yonycalsin](https://medium.com/@yonycalsin)
-  Dev [@yonycalsin](https://dev.to/yonycalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`nestjs-crud-sequelize` under [License MIT.](LICENSE)
