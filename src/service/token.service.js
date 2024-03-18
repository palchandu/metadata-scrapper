export const createToken = async (user, token) =>{
	try{
		const newToken = new TokenSchema({
			user: user,
			token: token
		});
		return await newToken.save();
	}catch(err){
		throw new Error(err);
	}
}

export const getToken = async (id) =>{
	try{
		return await TokenSchema.findOne({id:id,archieve:false,active:true}).exec();
	}catch(err){
		throw new Error(err);
	}
}

export const getTokens = async (query) =>{
	try{
		return await TokenSchema.paginate(query, {
			sort: { createdAt: -1 },
			page: query.page,
			limit: query.limit,
			select: '-password',
		});
	}catch(err){
		throw new Error(err);
	}
}

export const updateToken = async (id, token) =>{
	try{
		return await TokenSchema.findByIdAndUpdate(id,token,{new:true});
	}catch(err){
		throw new Error(err);
	}
}
export const deleteToken = async (id) =>{
	try{
		return await TokenSchema.findByIdAndUpdate(id,{ active:false, archieve:true},{new:true});
	}catch(err){
		throw new Error(err);
	}
}

export const getTokenByUser = async (user) =>{
	try{
		return await TokenSchema.findOne({user:user,archieve:false,active:true}).exec();
	}catch(err){
		throw new Error(err);
	}
}
/** get token by token value */
export const getTokenByToken = async (token) =>{
	try{
		return await TokenSchema.findOne({token:token,archieve:false,active:true}).exec();
	}catch(err){
		throw new Error(err);
	}
}