const Like = require('../models/likeModel');
const Post = require('../models/postModel');

exports.likePost = async(req,res)=>{
    try {
        const {post,user} = req.body;
        const like = new Like({
            post,user
        });
        const savedLike = await like.save();
        
        //update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate('likes').populate('comments').exec();

        res.json({post:updatedPost});
    } 
    catch (error) {
        return res.status(500).json({
            error:"Error while like the post",
        })  
    }
}

//unlike a post
exports.unlikePost = async(req,res)=>{
    try {
        const {post,like} = req.body;
        //find and delete the like collection me se
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like}); //findOne means jis bhi first entry ke under ye dono data match kar jayenge unko delete kar dena hai
        
        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:like} },{new:true}).populate('likes').exec();

        if(!updatedPost){
            res.json({
                none:"Not exist",
            })
            return;
        }
        res.json({updatedPost});    
    }
    catch (error) {
        return res.status(500).json({
            error:"Error while unlike the post",
        })  
    }
}