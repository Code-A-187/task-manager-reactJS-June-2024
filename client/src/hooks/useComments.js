import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";

export function useCreateComment() {
    const commentCreateHandler = (taskId, comment) => commentsAPI.create(taskId, comment)

    return commentCreateHandler
};

export function useGetAllComments(taskId) {
    const [comments, setComments] = useState([]);;
    
    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(taskId);

            setComments(result)
        })();
    }, [taskId]);

    return [comments, setComments];
}