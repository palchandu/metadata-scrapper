import { createToken, getToken, getTokens, updateToken, deleteToken, getTokenByUser } from '../service/index.js'
import randomBytes from 'randombytes'
export const createTokenHandle = async (req, res) =>{
	try{
		const tokenValue=randomBytes(32);
		req.body.token=tokenValue;
		const token = await createToken(req.body.user, req.body.token);
		res.status(200).json({
			message: 'Token created successfully',
			token
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in creating token',
			error: err
		});
	}
}

export const getTokenHandle = async (req, res) =>{
	try{
		const token = await getToken(req.params.id);
		res.status(200).json({
			message: 'Token fetched successfully',
			token
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in fetching token',
			error: err
		});
	}
}

export const getTokensHandle = async (req, res) =>{
	try{
		const tokens = await getTokens(req.query);
		res.status(200).json({
			message: 'Tokens fetched successfully',
			tokens
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in fetching tokens',
			error: err
		});
	}
}

export const updateTokenHandle = async (req, res) =>{
	try{
		const tokenValue=randomBytes(32);
		const token = await updateToken(req.params.id, {token:tokenValue});
		res.status(200).json({
			message: 'Token updated successfully',
			token
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in updating token',
			error: err
		});
	}
}


export const deleteTokenHandle = async (req, res) =>{
	try{
		const token = await deleteToken(req.params.id);
		res.status(200).json({
			message: 'Token deleted successfully',
			token
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in deleting token',
			error: err
		});
	}
}

export const getTokenByUserHandle = async (req, res) =>{
	try{
		const token = await getTokenByUser(req.params.id);
		res.status(200).json({
			message: 'Token fetched successfully',
			token
		});
	}catch(err){
		res.status(500).json({
			message: 'Error in fetching token',
			error: err
		});
	}
}
