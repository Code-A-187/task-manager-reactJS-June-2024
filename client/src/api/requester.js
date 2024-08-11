import { getAccessToken } from "../utils/AuthUtils";

async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        };
    }

    if (method !== 'GET') {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
        
        if (data) {
            options.body = JSON.stringify(data);
        }
    }

    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return; // No content, return nothing
        }

        const contentType = response.headers.get('content-type');

        let result;
        if (contentType && contentType.includes('application/json')) {
            result = await response.json();
        } else {
            const text = await response.text();
            throw new Error(`Unexpected content type: ${contentType}, Response: ${text}`);
        }

        if (!response.ok) {
            // Check if the error is a JSON object and has a `message` property
            const error = new Error(result.message || 'Request failed');
            error.response = result;
            throw error;
        }

        return result;

    } catch (error) {
        // Log error for debugging
        console.error('Request failed:', error);

        // Rethrow the error to be caught by the caller
        throw error;
    }
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del,
};