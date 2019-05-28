import React from 'react';
import Tone from 'tone'

class Monosynth extends React.Component {

    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
    }

    playSound() {
        var synth = new Tone.Synth({
            oscillator: {
              type: 'triangle8'
            },
            envelope: {
              attack: 0,
              decay: 2,
              sustain: 0.4,
              release: 8
            }
          }).toMaster()
          
        synth.triggerAttackRelease('C2', '8n')
    }

    render() {
      return (
          <button onClick={this.playSound}>Click me</button>
      )
    }

}

export default Monosynth;