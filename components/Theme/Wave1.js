import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styles from './Style.js';

export default function WavyHeader({ customStyles }) {
  return (
    <View style={customStyles}>
      <View style={styles.wave1}>
        <Svg
          viewBox="0 0 1440 320"
          style={styles.svg}
        >
          <Path
            fill="#a2d9ff" fill-opacity="1" d="M0,96L24,122.7C48,149,96,203,144,208C192,213,240,171,288,138.7C336,107,384,85,432,96C480,107,528,149,576,186.7C624,224,672,256,720,277.3C768,299,816,309,864,282.7C912,256,960,192,1008,154.7C1056,117,1104,107,1152,128C1200,149,1248,203,1296,208C1344,213,1392,171,1416,149.3L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          />
        </Svg>
      </View>

    </View>
  );
}