import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const mySchema = new mongoose.Schema({
	name:{ type: String, required: true },
	email:{ type: String, required: true },
	source:{ type: String, required: true },
	details:{ type: String, required: true },
	archieve:{ type: Boolean, default: false },
	active:{ type: Boolean, default: true }
},{
	timestamps:true
});
mySchema.plugin(paginate);
export default mongoose.model('user', mySchema);