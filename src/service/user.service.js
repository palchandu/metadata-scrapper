import { UserSchema } from '../schema/index.js'

export const createUser=async(user)=>{
	try{
		const newUser=new UserSchema(user);
		return await newUser.save();
	}catch(err){
		throw new Error(err)
	}
	
}
export const getUser=async(id)=>{
	try{
		return await UserSchema.findOne({id:id,archieve:false,active:true}).exec();
	}catch(err){
		throw new Error(err)
	}
	
}

export const getUsers=async(query)=>{
	try{
		return await UserSchema.paginate(query, {
			sort: { createdAt: -1 },
			page: query.page,
			limit: query.limit,
			select: '-password',
		});
	}catch(err){
		throw new Error(err)
	}
	
}
export const updateUser=async(id,user)=>{
	try{
		return await UserSchema.findByIdAndUpdate(id,user,{new:true});
	}catch(err){
		throw new Error(err)
	}
	
}
export const deleteUser=async(id)=>{
	try{
		return await UserSchema.findByIdAndUpdate(id,{ active:false, archieve:true},{new:true});
	}catch(err){
		throw new Error(err)
	}
}