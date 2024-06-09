const { default: axios } = require('axios');
// const refactJsonQuake = require('../utils/refactJsonQuake');
const responseCreator = require('../utils/responseCreator');

// mock up response
const mockupResponse = {
  data: [
    {region_id: "000", date: "2024-06-24", index: "78.6"}, 
    {region_id: "001", date: "2024-06-24", index: "20.6"}, 
  ]}

const getGeopolitics = async (req, res) => {
  try {
    // const response = await axios.get(
    //   'https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json'
    // );

    // const refactoredJson = refactJsonQuake(response.data);

    return res.status(200).send(responseCreator({ data: mockupResponse }));
  } catch (error) {
    return res
      .status(500)
      .send(responseCreator({ message: 'Something went wrong' }));
  }
};

module.exports = { getGeopolitics };
