import { useForm } from "../../../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../../../hooks/useComments";
import { useAuthContext } from "../../../../contexts/AuthContext";

const initialValues = {
    comment: '',
}

export default function Comments({ taskId }) {
    const createComment = useCreateComment();
    const { fullName } = useAuthContext();
    const { isAuthenticated} = useAuthContext();
    const [ comments, setComments] = useGetAllComments(taskId);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(taskId, comment)
            
            const completeNewComment = {
                ...newComment,
                author: { fullName }
            }

            setComments(oldComments => [...oldComments, completeNewComment])
        } catch (err) {
            console.log(err.message);
        }
        
    })
    
  return (
    <div className="mt-4 w-full">
                
        { isAuthenticated && (
            <form onSubmit={submitHandler}>
                <textarea
                    name="comment"
                    placeholder="Add a comment..."
                    rows="3"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    value = {values.comment}
                    onChange={changeHandler}
                />
                <div className="flex justify-end mt-2">
                            <button 
                                type="submit" 
                                className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600"
                            >
                                Add Comment
                            </button>
                </div>
            </form>
        )}

        <h5 className="text-sm font-semibold mt-4">Comments</h5>
            { comments.slice().reverse().map (comment => (
                <div key={comment._id}className="border rounded-md p-3 ml-3 my-3">
                    <div className="flex gap-3 items-center">
                        <h3 className="font-bold">
                            {comment.author.fullName}
                        </h3>
                    </div>
                    <p className="text-gray-600 mt-2">
                        {comment.text}
                    </p>
                </div>
                ))  
            }
            {comments.length === 0 && <p>No comments</p>}
    </div>  
   );
}