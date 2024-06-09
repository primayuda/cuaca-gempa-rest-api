require('dotenv').config();
const app = require('express')();
const weatherRoute = require('./routes/weather');
const quakeRoute = require('./routes/quake');
const marineRoute = require('./routes/marine');
const coalRoute = require('./routes/coal');
const geopoliticsRoute = require('./routes/geopolitics');
const responseCreator = require('./utils/responseCreator');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || '';

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=59');
  next();
});

app.use('/weather', weatherRoute);
app.use('/quake', quakeRoute);
app.use('/marine', marineRoute);
app.use('/coal', coalRoute);
app.use('/geopolitics', geopoliticsRoute);

app.get('/', (req, res) => {
  return res.status(200).send({
    maintainer: 'Aprita Primayuda',
    company: 'Starcore Analytics',
    endpoint: {
      weather: `${BASE_URL}/weather`,
      marine: `${BASE_URL}/marine`,
      coal: `${BASE_URL}/coal`,
      geopolitics: `${BASE_URL}/geopolitics`,
    },
  });
});

app.all('*', (req, res) => {
  return res.status(404).send(responseCreator({ message: 'Not found' }));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
