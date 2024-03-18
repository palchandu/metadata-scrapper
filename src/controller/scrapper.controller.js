import { ScrapSeviceOne,ScrapSeviceTwo,IsExist } from '../service/index.js'
import {ReferenceSchema} from '../schema/index.js'
export const Scrapper=async (req,res)=>{
	const {url}=req.body;
	//console.log("gggg",url)
	if(url){
		try{
			const isDataExist=await IsExist(url);
			if(!isDataExist){
				const data=await ScrapSeviceOne(url);
				console.log("data",data)
				if(data==null || (data && data.title==undefined && data.description==undefined)){
					const data2=await ScrapSeviceTwo(url);
					if(data2){
						let saveRes=await ReferenceSchema.create(data2);
						res.status(200).send({message:"Saved Successfully.",data:saveRes})
					}else{
						res.status(200).send("No Data Found.")
					}
				}else{
					let saveRes=await ReferenceSchema.create(data);
					res.status(200).send({message:"Saved Successfully.",data:saveRes})
				}
			}else{
				res.status(200).send({message:"Data Already Exist.",data:isDataExist})
			}
		}catch(e){
			res.status(500).send({error: e})
		}
	}else{
		res.status(500).send({error: "Please provide a valid url"})
	}
}