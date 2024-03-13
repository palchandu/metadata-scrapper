import getMetaData from 'metadata-scraper';
import urlMetadata from 'url-metadata';

export const  ScrapSeviceOne =async (url)=>{
	try{
		if(url){
			const options = {
				url: url,
				maxRedirects: 0,
				ua: 'MyApp', 
				lang: 'de-CH',
				timeout: 1000,
				forceImageHttps: false,
				customRules: {}
			}
			const data=await getMetaData(options);
			if(data){
				return data;
			}else{
				return null;
			}
		}else{
			throw new Error("Please provide a valid url");
		}
	}catch(e){
		throw new Error("Error in getting information");
	}
}

export const ScrapSeviceTwo =async (url)=>{
	try{
		if(url){
			const metadata = await urlMetadata(url);
			if(metadata){
				return metadata
			}else{
				return null;
			}
		}else{
			throw new Error("Please provide a valid url");
		}
	}catch(e){
		throw new Error("Error in getting information");
	}
}