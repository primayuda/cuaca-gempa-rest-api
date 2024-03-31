const { default: axios } = require('axios');
// const refactJsonQuake = require('../utils/refactJsonQuake');
const responseCreator = require('../utils/responseCreator');

// mock up response
const mockupResponse = [
    {
      "Date": "11/17/2022",
      "Price": "89.80",
      "Open": "89.80",
      "High": "89.80",
      "Low": "89.80",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "11/16/2022",
      "Price": "89.80",
      "Open": "89.80",
      "High": "89.80",
      "Low": "89.80",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "11/15/2022",
      "Price": "89.80",
      "Open": "89.80",
      "High": "89.80",
      "Low": "89.80",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "11/14/2022",
      "Price": "89.80",
      "Open": "89.80",
      "High": "89.80",
      "Low": "89.80",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "11/11/2022",
      "Price": "89.80",
      "Open": "89.80",
      "High": "89.80",
      "Low": "89.80",
      "Vol.": "",
      "Change %": "-2.18%"
    },
    {
      "Date": "11/10/2022",
      "Price": "91.80",
      "Open": "91.80",
      "High": "91.80",
      "Low": "91.80",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "11/09/2022",
      "Price": "91.80",
      "Open": "91.80",
      "High": "91.80",
      "Low": "91.80",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "11/08/2022",
      "Price": "91.80",
      "Open": "91.80",
      "High": "91.80",
      "Low": "91.80",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "11/07/2022",
      "Price": "91.80",
      "Open": "91.80",
      "High": "91.80",
      "Low": "91.80",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "11/04/2022",
      "Price": "91.80",
      "Open": "91.80",
      "High": "91.80",
      "Low": "91.80",
      "Vol.": "",
      "Change %": "-2.86%"
    },
    {
      "Date": "11/03/2022",
      "Price": "94.50",
      "Open": "94.50",
      "High": "94.50",
      "Low": "94.50",
      "Vol.": "",
      "Change %": "-0.26%"
    },
    {
      "Date": "11/02/2022",
      "Price": "94.75",
      "Open": "94.75",
      "High": "94.75",
      "Low": "94.75",
      "Vol.": "",
      "Change %": "-0.52%"
    },
    {
      "Date": "11/01/2022",
      "Price": "95.25",
      "Open": "95.25",
      "High": "95.25",
      "Low": "95.25",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "10/31/2022",
      "Price": "95.25",
      "Open": "95.25",
      "High": "95.25",
      "Low": "95.25",
      "Vol.": "",
      "Change %": "3.93%"
    },
    {
      "Date": "10/28/2022",
      "Price": "91.65",
      "Open": "91.65",
      "High": "91.65",
      "Low": "91.65",
      "Vol.": "",
      "Change %": "-0.87%"
    },
    {
      "Date": "10/27/2022",
      "Price": "92.45",
      "Open": "92.45",
      "High": "92.45",
      "Low": "92.45",
      "Vol.": "",
      "Change %": "-0.32%"
    },
    {
      "Date": "10/26/2022",
      "Price": "92.75",
      "Open": "92.75",
      "High": "92.75",
      "Low": "92.75",
      "Vol.": "",
      "Change %": "-0.70%"
    },
    {
      "Date": "10/25/2022",
      "Price": "93.40",
      "Open": "93.40",
      "High": "93.40",
      "Low": "93.40",
      "Vol.": "",
      "Change %": "-1.84%"
    },
    {
      "Date": "10/24/2022",
      "Price": "95.15",
      "Open": "95.15",
      "High": "95.15",
      "Low": "95.15",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "10/21/2022",
      "Price": "95.15",
      "Open": "95.15",
      "High": "95.15",
      "Low": "95.15",
      "Vol.": "",
      "Change %": "1.22%"
    },
    {
      "Date": "10/20/2022",
      "Price": "94.00",
      "Open": "94.00",
      "High": "94.00",
      "Low": "94.00",
      "Vol.": "",
      "Change %": "-0.48%"
    },
    {
      "Date": "10/19/2022",
      "Price": "94.45",
      "Open": "94.45",
      "High": "94.45",
      "Low": "94.45",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "10/18/2022",
      "Price": "94.45",
      "Open": "94.45",
      "High": "94.45",
      "Low": "94.45",
      "Vol.": "",
      "Change %": "0.00%"
    },
    {
      "Date": "10/17/2022",
      "Price": "94.45",
      "Open": "94.45",
      "High": "94.45",
      "Low": "94.45",
      "Vol.": "",
      "Change %": "-1.31%"
    },
    {
      "Date": "10/14/2022",
      "Price": "95.70",
      "Open": "95.70",
      "High": "95.70",
      "Low": "95.70",
      "Vol.": "",
      "Change %": "1.81%"
    },
    {
      "Date": "10/13/2022",
      "Price": "94.00",
      "Open": "94.00",
      "High": "94.00",
      "Low": "94.00",
      "Vol.": "",
      "Change %": "-0.95%"
    },
    {
      "Date": "10/12/2022",
      "Price": "94.90",
      "Open": "94.90",
      "High": "94.90",
      "Low": "94.90",
      "Vol.": "",
      "Change %": "0.96%"
    },
    {
      "Date": "10/11/2022",
      "Price": "94.00",
      "Open": "94.00",
      "High": "94.00",
      "Low": "94.00",
      "Vol.": "",
      "Change %": "-0.95%"
    },
    {
      "Date": "10/10/2022",
      "Price": "94.90",
      "Open": "94.90",
      "High": "94.90",
      "Low": "94.90",
      "Vol.": "",
      "Change %": "-2.01%"
    },
    {
      "Date": "10/07/2022",
      "Price": "96.85",
      "Open": "96.85",
      "High": "96.85",
      "Low": "96.85",
      "Vol.": "",
      "Change %": "3.20%"
    }
];

const getCoal = async (req, res) => {
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

module.exports = { getCoal };
