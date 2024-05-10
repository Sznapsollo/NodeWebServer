const { response } = require("express");

const customAPIAction = (filePath) => {
  console.log('Hi am am your custom API action')
  return {}
}

const handleAction = async (req, res = response) => {
  console.log('handleAction', req?.body?.type)
  // console.log(req.body)
  let responseData = {status: 0, data: {}}
  
  try {
    switch(req.body.type) {
      case 'customAPIAction':
        responseData.data = customAPIAction();
        break
      default:
        responseData.status = -1;
        responseData.data = 'Unrecognized action';
        break;
    }

    res.json(responseData);
  } catch (err) {
    console.error(err);
    responseData.status = -1;
    responseData.data = err?.message ? err.message : "Operation failed";
    res.json(responseData);
  }
};

module.exports = {
  handleAction,
};