/** Middleware to check token exist and are valid except create user router */
import { getTokenByToken } from '../service/token.service.js'

export  const checkToken = (req, res, next) =>{
	if(req.path!=='/' && req.path!=='/user/create' && req.path!='/token/create'){
		const token = req.headers.authorization;
		if(!token){
			return res.status(401).json({
				message: 'No access key provided'
			});
		}
		const tokenValue = token.split(' ')[1];
		const tokenExist = getTokenByToken(tokenValue);
		if(!tokenExist){
			return res.status(401).json({
				message: 'Invalid access key'
			});
		}
		next();
	}else{
		next();
	}
	
	
}