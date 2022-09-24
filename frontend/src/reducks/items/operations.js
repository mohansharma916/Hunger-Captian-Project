import API from '../../API';
import { fetchItemAction } from './actions';

const api = new API();

export const fetchItem = params => {
    return dispatch => {
        return api
            .getItems(params)
            .then(item => {
                dispatch(fetchItemAction(item));
            })
            .catch(error => {
                alert('Failed to connect API: /items/');
            });
    };
};

// export const deletePost = id => {
//     return dispatch => {
//         return api
//             .deletePost(id)
//             .then(() => {
//                 dispatch(deletePostAction(id));
//             })
//             .catch(error => {
//                 alert('Failed to connect API to delete a post');
//                 console.log(error);
//             });
//     };
// };

// export const addPost = postBody => {
//     const { name, body } = postBody;
//     return dispatch => {
//         // Validation
//         if (name === '' || body === '') {
//             alert('Please fill out name and body.');
//             return false;
//         }

//         return api
//             .addPost(postBody)
//             .then(post => {
//                 dispatch(addPostAction(post));
//             })
//             .catch(error => {
//                 alert('Failed to connect API to add a post');
//                 console.log(error);
//             });
//     };
// };
