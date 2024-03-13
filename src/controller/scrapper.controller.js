import { ScrapSeviceOne,ScrapSeviceTwo } from '../service/index.js'
export const Scrapper=async (req,res)=>{
	const {url}=req.body;
	console.log("gggg",url)
	if(url){
		try{
			const data=await ScrapSeviceOne(url);
			console.log("data",data)
			if(data==null || (data && data.title==undefined && data.description==undefined)){
				const data2=await ScrapSeviceTwo(url);
				if(data2){
					res.status(200).send({data:data2})
				}else{
					res.status(200).send("No Data Found.")
				}
			}else{
				res.status(200).send({data})
			}
		}catch(e){
			res.status(500).send({error: e.message})
		}
	}else{
		res.status(500).send({error: "Please provide a valid url"})
	}
}