import React from 'react';
import { View, Image } from 'react-native';
import Matter from 'matter-js';
import { SCREEN_WIDTH, SCREEN_HEIGHT, randomBetween } from '../../utilities';
import { WORLD } from '../../engine/physicsInit';
import styles from '../../styles/Asteroid.style';

const truckImagePath = require('../../../assets/psychetap/dangers/Truck.png');
