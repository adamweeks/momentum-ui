const { generateFileFromTemplate } = require('@collab-ui/utils');
const path = require('path');
const colorData = require('../tokens/colors.json');
colorData.prefix = 'cui';

const generateColorsFromTokens = async () => {
  await generateFileFromTemplate(
    path.resolve(__dirname, '../scss/colors'),
    'settings-base.scss',
    colorData,
    path.resolve(__dirname, '../templates/colors-settings.hbs')
  )
  await generateFileFromTemplate(
    path.resolve(__dirname, '../scss/colors'),
    'utilities.scss',
    colorData,
    path.resolve(__dirname, '../templates/colors.hbs')
  )
}

generateColorsFromTokens();
