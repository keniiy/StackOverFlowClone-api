const successResponse = (res, status, data) => {
    return res.status(status).json(data);
};
  
const errorResponse = (res, status, error) => {
    return res.status(status).json(error);
};
  
module.exports = { successResponse, errorResponse };