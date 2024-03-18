import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2'
const mySchema = new mongoose.Schema({
	user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
	token:{ type: String, required: true },
	archieve:{ type: Boolean, default: false },
	active:{ type: Boolean, default: true }
},{
	timestamps:true
})
mySchema.plugin(paginate);
export default mongoose.model('token', mySchema);
