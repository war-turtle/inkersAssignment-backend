const Response = {

  general(data) {
    return data;
  },
  error(code, message, description) {
    return {
      code: code || 400,
      message: message || 'some error occoured',
      description: description || 'error occoured on server, please try again after some time.',
    };
  },
  authError() {
    return Response.error(
      401,
      'authentication error',
      'no authentication token provided, please login first and provide the authentication token.',
    );
  },
  routeNotFound() {
    return Response.error(
      404,
      'resource not found',
      'the resource your tried to access doesn\'t exist or you dont have permissions to access it.',
    );
  },
  userNotFound() {
    return Response.error(
      400,
      'user not found',
      "the user you're looking for doesn't exist or you dont have permissions to access it.",
    );
  },
  updateErrorOccoured(error) {
    return Response.error(
      301,
      'error occoured',
      error || 'error occoured while updating your data.',
    );
  },
  success(description, data = null) {
    return {
      code: 200,
      message: 'success',
      description: description || 'data successfully saved',
      data
    };
  },
};

export default Response;
