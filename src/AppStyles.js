import  { StyleSheet } from 'aphrodite/no-important';
import { blackSquare } from './squareStyles'

export default StyleSheet.create({
    contCss: {
        background: '#eee'
    },
    square: {
        ...blackSquare,
        width: '50px',
        height: '50px'
    },
    square2: {
        ...blackSquare,
        width: '80px',
        height: '80px'
    }
})