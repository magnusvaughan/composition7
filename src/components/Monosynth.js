import React from 'react';
import Tone from 'tone'

class Monosynth extends React.Component {

    constructor(props) {
        super(props);
        this.playSound = this.playSound.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {  
          synth: {
            oscillator: {
              type: 'triangle8'
            },
            envelope: {
              attack: 0,
              decay: 2,
              sustain: 0.4,
              release: 8
            }
          }
        };
    }

    handleChange (event) {
      var eventValue = event.target.value;
      var eventName = event.target.name;
      var eventParent = event.target.getAttribute('data-parent');
      console.log(eventName, eventValue, eventParent);
      this.setState(prevState => {
          const synth = {...prevState.synth};
          synth[eventParent][eventName] = parseFloat(eventValue);
          return { synth }
      })
    
    }

    playSound() {
        var synth = new Tone.Synth(this.state.synth).toMaster();
        synth.triggerAttackRelease('C4', '8n');
    }

    render() {
      return (
          <div className="synth-wrapper">
            <button onClick={this.playSound}>Click me</button>
            <div>
              <input onChange={this.handleChange} type="range" data-parent="envelope" id="attack" name="attack" min="0" max="1" step="0.1" value={this.state.synth.envelope.attack} />
              <label for="attack">Attack</label>
              <input onChange={this.handleChange} type="range" data-parent="envelope" id="decay" name="decay" min="0" max="100" value={this.state.synth.envelope.decay} />
              <label for="decay">Decay</label>
              <input onChange={this.handleChange} type="range" data-parent="envelope" id="sustain" name="sustain" min="0" max="10" step="1" value={this.state.synth.envelope.sustain} />
              <label for="sustain">Sustain</label>
              <input onChange={this.handleChange} type="range" data-parent="envelope" id="release" name="release" min="0" max="10" step="1" value={this.state.synth.envelope.release} />
              <label for="release">Release</label>
            </div>
          </div>

      )
    }

}

export default Monosynth;