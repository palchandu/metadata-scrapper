import { createUser, getUser, getUsers, updateUser, deleteUser } from '../service/index.js'

export const createUserHandle = async (req, res) =>{
	try{
		const user = await createUser(req.body);
		res.status(200).json({
			message: 'User created successfully',
			user
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in creating user',
			error: err
		});
	}
}

export const getUserHandle = async (req, res) =>{
	try{
		const user = await getUser(req.params.id);
		res.status(200).json({
			message: 'User fetched successfully',
			user
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in fetching user',
			error: err
		});
	}
}

export const getUsersHandle = async (req, res) =>{
	try{
		const users = await getUsers(req.query);
		res.status(200).json({
			message: 'Users fetched successfully',
			users
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in fetching users',
			error: err
		});
	}
}

export const updateUserHandle = async (req, res) =>{
	try{
		const user = await updateUser(req.params.id, req.body);
		res.status(200).json({
			message: 'User updated successfully',
			user
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in updating user',
			error: err
		});
	}
}

export const deleteUserHandle = async (req, res) =>{
	try{
		const user = await deleteUser(req.params.id);
		res.status(200).json({
			message: 'User deleted successfully',
			user
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in deleting user',
			error: err
		});
	}
}