import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const mySchema = new mongoose.Schema({
	user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
	title:{ type: String, required: true },
	description:{ type: String, required: true },
	url:{ type: String, required: true },
	image:{ type: String, required: true },
	type:{ type:String},
	provider:{ type:String},
	date:{ type: String },
	category:{ type: String},
	tags:{ type: String},
	author:{ type: String },
	archieve:{ type: Boolean, default: false },
	active:{ type: Boolean, default: true }
},{
	timestamps:true
});
mySchema.plugin(paginate);
export default mongoose.model('reference_url', mySchema);