/* eslint-disable @typescript-eslint/no-var-requires */
const deepMerge = require('deepmerge')
const androidConfig = require('./libs/android')
const iosConfig = require('./libs/ios')
const webConfig = require('./libs/web')
const StyleDictionary = require('style-dictionary')

// PATHS
const basePath = './examples/'
const buildPath = basePath + 'build/'

const StyleDictionaryExtended = StyleDictionary.extend({
  // adding imported configs
  ...deepMerge.all([androidConfig, iosConfig, webConfig]),
  source: ['tokens/*.json'],
  platforms: {
    css: {
      transformGroup: 'custom/css',
      buildPath: buildPath + '/css/',
      options: {
        fontFamilies: {
          'Akzidenz-Grotesk Pro': '"Akzidenz-Grotesk Pro", sans-serif'
        }
      },
      files: [
        {
          filter: require('./libs/web/filterWeb'),
          format: 'custom/css',
          destination: 'variables.css'
        }
      ]
    },
    scss: {
      transformGroup: 'custom/css',
      buildPath: buildPath + '/scss/',
      files: [
        {
          filter: require('./libs/web/filterWeb'),
          format: 'scss/variables',
          destination: 'variables.scss'
        }
      ]
    },
    'ios-swift': {
      transforms: [
        'name/cti/camel'
      ],
      buildPath: buildPath + 'ios/',
      options: {
        fontFamilies: {
          'Akzidenz-Grotesk Pro.700': 'AkzidenzGroteskPro_Bold',
          'Akzidenz-Grotesk Pro.900': 'AkzidenzGroteskPro_Black'
        }
      },
      files: [
        {
          destination: 'Size.swift',
          filter: (token) => token.type === 'dimension',
          className: 'Size',
          format: 'ios-swift/class.swift'
        }
      ],
      actions: [
        'ios/colorSets',
        'ios/fontStyles'
      ]
    },
    android: {
      transforms: [
        'name/cti/camel',
        'android/colorName',
        'android/fontSize',
        'android/pxToDp',
        'android/color'
      ],
      buildPath: `android/MaterialThemeBuilder/designsystem/src/main/`,
      files: [
          
        {
          destination: 'res/values/colors.xml',
          format: 'android/resourcesSorted',
          resourceType: 'color',
          filter: (token) => {
            return token.type === 'color' && token.path[1].toLowerCase() == 'light'
          }
        },
        {
          destination: 'res/values-night/colors.xml',
          format: 'android/resourcesSorted',
          resourceType: 'color',
          filter: (token) => {
            return token.type === 'color' && token.path[1].toLowerCase() === 'dark'
          }
        }
      ]
    }
  }
})

StyleDictionaryExtended.buildAllPlatforms()
