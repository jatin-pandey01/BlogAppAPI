const Post = require('./../models/postModel');
const Comment = require('./../models/commentModel');

exports.createComment = async (req,res)=>{
    try {
        //Fetch from req body
        const {post,user,body} = req.body;
        //Create a comment object
        const comment = new Comment({post,user,body});
        //save the new comment into the database
        const savedComment = await comment.save(); //Another way to create in DB else 'await Comment.create({post,user,body})'
        
        //find the post by ID, add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments:savedComment._id} }, {new:true}).populate('comments').exec(); //For update use $push and for delete use $pull and new:true means return updated document if i dont't write then it'll not give updated documents
        //populate ( means if id doesn't get then give relatable id ) the comments array with comment documents
        res.json({
            post:updatedPost,
        });
    }
    catch (error) {
        return res.status(500).json({
            error:"Error while creating comment",
        })
    }
}