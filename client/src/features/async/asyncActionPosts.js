import { base_url } from '../../utils/constants';
import { putPosts } from '../postsSlice';

export const getPosts = () => {
  return (dispatch) => {
    fetch(`${base_url}post`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        dispatch(putPosts(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};
export const addPost = ({ comment, imageUrl, user }) => {
  return (dispatch) => {
    fetch(`${base_url}post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: comment,
        imageSrc: imageUrl,
        username: user,
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        dispatch(getPosts())
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

export const getPostByFilter = (keyWord) => {
  return (dispatch) => {
    fetch(`${base_url}post/search/${keyWord}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        dispatch(putPosts(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

export const updatePost = ({ likes, dislikes, title, id }) => {
  return (dispatch) => {
    fetch(`${base_url}post/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        likes: likes,
        dislikes: dislikes
      })

    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        dispatch(getPosts())
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};
export const updatePhoto = ({ formData, id }) => {
  return (dispatch) => {
    fetch(`${base_url}post/${id}/picture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        dispatch(getPosts())
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};

export const sendComment = ({ comment, id, user }) => {
  return (dispatch) => {
    fetch(`${base_url}comment`,  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: comment,
        postId: id,
        username: user,
      })
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status.toString());
      }
    })
    .then((data) => {
      dispatch(getPosts());
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
};


export const updateCom = ({ likes, dislikes, title, id }) => {

  return (dispatch) => {
    fetch(`${base_url}comment/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        likes: likes,
        dislikes: dislikes
      })

    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        dispatch(getPosts())
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};


export const deletePost = (id) => {
  return (dispatch) => {
    fetch(`${base_url}post/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        dispatch(getPosts())
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};





export const deleteComent = (id) => {
  return (dispatch) => {
    fetch(`${base_url}comment/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        dispatch(getPosts())
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
};
