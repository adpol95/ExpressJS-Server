import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';
import deleteAll from './deleteAll';
const router = Router();

router.post('/', userRegister);
router.get('/', userGetAll);
router.get('/:id', userGetById);
router.patch('/:id', userUpdateById);
router.delete('/:id', userDeleteById);
router.delete('/', deleteAll);

export default router;
