import { useForm } from "../../../../hooks/useForm";
import { useCreateComment, useGetAllComments } from "../../../../hooks/useComments";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { validateCommentForm } from "../../../../api/valid-api";

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
        errors,
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
        
    }, validateCommentForm)

    
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    
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
                {errors.comment && <p className="error">{errors.comment}</p>}
            </form>
        )}

        <h5 className="text-sm font-semibold mt-4">Comments</h5>
        {comments.slice().reverse().map(comment => (
            <div key={comment._id} className="border rounded-md p-3 ml-3 my-3">
                <div className="flex gap-3 items-center">
                <h3 className="font-bold">{comment.author.fullName}</h3>
                <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                    <svg
                        className="w-4 h-4 text-gray-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                        />
                    </svg>
                    <span className="ml-1 leading-none">
                        from: {new Date(Number(comment._createdOn)).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                        })}
                    </span>
                    </div>
                
                </div>
                <p>{comment.text}</p>
            </div>
            ))}
            {comments.length === 0 && <p>No comments</p>}
    </div>  
   );
}